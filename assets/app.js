'use strict';
const $ = id => document.getElementById(id);
const $$ = query => [...document.querySelectorAll(query)];

// i18n core --------------------------------------------------------------
const LANGS = ['kk','ru','en'];
const HTML_LANG = {kk:'kk',ru:'ru',en:'en'};
let lang = 'ru';
try {
  const saved = localStorage.getItem('genome-mechanic-lang');
  if (LANGS.includes(saved)) lang = saved;
  else {
    const nav = (navigator.language || 'ru').slice(0,2).toLowerCase();
    if (LANGS.includes(nav)) lang = nav;
  }
} catch (_) {}
function lookup(dict, key) {
  return key.split('.').reduce((o,k)=>(o==null?o:o[k]), dict);
}
function t(key) {
  let v = lookup(I18N[lang], key);
  if (v === undefined) v = lookup(I18N.ru, key);   // fallback
  return v === undefined ? key : v;
}
const fmt = (str, vars={}) => str.replace(/\{(\w+)\}/g, (_,k)=>vars[k]);
function plural(n, forms) {
  if (lang === 'ru') {
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return forms[0];
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return forms[1];
    return forms[2];
  }
  if (lang === 'en') return n === 1 ? forms[0] : forms[1];
  return forms[0];
}
function translateDOM() {
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      el.setAttribute(attr.trim(), t(key.trim()));
    });
  });
  document.documentElement.lang = HTML_LANG[lang];
  document.title = t('meta.title');
  $('metaDesc').setAttribute('content', t('meta.desc'));
  $$('.lang-switch button').forEach(b => {
    const on = b.dataset.lang === lang;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

// Declare viewer before theme initialization (applyTheme reads it).
let currentProtein=0,viewer=null,viewerStarted=false,viewStyle='ribbon',spinning=true;
let activeLoad=0,localData=null,libraryLoadPromise=null,currentModelText=null;

// Theme preference: device / light / dark ------------------------------
const themeModes = ['auto','light','dark'];
let themeMode = 'auto';
try { themeMode = localStorage.getItem('genome-mechanic-theme') || 'auto'; } catch (_) {}
function applyTheme() {
  if(themeMode === 'auto') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme',themeMode);
  const label=t('theme.'+themeMode);
  const icons={auto:'◐',light:'☀',dark:'☾'};
  $('themeToggle').innerHTML=icons[themeMode]+' <span id="themeLabel">'+label+'</span>';
  $('themeToggle').title=fmt(t('theme.tip'),{m:label});
  const dark=themeMode==='dark'||(themeMode==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches);
  if(viewer){viewer.setBackgroundColor(dark?'#17212c':'#f8fafb');viewer.render();}
}
$('themeToggle').addEventListener('click',()=>{
  themeMode=themeModes[(themeModes.indexOf(themeMode)+1)%themeModes.length];
  try { localStorage.setItem('genome-mechanic-theme',themeMode); } catch (_) {}
  applyTheme();
});
window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change',()=>{if(themeMode==='auto')applyTheme();});

// Language switcher ------------------------------------------------------
function applyLang() {
  translateDOM();
  applyTheme();
  updateProteinDescription();
  refreshViewerStatus();
  $('viewRotate').textContent=t(spinning?'mol.rotateOn':'mol.rotateOff');
  renderBER();
  updatePlayLabel();
  renderPractice();
  renderFeedback();
  renderQuiz();
}
$$('.lang-switch button').forEach(b=>b.addEventListener('click',()=>{
  if(b.dataset.lang===lang) return;
  lang=b.dataset.lang;
  try { localStorage.setItem('genome-mechanic-lang',lang); } catch (_) {}
  applyLang();
}));

// Navigation ------------------------------------------------------------
function showPage(name) {
  $$('.page').forEach(p => p.classList.toggle('active', p.id === name));
  $$('.nav button').forEach(b => b.classList.toggle('active', b.dataset.page === name));
  window.scrollTo({top:0,behavior:'instant'});
  if(name === 'molecules') { initMolecularView(); setTimeout(() => { if(viewer) viewer.resize(); }, 150); }
  if(name === 'simulation') renderBER();
}
$$('[data-page]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
$$('[data-goto]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.goto)));

// Continuous stylized DNA drawing: illustrative fallback, not PDB data --
function makeHelix(canvasId) {
  const canvas = $(canvasId);
  const ctx = canvas.getContext('2d');
  let width=0,height=0,t=0;
  const maxRatio=2;
  function draw() {
    if(!canvas.isConnected) return;
    const rect = canvas.getBoundingClientRect();
    if(Math.abs(rect.width-width)>1 || Math.abs(rect.height-height)>1) {
      width=rect.width; height=rect.height;
      const ratio=Math.min(window.devicePixelRatio||1,maxRatio);
      canvas.width=Math.max(1,Math.round(width*ratio)); canvas.height=Math.max(1,Math.round(height*ratio));
      ctx.setTransform(ratio,0,0,ratio,0,0);
    }
    ctx.clearRect(0,0,width,height);
    const count=34,center=width/2,scale=Math.min(width/620,height/460),rad=110*scale;
    const top=height*.11,travel=height*.77;
    const pts=[];
    for(let i=0;i<count;i++) {
      const y=top+(i/(count-1))*travel;
      const a=(i*.52)+(t*.013);
      const z=Math.sin(a),x=Math.cos(a)*rad;
      pts.push({y,a,z,x});
    }
    for(let i=0;i<count-1;i++) {
      const p=pts[i],q=pts[i+1];
      ctx.strokeStyle=`rgba(126,202,226,${.2+(.5+p.z*.25)*.38})`;ctx.lineWidth=2.5*scale;
      ctx.beginPath();ctx.moveTo(center+p.x,p.y);ctx.lineTo(center-p.x,p.y);ctx.stroke();
    }
    for(let strand=0;strand<2;strand++){
      const sign=strand===0?1:-1;
      for(let i=0;i<count-1;i++){
        const p=pts[i],q=pts[i+1],depth=(sign*p.z+1)/2;
        ctx.strokeStyle=strand===0?`rgba(83,235,225,${.3+.7*depth})`:`rgba(176,159,255,${.3+.7*depth})`;
        ctx.lineWidth=(3+depth*4)*scale;ctx.lineCap='round';ctx.shadowBlur=10*scale;
        ctx.shadowColor=strand===0?'#47e6d9':'#9683ff';
        ctx.beginPath();ctx.moveTo(center+sign*p.x,p.y);ctx.lineTo(center+sign*q.x,q.y);ctx.stroke();ctx.shadowBlur=0;
      }
    }
    for(let i=0;i<count;i++) {
      const p=pts[i];
      for(let strand=0;strand<2;strand++) {
        const sign=strand===0?1:-1,depth=(sign*p.z+1)/2;
        ctx.beginPath();ctx.fillStyle=strand===0?'#8cfff0':'#d3c1ff';ctx.globalAlpha=.4+depth*.6;
        ctx.arc(center+sign*p.x,p.y,(2.5+depth*2.3)*scale,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
      }
    }
    t+=1;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}
makeHelix('heroCanvas');makeHelix('fallbackCanvas');

// Real 3D rendering. Each entry links to a verified experimental PDB. ---
const proteins = [
 {id:'1SSP',res:'1.90 Å',color:'#54e8db'},
 {id:'5DFI',res:'1.63 Å',color:'#86b3ff'},
 {id:'2FMS',res:'2.00 Å',color:'#c0a1ff'},
 {id:'3L2P',res:'3.00 Å',color:'#f6a2c1'}
];
const proteinText = i => t('mol.proteins.'+i);
const proteinList=$('enzymeList');
function renderProteinList() {
  proteinList.innerHTML = proteins.map((p,i)=>`<button class="enzyme-item ${currentProtein===i?'active':''}" data-protein="${i}"><span class="enzyme-num">0${i+1}</span><span><span class="enzyme-name">${proteinText(i).name}</span><span class="enzyme-sub">${proteinText(i).short}</span></span><span class="id">${p.id}</span></button>`).join('');
  $$('[data-protein]').forEach(b=>b.addEventListener('click',()=>selectProtein(+b.dataset.protein)));
}
function updateProteinDescription() {
  const p=proteins[currentProtein];
  const pt=proteinText(currentProtein);
  $('enzymeTitle').textContent=pt.name;
  $('enzymeText').textContent=pt.desc;
  $('pdbCode').textContent=p.id;
  $('enzymeRes').textContent=p.res;
  $('enzymeMethod').textContent=t('mol.xray');
  $('pdbLink').href='https://www.rcsb.org/structure/'+p.id;
  renderProteinList();
}
let viewerStatus={badge:'wait',msg:{k:'init'}};
function refreshViewerStatus() {
  $('viewerBadge').textContent=t('mol.badge.'+viewerStatus.badge);
  const box=$('viewerMessage');
  if(viewerStatus.msg){
    box.textContent=fmt(t('mol.msg.'+viewerStatus.msg.k),viewerStatus.msg.v||{});
    box.classList.remove('hidden');
  } else box.classList.add('hidden');
}
function setViewerStatus(badge,msg) { viewerStatus={badge,msg}; refreshViewerStatus(); }
function resolve3DLibrary() {
  if(window.$3Dmol) return Promise.resolve();
  if(libraryLoadPromise) return libraryLoadPromise;
  libraryLoadPromise=new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.src='https://3Dmol.org/build/3Dmol-min.js';
    script.async=true;
    const t=setTimeout(()=>{script.remove();reject(Error('3Dmol.js load timeout'));},16000);
    script.onload=()=>{clearTimeout(t);window.$3Dmol?resolve():reject(Error('3Dmol.js not initialised'));};
    script.onerror=()=>{clearTimeout(t);reject(Error('3Dmol.js download failed'));};
    document.head.appendChild(script);
  }).catch(err=>{libraryLoadPromise=null;throw err});
  return libraryLoadPromise;
}
async function initMolecularView() {
  if(!viewerStarted) {viewerStarted=true;await loadMolecule();}
}
async function selectProtein(i) {
  currentProtein=i;localData=null;currentModelText=null;
  updateProteinDescription();
  await loadMolecule();
}
async function loadMolecule() {
  const serial=++activeLoad;
  const p=proteins[currentProtein];
  setViewerStatus('wait',{k:'loading',v:{id:p.id}});
  try {
    await resolve3DLibrary();
    if(serial!==activeLoad)return;
    if(!viewer) { const dark=themeMode==='dark'||(themeMode==='auto'&&window.matchMedia('(prefers-color-scheme: dark)').matches); viewer=$3Dmol.createViewer($('molviewer'),{backgroundColor:dark?'#17212c':'#f8fafb',antialias:true}); }
    let pdb=localData;
    if(!pdb) {
      const url='https://files.rcsb.org/download/'+p.id+'.pdb';
      const ctrl=new AbortController();const timeout=setTimeout(()=>ctrl.abort(),18000);
      try {
        const response=await fetch(url,{signal:ctrl.signal});
        if(!response.ok)throw Error('HTTP '+response.status);
        pdb=await response.text();
      } finally {clearTimeout(timeout);}
    }
    if(serial!==activeLoad)return;
    if(!pdb.includes('ATOM')) throw Error('Invalid PDB file: no atom records');
    currentModelText=pdb;
    applyViewStyle();
    $('molviewer').style.display='block';
    setViewerStatus(localData?'local':'ok',null);
  } catch(err) {
    if(serial!==activeLoad)return;
    console.warn('3D unavailable:',err);
    $('molviewer').style.display='none';
    setViewerStatus('error',{k:'error'});
  }
}
function applyViewStyle() {
  if(!viewer || !currentModelText) return;
  const p=proteins[currentProtein];
  viewer.clear();
  viewer.addModel(currentModelText,'pdb');
  if(viewStyle==='surface') {
    viewer.setStyle({}, {cartoon:{color:p.color,opacity:.15}});
    viewer.addSurface($3Dmol.SurfaceType.VDW,{opacity:.87,color:p.color},{});
  } else if(viewStyle==='sticks') {
    viewer.setStyle({}, {stick:{radius:.13,colorscheme:'Jmol'}});
  } else {
    viewer.setStyle({},{cartoon:{color:p.color}});
    ['DA','DT','DG','DC','DU','A','U','G','C','T'].forEach(resn=>{
      viewer.addStyle({resn},{stick:{radius:.17,colorscheme:'Jmol'}});
    });
  }
  viewer.zoomTo();viewer.render();viewer.resize();
  const controls={ribbon:'viewRibbon',surface:'viewSurface',sticks:'viewSticks'};
  Object.entries(controls).forEach(([name,id])=>$(id).classList.toggle('primary',viewStyle===name));
}
$('viewRibbon').addEventListener('click',()=>{viewStyle='ribbon';applyViewStyle()});
$('viewSurface').addEventListener('click',()=>{viewStyle='surface';applyViewStyle()});
$('viewSticks').addEventListener('click',()=>{viewStyle='sticks';applyViewStyle()});
$('viewReset').addEventListener('click',()=>{if(viewer){viewer.zoomTo();viewer.render();}});
$('viewRotate').addEventListener('click',()=>{spinning=!spinning;$('viewRotate').textContent=t(spinning?'mol.rotateOn':'mol.rotateOff')});
$('retry3d').addEventListener('click',()=>{libraryLoadPromise=null;loadMolecule()});
$('localPDB').addEventListener('change',async e=>{
  const file=e.target.files?.[0];if(!file)return;
  if(file.size>18_000_000){setViewerStatus('error',{k:'tooBig'});return}
  localData=await file.text();
  await loadMolecule();
});
setInterval(()=>{if(viewer && spinning && $('molecules').classList.contains('active') && currentModelText){try{viewer.rotate(.35,'y');viewer.render()}catch(err){console.warn(err)}}},60);

// BER educational schematic --------------------------------------------
const berStepsText = () => t('sim.steps');
const BER_COUNT = 6;
const basesTop=['A','T','G','C','A','T','U','G','C','A','T','G','C'];
const basesBottom=['T','A','C','G','T','A','G','C','G','T','A','C','G'];
let berIndex=0,berTimer=null;
function makeDNAPairs() {
  $('dnaPairs').innerHTML=basesTop.map((base,i)=>{
    const x=158+i*50,damaged=i===6;
    const top=damaged?(berIndex===0?'U':berIndex<4?'': 'C'):base;
    const bg=damaged?(berIndex>=4?'#135b4c':'#a0394f'):'#15485b';
    const gap=damaged&&(berIndex>=2&&berIndex<=3);
    const topRect=top?`<rect x="${x-17}" y="159" width="34" height="42" rx="8" fill="${bg}" stroke="${damaged?'#ff98a4':'#317d94'}"/><text x="${x}" y="186" text-anchor="middle" fill="${damaged?'#fff5d6':'#bafaff'}" font-size="20" font-weight="750">${top}</text>`:`<rect x="${x-17}" y="159" width="34" height="42" rx="8" fill="#10212b" stroke="#ffcb8a" stroke-dasharray="5 4"/><text x="${x}" y="186" text-anchor="middle" fill="#ffcb8a" font-size="14">AP</text>`;
    return `<g><line x1="${x}" y1="197" x2="${x}" y2="239" stroke="${damaged?'#e9b588':'#426e83'}" stroke-width="3" opacity=".65"/>${topRect}<rect x="${x-17}" y="240" width="34" height="42" rx="8" fill="#2a2857" stroke="#6f62ab"/><text x="${x}" y="267" text-anchor="middle" font-size="20" fill="#d9d0ff" font-weight="750">${basesBottom[i]}</text></g>`;
  }).join('');
}
function renderBER() {
  const steps=berStepsText(),s=steps[berIndex];
  $('phaseCounter').textContent=String(berIndex+1).padStart(2,'0')+' / 06';
  $('currentStepTitle').textContent=s.title;
  $('currentStepText').textContent=s.desc;
  $('currentStepWhy').textContent=s.why;
  $('stepCards').innerHTML=steps.map((st,i)=>`<button class="step-card ${i===berIndex?'active':i<berIndex?'done':''}" data-ber="${i}"><span class="n">${String(i+1).padStart(2,'0')}</span><span><strong>${st.title}</strong><small>${st.brief}</small></span></button>`).join('');
  $$('[data-ber]').forEach(b=>b.addEventListener('click',()=>{stopBER();berIndex=+b.dataset.ber;renderBER()}));
  $('simProgress').style.width=100*berIndex/(BER_COUNT-1)+'%';
  makeDNAPairs();
  $('repairLabel').textContent=s.phase;
  $('repairLabel').setAttribute('fill',berIndex===5?'#86f3bb':berIndex>=4?'#c0efc5':'#ff9baf');
  $('dnaLesion').style.opacity=berIndex<2?'1':'0';
  $('dnaGap').style.opacity=(berIndex===2||berIndex===3)?'1':'0';
  $('spark').style.opacity=berIndex===5?'1':'0';
  $('enzymeTag').style.opacity=berIndex===0?'0':'1';
  $('enzymeTagText').textContent=s.enzyme;
  const sprite=$('enzymeSprite');
  const x=berIndex===0?-100:berIndex===1?450:berIndex===2?475:berIndex===3?500:berIndex===4?445:berIndex===5?540:0;
  const y=berIndex===0?70:berIndex===2?116:berIndex===3?128:berIndex===5?135:107;
  sprite.style.opacity=berIndex===0?'0':'1';
  sprite.style.transform=`translate(${x}px,${y}px)`;
  $('prevStep').disabled=berIndex===0;
  $('nextStep').disabled=berIndex===BER_COUNT-1;
}
function updatePlayLabel() {$('playSteps').textContent=t(berTimer?'sim.pause':'sim.play')}
function stopBER() {if(berTimer){clearInterval(berTimer);berTimer=null}updatePlayLabel()}
function moveBER(direction) {berIndex=Math.max(0,Math.min(BER_COUNT-1,berIndex+direction));renderBER();if(berIndex===BER_COUNT-1)stopBER()}
$('prevStep').addEventListener('click',()=>{stopBER();moveBER(-1)});
$('nextStep').addEventListener('click',()=>{stopBER();moveBER(1)});
$('resetSteps').addEventListener('click',()=>{stopBER();berIndex=0;renderBER()});
$('playSteps').addEventListener('click',()=>{
  if(berTimer){stopBER();return;}
  if(berIndex===BER_COUNT-1){berIndex=0;renderBER();}
  berTimer=setInterval(()=>moveBER(1),Number($('stepSpeed').value));
  updatePlayLabel();
});
$('stepSpeed').addEventListener('change',()=>{if(berTimer){stopBER();$('playSteps').click()}});
for(let i=0;i<=18;i++)$('gridLines').insertAdjacentHTML('beforeend',`<line x1="${40+i*48}" y1="25" x2="${40+i*48}" y2="404" stroke="#3c7180" opacity=".08"/>`);

// Interactive short-patch BER experiment --------------------------------
const LAB_IDS=['gly','ape','drp','pol','lig'];
const EXTRA_IDS=['ner','rna','mut','join'];
const labAction = i => ({id:LAB_IDS[i],...t('prac.actions.'+i)});
const extraAction = i => ({id:EXTRA_IDS[i],label:t('prac.extras.'+i)});
let labIndex=0,labErrors=0,labHistory=[];
let feedback={kind:'init'};
function renderFeedback() {
  const box=$('practiceFeedback');
  if(feedback.kind==='ok') {
    box.className='practice-feedback success';
    box.textContent=labIndex===5?t('prac.finish'):labAction(feedback.step).desc+' '+t('prac.next');
  } else if(feedback.kind==='err') {
    box.className='practice-feedback error';
    box.textContent=t('prac.wrong')+' '+t('prac.cues.'+feedback.at);
  } else {
    box.className='practice-feedback';
    box.textContent=t('prac.init');
  }
}
function renderPractice() {
  const all=[labAction(3),extraAction(0),labAction(0),extraAction(1),labAction(4),extraAction(2),labAction(1),extraAction(3),labAction(2)];
  $('actionOptions').innerHTML=all.map(action=>`<button class="action" data-action-id="${action.id}" ${labIndex===5?'disabled':''}>${action.label}</button>`).join('');
  $$('[data-action-id]').forEach(b=>b.addEventListener('click',()=>chooseLabAction(b.dataset.actionId)));
  $('practiceCount').textContent=labIndex+' / 5';
  $('practiceProgress').style.width=(labIndex/5*100)+'%';
  const topSequence=labIndex===0?'<em>U</em>':labIndex<4?'<em>□</em>':'<strong class="fixed">C</strong>';
  $('sequenceTop').innerHTML=`5′ A T G ${topSequence} A C T G 3′`;
  $('journalItems').innerHTML=LAB_IDS.map((_,i)=>`<div class="journal-item ${i<labIndex?'completed':''}">${i<labIndex?'✓ ':String(i+1).padStart(2,'0')+' · '}${labAction(i).label}</div>`).join('');
}
function chooseLabAction(id) {
  if(labIndex>=LAB_IDS.length)return;
  if(id===LAB_IDS[labIndex]) {
    labHistory.push(labIndex);
    feedback={kind:'ok',step:labIndex};
    labIndex++;
  } else {
    labErrors++;
    feedback={kind:'err',at:labIndex};
  }
  renderFeedback();
  renderPractice();
}
function resetLab() {
  labIndex=0;labErrors=0;labHistory=[];
  feedback={kind:'init'};
  renderFeedback();
  renderPractice();
}
$('practiceReset').addEventListener('click',resetLab);
$('downloadJournal').addEventListener('click',()=>{
  const j=k=>t('prac.j.'+k);
  const text=[
    j('title'),
    j('model'),
    j('lesion'),
    j('steps')+' '+labIndex+'/5',
    j('errors')+' '+labErrors,'',j('work'),
    ...labHistory.map((idx,n)=>(n+1)+'. '+labAction(idx).desc),'',
    j('result')+' '+(labIndex===5?j('ok'):j('no')),
    j('concl'),
    j('note')
  ].join('\n');
  const href=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));
  const a=document.createElement('a');a.href=href;a.download='DNA-Repair-Lab-journal.txt';a.click();
  setTimeout(()=>URL.revokeObjectURL(href),2000);
});

// Knowledge check -------------------------------------------------------
const quizData = () => t('quiz.questions');
const quizOk = () => t('quiz.ok');
let questionIndex=0,quizPoints=0,chosen=null;
const pad2 = n => String(n).padStart(2,'0');
function scoreText(n) { return n+' '+plural(n,t('quiz.pts')); }
function renderQuiz() {
  const questions=quizData(),total=questions.length;
  $('quizTotal').textContent=fmt(t('quiz.total'),{n:total});
  $('quizScore').textContent=scoreText(quizPoints);
  $('quizCurrentPoints').innerHTML=pad2(quizPoints)+'<span> / '+pad2(total)+'</span>';
  $('quizRestart').textContent=t('quiz.restart');
  if(questionIndex>=total){
    $('questionNumber').textContent=t('quiz.doneNum');
    $('questionText').textContent=t('quiz.doneTitle');
    $('quizAnswers').innerHTML='';
    $('quizExplanation').textContent=fmt(t('quiz.yours'),{s:quizPoints,m:total})+' '+(quizPoints>=7?t('quiz.hi'):quizPoints>=5?t('quiz.mid'):t('quiz.low'));
    $('quizResult').textContent=fmt(t('quiz.final'),{p:Math.round(100*quizPoints/total)});
    $('quizNext').disabled=true;
    $('quizNext').textContent=t('quiz.next');
    $('quizProgress').style.width='100%';
    return;
  }
  const q=questions[questionIndex],ok=quizOk()[questionIndex];
  $('questionNumber').textContent=fmt(t('quiz.qnum'),{n:pad2(questionIndex+1),m:pad2(total)});
  $('questionText').textContent=q.q;
  $('quizAnswers').innerHTML=q.a.map((v,i)=>{
    let cls='quiz-answer';
    if(chosen!==null){ if(i===ok)cls+=' good'; else if(i===chosen)cls+=' bad'; }
    return `<button class="${cls}" data-answer="${i}" ${chosen!==null?'disabled':''}>${String.fromCharCode(65+i)}. ${v}</button>`;
  }).join('');
  $$('[data-answer]').forEach(b=>b.addEventListener('click',()=>answerQuiz(+b.dataset.answer)));
  $('quizExplanation').textContent=chosen===null?t('quiz.prompt'):(chosen===ok?t('quiz.right'):t('quiz.bad'))+' '+q.why;
  $('quizResult').textContent=t('quiz.resultWait');
  $('quizNext').disabled=chosen===null;
  $('quizNext').textContent=questionIndex===total-1?t('quiz.finishBtn'):t('quiz.next');
  $('quizProgress').style.width=100*(questionIndex+(chosen!==null?1:0))/total+'%';
}
function answerQuiz(index) {
  if(chosen!==null)return;
  chosen=index;
  if(index===quizOk()[questionIndex]) quizPoints++;
  renderQuiz();
}
$('quizNext').addEventListener('click',()=>{questionIndex++;chosen=null;renderQuiz()});
$('quizRestart').addEventListener('click',()=>{questionIndex=0;quizPoints=0;chosen=null;renderQuiz()});

// Start ------------------------------------------------------------------
applyLang();
