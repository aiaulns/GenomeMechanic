'use strict';
/* Genome Mechanic — translations: ru / kk / en
   Keys with dots are resolved as paths (e.g. "th.cards.0.h"). */
const I18N = {

/* ===================================================== RUSSIAN ===== */
ru: {
  meta:{title:'Genome Mechanic — виртуальная лаборатория репарации ДНК',desc:'Genome Mechanic — виртуальная лаборатория молекулярной биологии: механизмы репарации ДНК, экспериментальные 3D-структуры и интерактивные задания.'},
  nav:{aria:'Разделы',overview:'Обзор',molecules:'3D-молекулы',simulation:'Анимация BER',practice:'Практикум',theory:'Теория',diseases:'Заболевания',test:'Тест'},
  theme:{aria:'Изменить тему оформления',auto:'Авто',light:'Светлая',dark:'Тёмная',tip:'Тема: {m} · нажмите для переключения'},
  lang:{aria:'Язык интерфейса'},
  ov:{
    eyebrow:'ВИРТУАЛЬНАЯ ЛАБОРАТОРИЯ · МОЛЕКУЛЯРНАЯ БИОЛОГИЯ',
    h1:"Когда ДНК<br><span class='gradient-text'>нужна помощь.</span>",
    lead:'Исследуй репарацию оснований, изучай <strong>экспериментальные 3D-структуры</strong> ферментов и попробуй восстановить повреждённый участок ДНК самостоятельно.',
    btn1:'Исследовать молекулы <span>↗</span>',btn2:'Запустить BER <span>▶</span>',
    tags:['4 структуры из PDB','6 этапов BER','Интерактивные задания'],
    canvas:'Анимированная учебная модель двойной спирали ДНК',
    section:'ПРОГРАММА ИССЛЕДОВАНИЯ',open:'Открыть ↗',
    f:[
      {t:'Реальная 3D-структура',p:'Вращай ферменты и комплексы с ДНК. Данные кристаллографических исследований PDB.'},
      {t:'Анимация репарации',p:'Следи за удалением урацила, надрезом, синтезом и лигированием.'},
      {t:'Виртуальный практикум',p:'Самостоятельно подбери ферменты и получи исследовательский журнал.'},
      {t:'Заболевания человека',p:'Девять состояний, связанных с нарушениями репарации и стабильности генома.'},
      {t:'Проверь знания',p:'Вопросы по механизмам репарации с объяснениями и результатом.'}
    ]
  },
  au:{
    title:'АВТОРСТВО',
    studentK:'Автор',student:'Студентка 1 курса факультета «Медицина», группа Мед26-046р',
    uniK:'Университет',univ:'КазНМУ им. Асфендиярова',
    supK:'Научный руководитель',sup:'Альмухамбетова Светлана Кадыровна, ассоциированный профессор',
    deptK:'Кафедра',dept:'Кафедра молекулярной биологии и медицинской генетики'
  },
  mol:{
    h1:"Настоящие <span class='gradient-text'>молекулы.</span>",
    p:'Выбери фермент и рассмотри его пространственную структуру, определённую экспериментально. Можно вращать, приближать, переключаться между лентами и молекулярной поверхностью.',
    head:'МОЛЕКУЛЯРНЫЙ ПРОСМОТРЩИК',
    fallbackAria:'Схематичная вращающаяся модель ДНК при отсутствии 3D-подключения',
    ribbon:'Ленты',surface:'Поверхность',sticks:'Связи',center:'⌖ Центр',rotateOn:'⟳ Автовращение: вкл',rotateOff:'⟳ Автовращение: выкл',
    foot:'ЛКМ — вращение · Колесо — масштаб · ПКМ — сдвиг',
    lib:'БИБЛИОТЕКА ФЕРМЕНТОВ · BER',focus:'ОБРАЗЕЦ В ФОКУСЕ',structure:'СТРУКТУРА',method:'МЕТОД',resolution:'РАЗРЕШЕНИЕ',xray:'Рентгеноструктурный анализ',
    noticeStrong:'Интернет нужен только для настоящего 3D:',
    noticeBody:'библиотека 3Dmol.js и структуры PDB загружаются по HTTPS. Если загрузка не удалась, ты увидишь учебную анимацию вместо белка. Можно также открыть собственный локальный файл',
    choose:'Выбрать PDB',retry:'Повторить загрузку ↻',
    badge:{wait:'загрузка…',ok:'PDB загружена',local:'локальный PDB',error:'нет подключения'},
    msg:{init:'Загружаем трёхмерную модель…',loading:'Получаем экспериментальную структуру {id} из Protein Data Bank…',error:'3D не загрузилось: проверь интернет и нажми «Повторить загрузку». Сейчас показана учебная спираль, не форма фермента.',tooBig:'Файл слишком большой (лимит 18 МБ).'},
    proteins:[
      {name:'Урацил-ДНК-гликозилаза',short:'UNG · поиск урацила',desc:'Человеческая урацил-ДНК-гликозилаза в комплексе с ДНК. Важна для начала BER: узнаёт урацил и удаляет его, образуя AP-сайт. В этой структуре присутствует ДНК-комплекс.'},
      {name:'AP-эндонуклеаза 1',short:'APE1 · надрез AP-сайта',desc:'Человеческая APE1 в комплексе с модельным ДНК-субстратом. Надрезает сахарофосфатный остов рядом с AP-сайтом, подготавливая участок к дальнейшей обработке.'},
      {name:'ДНК-полимераза β',short:'POL β · заполнение пробела',desc:'Человеческая полимераза β с ДНК, содержащей пробел, и аналогом входящего нуклеотида. Полимераза β восполняет короткий пробел при варианте BER и обладает dRP-лиазной активностью.'},
      {name:'ДНК-лигаза III',short:'LIG3 · соединение цепи',desc:'Структурный комплекс человеческой ДНК-лигазы III с ДНК. Лигаза восстанавливает фосфодиэфирную связь в цепи; показан один из экспериментально изученных комплексов.'}
    ]
  },
  sim:{
    h1:"Репарация оснований <span class='gradient-text'>BER.</span>",
    p:'Модель короткозаплаточного BER: удаление урацила, образовавшегося, например, при дезаминировании цитозина. Неповреждённая цепь служит матрицей.',
    chip:'МОДЕЛЬ · НЕ В МАСШТАБЕ',svgAria:'Схематичная анимация изменения повреждённого участка ДНК во время BER',
    bottom:'СХЕМАТИЧЕСКАЯ АНИМАЦИЯ · СОБЫТИЯ ПОКАЗАНЫ В УЧЕБНОМ МАСШТАБЕ',
    prev:'← Назад',play:'▶ Воспроизвести',pause:'Ⅱ Пауза',next:'Далее →',reset:'↺ Сначала',speed:'Скорость',
    timeline:'ХРОНОЛОГИЯ РЕПАРАЦИИ',current:'ТЕКУЩЕЕ СОБЫТИЕ',
    steps:[
      {title:'Обнаружено повреждение',brief:'Урацил напротив гуанина',desc:'В результате дезаминирования цитозина в ДНК может появиться урацил. В данной модели U находится напротив G. Если повреждение не исправить, при следующей репликации может закрепиться изменение последовательности.',why:'Исходная правильная пара была C–G. Неповреждённая цепь с G позже подскажет, какой нуклеотид восстановить.',enzyme:'',phase:'Повреждение'},
      {title:'Удаление урацила',brief:'Работает ДНК-гликозилаза',desc:'Урацил-ДНК-гликозилаза распознаёт урацил в ДНК и разрывает связь между основанием и дезоксирибозой. Урацил удаляется, но сахарофосфатный остов пока остаётся.',why:'После удаления основания образуется AP-сайт — место без азотистого основания. Самостоятельно заполнять его полимераза ещё не может.',enzyme:'ДНК-ГЛИКОЗИЛАЗА · UNG',phase:'AP-сайт'},
      {title:'Разрез цепи',brief:'APE1 узнаёт AP-сайт',desc:'AP-эндонуклеаза APE1 разрезает фосфодиэфирную связь рядом с AP-сайтом. Образуется одноцепочечный разрыв, который подготавливает ДНК к удалению остатка сахаро-фосфатной группы.',why:'Эта стадия превращает повреждённый участок в субстрат для дальнейшей обработки.',enzyme:'AP-ЭНДОНУКЛЕАЗА · APE1',phase:'Надрез'},
      {title:'Подготовка пробела',brief:'Удаление 5′-dRP',desc:'ДНК-полимераза β обладает 5′-dRP-лиазной активностью и удаляет оставшийся дезоксирибозофосфатный фрагмент. В цепи остаётся короткий пробел.',why:'При короткозаплаточном BER должен быть удалён не только повреждённый азотистый фрагмент, но и остаток повреждённого нуклеотида.',enzyme:'ДНК-ПОЛИМЕРАЗА β',phase:'Пробел'},
      {title:'Синтез нового нуклеотида',brief:'Pol β вставляет C',desc:'Полимераза β синтезирует недостающий нуклеотид по неповреждённой матрице. Напротив G устанавливается C, образуя нормальную пару C–G.',why:'Фосфодиэфирная связь на одном конце ещё отсутствует: после синтеза сохраняется разрыв (nick).',enzyme:'ДНК-ПОЛИМЕРАЗА β',phase:'Новый C'},
      {title:'Восстановление завершено',brief:'Лигаза закрывает разрыв',desc:'Комплекс с ДНК-лигазой III (в клетках человека часто вместе с XRCC1) может завершить короткозаплаточный BER, соединяя концы ДНК. Целостность цепи восстановлена.',why:'Схема показывает один распространённый вариант BER, а не единственно возможный путь. Молекулярные движения намеренно упрощены.',enzyme:'ДНК-ЛИГАЗА III · LIG3',phase:'Восстановлено'}
    ]
  },
  prac:{
    h1:"Виртуальный <span class='gradient-text'>практикум.</span>",
    p:'Урацил оказался напротив гуанина после дезаминирования цитозина. Подбери последовательно необходимые действия для короткозаплаточного BER.',
    chip:'ПРАКТИКА · 5 ДЕЙСТВИЙ',sample:'ОБРАЗЕЦ 001 · U:G MISMATCH',damaged:'ПОВРЕЖДЁННАЯ ЦЕПЬ',template:'МАТРИЧНАЯ ЦЕПЬ',
    choose:'ВЫБЕРИ СЛЕДУЮЩЕЕ ДЕЙСТВИЕ',init:'Сначала распознай и удали повреждённое основание.',
    resetBtn:'↺ Новый опыт',download:'↓ Скачать журнал .txt',log:'ЖУРНАЛ ЭКСПЕРИМЕНТА',done:'завершено',
    note:'Один из вариантов механизма BER человека. Для других повреждений ферменты и детали процесса могут отличаться.',
    actions:[
      {label:'Применить ДНК-гликозилазу',desc:'Урацил распознан и удалён. Образовался AP-сайт.'},
      {label:'Внести APE1',desc:'APE1 сделала надрез рядом с AP-сайтом.'},
      {label:'Удалить 5′-dRP',desc:'dRP-лиазная функция Pol β удалила сахарофосфатный остаток.'},
      {label:'Добавить нуклеотид с Pol β',desc:'Неповреждённый G определил включение C.'},
      {label:'Задействовать ДНК-лигазу',desc:'Разрыв закрыт: повреждённый участок восстановлен.'}
    ],
    extras:['Вырезать длинный фрагмент NER','Запустить РНК-полимеразу','Заменить G на A','Сразу соединить цепь'],
    cues:['Сначала нужно распознать и удалить урацил.','Основание уже удалено. Что надрезает AP-сайт?','Надрез сделан. Нужно убрать остаток дезоксирибозофосфата.','Пробел готов. Какой фермент достроит C?','Новый C установлен. Теперь нужно соединить остов ДНК.'],
    next:'Следующий шаг?',wrong:'Не подходит для данного этапа. Подсказка:',finish:'Отлично! Модель BER завершена. Ты восстановил(а) пару C–G.',
    j:{title:'DNA REPAIR LAB / ЖУРНАЛ ВИРТУАЛЬНОГО ЭКСПЕРИМЕНТА',model:'Модель: короткозаплаточная эксцизионная репарация оснований (BER)',lesion:'Исходное повреждение: U напротив G (дезаминирование C)',steps:'Пройдено стадий:',errors:'Ошибочных попыток:',work:'ХОД РАБОТЫ:',result:'РЕЗУЛЬТАТ:',ok:'модельный участок восстановлен: C–G',no:'эксперимент не завершён',concl:'Вывод: последовательная работа специализированных ферментов необходима для устранения повреждённого основания и восстановления целостности ДНК.',note:'Примечание: учебная симуляция, а не реальный биохимический эксперимент.'}
  },
  th:{
    eyebrow:'ТЕОРЕТИЧЕСКИЙ РАЗДЕЛ',
    h1:"Механизмы <span class='gradient-text'>репарации ДНК.</span>",
    p:'Клетки и другие организмы используют несколько систем для устранения повреждений ДНК и поддержания стабильности генома. Выбор механизма зависит от типа повреждения и биологического контекста.',
    anim:[
      {t:'Фотореактивация',p:'Фотолиаза связывает фотодимер; свет активирует восстановление оснований.',s:'СВЕТ → ВОССТАНОВЛЕНИЕ'},
      {t:'Удаление алкильных групп',p:'MGMT переносит алкильную группу на себя и восстанавливает гуанин.',s:'ПЕРЕНОС ГРУППЫ'},
      {t:'BER',p:'Гликозилаза удаляет основание; участок заполняется и сшивается.',s:'УДАЛЕНИЕ → ЗАПОЛНЕНИЕ'},
      {t:'NER',p:'Повреждённый фрагмент цепи вырезается, затем синтезируется заново.',s:'ВЫРЕЗАНИЕ ФРАГМЕНТА'},
      {t:'MMR',p:'Несоответствие распознаётся; ошибочный участок новой цепи заменяется.',s:'ИСПРАВЛЕНИЕ НЕСООТВЕТСТВИЯ'},
      {t:'HR',p:'Повреждённая цепь использует гомологичную ДНК как матрицу.',s:'КОПИРОВАНИЕ ПО МАТРИЦЕ'},
      {t:'NHEJ',p:'Белковый комплекс сближает и соединяет концы двунитевого разрыва.',s:'СОЕДИНЕНИЕ КОНЦОВ'},
      {t:'SOS-ответ',p:'У бактерий RecA способствует снятию репрессии LexA и запуску ответа.',s:'АКТИВАЦИЯ ГЕНОВ ОТВЕТА'}
    ],
    cards:[
      {h:'Прямая репарация',p:'<b>Фотореактивация.</b> Фотолиазы используют энергию видимого/синего света для расщепления некоторых УФ-индуцированных пиримидиновых димеров. Этот механизм встречается у бактерий, грибов, растений и многих животных, но отсутствует у человека и других плацентарных млекопитающих.<br><br><b>Удаление алкильных групп.</b> MGMT переносит алкильную группу с O⁶-гуанина на собственный активный остаток цистеина и необратимо инактивируется. Ферменты семейства AlkB окислительно деметилируют некоторые повреждённые основания.',lb:'Принцип',lv:'Химическая модификация устраняется без вырезания участка цепи'},
      {h:'Эксцизионная репарация оснований',p:'Исправляет небольшие повреждения отдельных оснований: дезаминирование, окисление и некоторые виды алкилирования. ДНК-гликозилаза удаляет повреждённое основание, образуя AP-сайт. Затем AP-эндонуклеаза, ДНК-полимераза и лигаза восстанавливают участок.',lb:'Ключевые участники у человека',lv:'ДНК-гликозилазы → APE1 → Pol β → ДНК-лигаза'},
      {h:'Нуклеотидная эксцизионная репарация',p:'Устраняет объёмные повреждения, деформирующие двойную спираль, включая УФ-фотопродукты. Повреждённый фрагмент одной цепи вырезается, после чего ДНК-полимераза заполняет промежуток, а лигаза соединяет цепь.',lb:'Два варианта',lv:'Геномная NER и NER, сопряжённая с транскрипцией'},
      {h:'Репарация неспаренных оснований',p:'Исправляет ошибки репликации: неправильные пары оснований и небольшие вставки или делеции. Система распознаёт несоответствие, удаляет участок новосинтезированной цепи и восстанавливает его по матрице.',lb:'Ключевые белки у человека',lv:'MSH2–MSH6 / MSH2–MSH3, MLH1–PMS2'},
      {h:'Репарация двунитевых разрывов',p:'<b>Гомологичная рекомбинация (HR).</b> Использует гомологичную последовательность, обычно сестринскую хроматиду, как матрицу. Поэтому особенно важна в S- и G₂-фазах клеточного цикла.<br><br><b>Негомологичное соединение концов (NHEJ).</b> Соединяет концы разрыва без длинной гомологичной матрицы. Может сопровождаться небольшими вставками или потерями нуклеотидов.',lb:'Ключевые белки',lv:'HR: BRCA1/2, RAD51 · NHEJ: Ku70/80, DNA-PKcs, XRCC4–лигаза IV'},
      {h:'SOS-ответ',p:'Индуцируемый ответ на повреждение ДНК, подробно изученный у бактерий, например Escherichia coli. При накоплении одноцепочечной ДНК активируется RecA, что способствует снятию репрессии LexA и экспрессии генов ответа. Включаются системы репарации и транслезионного синтеза; последний может быть ошибочным.',lb:'Важно',lv:'SOS-ответ — бактериальная система, не механизм репарации клеток человека'}
    ],
    cmp:'СРАВНЕНИЕ МЕХАНИЗМОВ',cmpH:'Тип повреждения и основной путь',
    head:['Механизм','Основная мишень','Биологический контекст'],
    rows:[
      ['Прямая репарация','Некоторые фотопродукты и алкилированные основания','Фотолиазы отсутствуют у человека; MGMT присутствует'],
      ['BER','Небольшие химические изменения оснований','В том числе клетки человека'],
      ['NER','Объёмные повреждения, искажающие спираль','В том числе клетки человека'],
      ['MMR','Ошибки спаривания после репликации','В том числе клетки человека'],
      ['HR / NHEJ','Двунитевые разрывы ДНК','В том числе клетки человека'],
      ['SOS-ответ','Комплексный ответ на повреждение генома','Бактерии; не система репарации человека']
    ],
    srcOver:'ИСТОЧНИКИ МОЛЕКУЛЯРНЫХ СТРУКТУР',srcP:'Экспериментальные структуры белков доступны в Protein Data Bank. Каждая структура отражает отдельное исследованное состояние молекулы.'
  },
  dis:{
    eyebrow:'КЛИНИЧЕСКАЯ ГЕНЕТИКА',
    h1:"Заболевания и <span class='gradient-text'>репарация ДНК.</span>",
    p:'Наследственные нарушения систем поддержания стабильности генома и связанные с ними клинические состояния.',
    over:'ЗАБОЛЕВАНИЯ ЧЕЛОВЕКА',h2:'Нарушения репарации и стабильности генома',
    cards:[
      {t:'Пигментная ксеродерма',p:'Наследственные дефекты белков NER приводят к нарушенному удалению УФ-индуцированных повреждений и резко повышают чувствительность кожи к ультрафиолету.',s:'Связанный путь: NER'},
      {t:'Атаксия-телеангиэктазия',p:'Варианты гена ATM нарушают клеточный ответ на двунитевые разрывы ДНК, контроль клеточного цикла и поддержание стабильности генома.',s:'Связанный путь: ответ на двунитевые разрывы'},
      {t:'Синдром Коккейна',p:'Связан с дефектами ERCC6/CSB или ERCC8/CSA, участвующих в NER, сопряжённой с транскрипцией.',s:'Связанный путь: TC-NER'},
      {t:'Трихотиодистрофия',p:'Некоторые формы обусловлены вариантами генов ERCC2/XPD, ERCC3/XPB или GTF2H5, связанных с комплексом TFIIH и NER.',s:'Связанный путь: NER'},
      {t:'Синдром Блума',p:'Вызван патогенными вариантами BLM, кодирующего ДНК-геликазу семейства RecQ; характеризуется повышенной геномной нестабильностью.',s:'Связанный процесс: поддержание стабильности генома'},
      {t:'Синдром Вернера',p:'Связан с нарушением функции геликазы WRN, участвующей в репликации, рекомбинации и поддержании стабильности генома.',s:'Связанный процесс: репликация и рекомбинация'},
      {t:'Синдром Секеля',p:'Генетически неоднородное состояние; некоторые формы связаны с вариантами ATR или генов, влияющих на ответ на репликационный стресс.',s:'Связанный процесс: контроль репликационного стресса'},
      {t:'Синдром Линча',p:'Наследственные патогенные варианты MLH1, MSH2, MSH6, PMS2 или делеции EPCAM нарушают систему исправления ошибок репликации.',s:'Связанный путь: MMR'},
      {t:'Наследственная предрасположенность к раку молочной железы и яичников',p:'Патогенные варианты BRCA1 или BRCA2 нарушают эффективную гомологичную рекомбинацию и повышают риск ряда опухолей.',s:'Связанный путь: HR'}
    ]
  },
  quiz:{
    h1:"Проверь <span class='gradient-text'>себя.</span>",
    p:'Вопросы по механизмам репарации, ферментам и этапам BER. После ответа получишь научное объяснение.',
    total:'{n} ВОПРОСОВ',qnum:'ВОПРОС {n} / {m}',pts:['балл','балла','баллов'],
    prompt:'Выбери правильный вариант.',next:'Следующий вопрос →',finishBtn:'Завершить тест →',restart:'↺ Начать заново',
    aside:'ПРОТОКОЛ ОЦЕНКИ',asideP:'За каждый правильный ответ начисляется один балл.',resultWait:'Результат появится после завершения теста.',
    doneNum:'ТЕСТ ЗАВЕРШЁН',doneTitle:'Исследование знаний завершено',
    yours:'Твой результат: {s} из {m}.',hi:'Превосходно!',mid:'Хорошо! Повтори сложные этапы.',low:'Вернись к разделам «Теория» и «Анимация BER».',
    final:'Итоговая оценка: {p}% правильных ответов.',right:'✓ Правильно.',bad:'✕ Неверно.',
    questions:[
      {q:'Что возникает после того, как ДНК-гликозилаза удалила урацил?',a:['AP-сайт (участок без основания)','Двойной разрыв ДНК','Новая РНК'],why:'Разрыв N-гликозидной связи удаляет основание, оставляя AP-сайт.'},
      {q:'Какая пара должна быть восстановлена на месте U–G в нашем примере?',a:['A–T','C–G','U–A'],why:'Урацил образовался после дезаминирования цитозина. Неповреждённый G служит матрицей для восстановления C.'},
      {q:'Какова роль APE1 в короткозаплаточном BER?',a:['Надрезать цепь возле AP-сайта','Соединить разрыв лигазой','Синтезировать белок'],why:'APE1 — AP-эндонуклеаза, она надрезает сахарофосфатный остов около AP-сайта.'},
      {q:'Какая функция Pol β важна помимо включения нуклеотида?',a:['5′-dRP-лиазная активность','Раскручивание хроматина как единственная задача','Уничтожение рибосом'],why:'Полимераза β может удалять 5′-дезоксирибозофосфатный остаток при BER.'},
      {q:'Что завершает восстановление сахарофосфатного остова?',a:['ДНК-лигаза','ДНК-гликозилаза','Геликаза транскрипции'],why:'Лигаза образует недостающую фосфодиэфирную связь.'},
      {q:'Какой путь чаще направлен на объёмные УФ-повреждения?',a:['MMR','NER','Трансляция'],why:'NER способен удалять фрагменты цепи, содержащие ряд объёмных фотопродуктов.'},
      {q:'Какие ошибки обычно устраняет MMR?',a:['Ошибки спаривания после репликации','Любые повреждения исключительно одним ферментом','Неправильно свёрнутые белки'],why:'MMR распознаёт и исправляет ошибки спаривания и некоторые небольшие вставки/делеции.'},
      {q:'Что научно корректно сказать о 3D-моделях PDB?',a:['Это запись движения ферментов в реальном времени','Это структуры отдельных экспериментально изученных состояний','Это случайные компьютерные фигуры'],why:'Кристаллографические структуры фиксируют пространственное строение образца; анимация реакции требует отдельного моделирования.'}
    ],
    ok:[0,1,0,0,0,1,0,1]
  },
  foot:{tail:'3D: PDB / 3Dmol.js · BER: упрощённая учебная анимация'}
},

/* ======================================================= ENGLISH ===== */
en: {
  meta:{title:'Genome Mechanic — virtual DNA repair laboratory',desc:'Genome Mechanic — a virtual molecular biology laboratory: DNA repair mechanisms, experimental 3D structures and interactive tasks.'},
  nav:{aria:'Sections',overview:'Overview',molecules:'3D molecules',simulation:'BER animation',practice:'Practicum',theory:'Theory',diseases:'Diseases',test:'Quiz'},
  theme:{aria:'Change colour theme',auto:'Auto',light:'Light',dark:'Dark',tip:'Theme: {m} · click to switch'},
  lang:{aria:'Interface language'},
  ov:{
    eyebrow:'VIRTUAL LABORATORY · MOLECULAR BIOLOGY',
    h1:"When DNA<br><span class='gradient-text'>needs help.</span>",
    lead:'Explore base excision repair, study <strong>experimental 3D structures</strong> of enzymes and try to restore a damaged DNA segment yourself.',
    btn1:'Explore molecules <span>↗</span>',btn2:'Run BER <span>▶</span>',
    tags:['4 PDB structures','6 stages of BER','Interactive tasks'],
    canvas:'Animated teaching model of the DNA double helix',
    section:'RESEARCH PROGRAMME',open:'Open ↗',
    f:[
      {t:'Real 3D structure',p:'Rotate enzymes and enzyme–DNA complexes. Data from PDB crystallographic studies.'},
      {t:'Repair animation',p:'Follow uracil removal, strand incision, synthesis and ligation.'},
      {t:'Virtual practicum',p:'Choose the enzymes yourself and get a laboratory journal.'},
      {t:'Human diseases',p:'Nine conditions linked to defects in DNA repair and genome stability.'},
      {t:'Test your knowledge',p:'Questions on repair mechanisms with explanations and a final score.'}
    ]
  },
  au:{
    title:'AUTHORSHIP',
    studentK:'Author',student:'1st-year student, Faculty of Medicine, group Мед26-046р',
    uniK:'University',univ:'Asfendiyarov Kazakh National Medical University (KazNMU)',
    supK:'Scientific supervisor',sup:'Almukhambetova Svetlana Kadyrovna, Associate Professor',
    deptK:'Department',dept:'Department of Molecular Biology and Medical Genetics'
  },
  mol:{
    h1:"Real <span class='gradient-text'>molecules.</span>",
    p:'Choose an enzyme and examine its experimentally determined three-dimensional structure. You can rotate, zoom and switch between ribbon, surface and stick views.',
    head:'MOLECULAR VIEWER',
    fallbackAria:'Schematic rotating DNA model shown when 3D loading is unavailable',
    ribbon:'Ribbon',surface:'Surface',sticks:'Sticks',center:'⌖ Centre',rotateOn:'⟳ Auto-rotate: on',rotateOff:'⟳ Auto-rotate: off',
    foot:'Left mouse — rotate · Wheel — zoom · Right mouse — pan',
    lib:'ENZYME LIBRARY · BER',focus:'SAMPLE IN FOCUS',structure:'STRUCTURE',method:'METHOD',resolution:'RESOLUTION',xray:'X-ray crystallography',
    noticeStrong:'The internet is needed only for real 3D:',
    noticeBody:'the 3Dmol.js library and PDB structures are loaded over HTTPS. If loading fails, a teaching animation is shown instead of the protein. You can also open your own local file',
    choose:'Choose PDB',retry:'Retry loading ↻',
    badge:{wait:'loading…',ok:'PDB loaded',local:'local PDB',error:'no connection'},
    msg:{init:'Loading the three-dimensional model…',loading:'Fetching experimental structure {id} from the Protein Data Bank…',error:'3D failed to load: check your connection and press “Retry loading”. A teaching helix is shown now, not the shape of the enzyme.',tooBig:'The file is too large (18 MB limit).'},
    proteins:[
      {name:'Uracil-DNA glycosylase',short:'UNG · uracil detection',desc:'Human uracil-DNA glycosylase in complex with DNA. It initiates BER: it recognises uracil and removes it, creating an AP site. This structure contains a DNA complex.'},
      {name:'AP endonuclease 1',short:'APE1 · AP-site incision',desc:'Human APE1 bound to a model DNA substrate. It cuts the sugar–phosphate backbone next to the AP site, preparing it for further processing.'},
      {name:'DNA polymerase β',short:'POL β · gap filling',desc:'Human polymerase β with gapped DNA and an analogue of the incoming nucleotide. Pol β fills a short gap in short-patch BER and has dRP-lyase activity.'},
      {name:'DNA ligase III',short:'LIG3 · strand sealing',desc:'A structural complex of human DNA ligase III with DNA. Ligase restores the phosphodiester bond in the strand; one of the experimentally studied complexes is shown.'}
    ]
  },
  sim:{
    h1:"Base excision repair <span class='gradient-text'>BER.</span>",
    p:'A model of short-patch BER: removal of uracil formed, for example, by cytosine deamination. The undamaged strand serves as the template.',
    chip:'MODEL · NOT TO SCALE',svgAria:'Schematic animation of a damaged DNA segment changing during BER',
    bottom:'SCHEMATIC ANIMATION · EVENTS SHOWN ON A TEACHING SCALE',
    prev:'← Back',play:'▶ Play',pause:'Ⅱ Pause',next:'Next →',reset:'↺ Restart',speed:'Speed',
    timeline:'REPAIR TIMELINE',current:'CURRENT EVENT',
    steps:[
      {title:'Damage detected',brief:'Uracil opposite guanine',desc:'Cytosine deamination can produce uracil in DNA. In this model U sits opposite G. If the damage is not repaired, a sequence change may become fixed at the next replication.',why:'The original correct pair was C–G. The undamaged strand carrying G will later indicate which nucleotide to restore.',enzyme:'',phase:'Damage'},
      {title:'Uracil removal',brief:'DNA glycosylase at work',desc:'Uracil-DNA glycosylase recognises uracil in DNA and cleaves the bond between the base and deoxyribose. Uracil is removed, but the sugar–phosphate backbone stays intact for now.',why:'Removing the base creates an AP site — a position without a nitrogenous base. A polymerase cannot fill it in on its own yet.',enzyme:'DNA GLYCOSYLASE · UNG',phase:'AP site'},
      {title:'Strand incision',brief:'APE1 recognises the AP site',desc:'AP endonuclease APE1 cuts the phosphodiester bond next to the AP site. A single-strand break forms, preparing DNA for removal of the remaining sugar–phosphate group.',why:'This stage turns the damaged site into a substrate for further processing.',enzyme:'AP ENDONUCLEASE · APE1',phase:'Incision'},
      {title:'Gap preparation',brief:'Removal of 5′-dRP',desc:'DNA polymerase β has 5′-dRP-lyase activity and removes the remaining deoxyribose-phosphate fragment. A short gap is left in the strand.',why:'In short-patch BER not only the damaged base but also the remnant of the damaged nucleotide must be removed.',enzyme:'DNA POLYMERASE β',phase:'Gap'},
      {title:'Synthesis of a new nucleotide',brief:'Pol β inserts C',desc:'Polymerase β synthesises the missing nucleotide using the undamaged template. C is placed opposite G, forming a normal C–G pair.',why:'The phosphodiester bond at one end is still missing: a nick remains after synthesis.',enzyme:'DNA POLYMERASE β',phase:'New C'},
      {title:'Repair completed',brief:'Ligase seals the nick',desc:'A complex with DNA ligase III (in human cells often together with XRCC1) can complete short-patch BER by joining the DNA ends. Strand integrity is restored.',why:'The scheme shows one common variant of BER, not the only possible pathway. Molecular motions are deliberately simplified.',enzyme:'DNA LIGASE III · LIG3',phase:'Restored'}
    ]
  },
  prac:{
    h1:"Virtual <span class='gradient-text'>practicum.</span>",
    p:'Uracil has ended up opposite guanine after cytosine deamination. Choose, in order, the actions required for short-patch BER.',
    chip:'PRACTICE · 5 ACTIONS',sample:'SAMPLE 001 · U:G MISMATCH',damaged:'DAMAGED STRAND',template:'TEMPLATE STRAND',
    choose:'CHOOSE THE NEXT ACTION',init:'First recognise and remove the damaged base.',
    resetBtn:'↺ New experiment',download:'↓ Download journal .txt',log:'EXPERIMENT JOURNAL',done:'completed',
    note:'This is one variant of the human BER mechanism. For other types of damage the enzymes and details of the process may differ.',
    actions:[
      {label:'Apply DNA glycosylase',desc:'Uracil recognised and removed. An AP site has formed.'},
      {label:'Add APE1',desc:'APE1 made an incision next to the AP site.'},
      {label:'Remove 5′-dRP',desc:'The dRP-lyase function of Pol β removed the sugar–phosphate remnant.'},
      {label:'Add a nucleotide with Pol β',desc:'The undamaged G determined the insertion of C.'},
      {label:'Engage DNA ligase',desc:'The nick is sealed: the damaged site is restored.'}
    ],
    extras:['Excise a long fragment (NER)','Start RNA polymerase','Replace G with A','Join the strand immediately'],
    cues:['First the uracil must be recognised and removed.','The base is already removed. What cuts at the AP site?','The incision is made. The deoxyribose-phosphate remnant must be removed.','The gap is ready. Which enzyme will insert C?','The new C is in place. Now the DNA backbone must be joined.'],
    next:'Next step?',wrong:'Not suitable for this stage. Hint:',finish:'Excellent! The BER model is complete. You restored the C–G pair.',
    j:{title:'DNA REPAIR LAB / VIRTUAL EXPERIMENT JOURNAL',model:'Model: short-patch base excision repair (BER)',lesion:'Initial damage: U opposite G (C deamination)',steps:'Stages completed:',errors:'Incorrect attempts:',work:'PROCEDURE:',result:'RESULT:',ok:'model site restored: C–G',no:'experiment not completed',concl:'Conclusion: the sequential action of specialised enzymes is required to remove a damaged base and restore DNA integrity.',note:'Note: an educational simulation, not a real biochemical experiment.'}
  },
  th:{
    eyebrow:'THEORY SECTION',
    h1:"Mechanisms of <span class='gradient-text'>DNA repair.</span>",
    p:'Cells and other organisms use several systems to remove DNA damage and maintain genome stability. The choice of mechanism depends on the type of damage and the biological context.',
    anim:[
      {t:'Photoreactivation',p:'Photolyase binds the photodimer; light drives restoration of the bases.',s:'LIGHT → RESTORATION'},
      {t:'Alkyl group removal',p:'MGMT transfers the alkyl group to itself and restores guanine.',s:'GROUP TRANSFER'},
      {t:'BER',p:'Glycosylase removes the base; the site is filled in and sealed.',s:'REMOVAL → FILL-IN'},
      {t:'NER',p:'A damaged stretch of one strand is excised, then synthesised anew.',s:'FRAGMENT EXCISION'},
      {t:'MMR',p:'The mismatch is recognised; the erroneous stretch of the new strand is replaced.',s:'MISMATCH CORRECTION'},
      {t:'HR',p:'The damaged strand uses homologous DNA as a template.',s:'COPYING FROM A TEMPLATE'},
      {t:'NHEJ',p:'A protein complex brings together and joins the ends of a double-strand break.',s:'END JOINING'},
      {t:'SOS response',p:'In bacteria, RecA promotes LexA derepression and launches the response.',s:'ACTIVATION OF RESPONSE GENES'}
    ],
    cards:[
      {h:'Direct reversal',p:'<b>Photoreactivation.</b> Photolyases use the energy of visible/blue light to cleave some UV-induced pyrimidine dimers. This mechanism occurs in bacteria, fungi, plants and many animals, but is absent in humans and other placental mammals.<br><br><b>Alkyl group removal.</b> MGMT transfers the alkyl group from O⁶-guanine to its own active-site cysteine and is irreversibly inactivated. Enzymes of the AlkB family oxidatively demethylate some damaged bases.',lb:'Principle',lv:'The chemical modification is reversed without excising a stretch of the strand'},
      {h:'Base excision repair',p:'Corrects small lesions of individual bases: deamination, oxidation and some types of alkylation. A DNA glycosylase removes the damaged base, creating an AP site. AP endonuclease, DNA polymerase and ligase then restore the site.',lb:'Key players in humans',lv:'DNA glycosylases → APE1 → Pol β → DNA ligase'},
      {h:'Nucleotide excision repair',p:'Removes bulky lesions that distort the double helix, including UV photoproducts. A damaged fragment of one strand is excised, after which DNA polymerase fills the gap and ligase joins the strand.',lb:'Two sub-pathways',lv:'Global genome NER and transcription-coupled NER'},
      {h:'Mismatch repair',p:'Corrects replication errors: mispaired bases and small insertions or deletions. The system recognises the mismatch, removes a stretch of the newly synthesised strand and restores it using the template.',lb:'Key human proteins',lv:'MSH2–MSH6 / MSH2–MSH3, MLH1–PMS2'},
      {h:'Double-strand break repair',p:'<b>Homologous recombination (HR).</b> Uses a homologous sequence, usually the sister chromatid, as a template. It is therefore especially important in the S and G₂ phases of the cell cycle.<br><br><b>Non-homologous end joining (NHEJ).</b> Joins the broken ends without a long homologous template. It may be accompanied by small insertions or loss of nucleotides.',lb:'Key proteins',lv:'HR: BRCA1/2, RAD51 · NHEJ: Ku70/80, DNA-PKcs, XRCC4–ligase IV'},
      {h:'SOS response',p:'An inducible response to DNA damage, studied in detail in bacteria such as Escherichia coli. When single-stranded DNA accumulates, RecA is activated, which promotes LexA derepression and expression of response genes. Repair and translesion synthesis systems are switched on; the latter can be error-prone.',lb:'Important',lv:'The SOS response is a bacterial system, not a repair mechanism of human cells'}
    ],
    cmp:'COMPARISON OF MECHANISMS',cmpH:'Type of damage and main pathway',
    head:['Mechanism','Main target','Biological context'],
    rows:[
      ['Direct reversal','Some photoproducts and alkylated bases','Photolyases are absent in humans; MGMT is present'],
      ['BER','Small chemical changes of bases','Including human cells'],
      ['NER','Bulky lesions that distort the helix','Including human cells'],
      ['MMR','Base-pairing errors after replication','Including human cells'],
      ['HR / NHEJ','DNA double-strand breaks','Including human cells'],
      ['SOS response','Complex response to genome damage','Bacteria; not a human repair system']
    ],
    srcOver:'SOURCES OF MOLECULAR STRUCTURES',srcP:'Experimental protein structures are available in the Protein Data Bank. Each structure reflects a single studied state of the molecule.'
  },
  dis:{
    eyebrow:'CLINICAL GENETICS',
    h1:"Diseases and <span class='gradient-text'>DNA repair.</span>",
    p:'Inherited defects in genome-maintenance systems and the clinical conditions associated with them.',
    over:'HUMAN DISEASES',h2:'Defects of repair and genome stability',
    cards:[
      {t:'Xeroderma pigmentosum',p:'Inherited defects in NER proteins impair the removal of UV-induced lesions and greatly increase skin sensitivity to ultraviolet light.',s:'Associated pathway: NER'},
      {t:'Ataxia-telangiectasia',p:'Variants in the ATM gene impair the cellular response to DNA double-strand breaks, cell-cycle control and maintenance of genome stability.',s:'Associated pathway: double-strand break response'},
      {t:'Cockayne syndrome',p:'Associated with defects in ERCC6/CSB or ERCC8/CSA, which take part in transcription-coupled NER.',s:'Associated pathway: TC-NER'},
      {t:'Trichothiodystrophy',p:'Some forms are caused by variants in ERCC2/XPD, ERCC3/XPB or GTF2H5, linked to the TFIIH complex and NER.',s:'Associated pathway: NER'},
      {t:'Bloom syndrome',p:'Caused by pathogenic variants in BLM, which encodes a RecQ-family DNA helicase; characterised by increased genomic instability.',s:'Associated process: maintenance of genome stability'},
      {t:'Werner syndrome',p:'Associated with loss of function of the WRN helicase, which participates in replication, recombination and maintenance of genome stability.',s:'Associated process: replication and recombination'},
      {t:'Seckel syndrome',p:'A genetically heterogeneous condition; some forms are linked to variants in ATR or in genes that affect the response to replication stress.',s:'Associated process: control of replication stress'},
      {t:'Lynch syndrome',p:'Inherited pathogenic variants in MLH1, MSH2, MSH6, PMS2 or EPCAM deletions disrupt the replication-error correction system.',s:'Associated pathway: MMR'},
      {t:'Hereditary breast and ovarian cancer predisposition',p:'Pathogenic variants in BRCA1 or BRCA2 impair efficient homologous recombination and raise the risk of several tumours.',s:'Associated pathway: HR'}
    ]
  },
  quiz:{
    h1:"Test <span class='gradient-text'>yourself.</span>",
    p:'Questions on repair mechanisms, enzymes and the stages of BER. After each answer you get a scientific explanation.',
    total:'{n} QUESTIONS',qnum:'QUESTION {n} / {m}',pts:['point','points'],
    prompt:'Choose the correct option.',next:'Next question →',finishBtn:'Finish quiz →',restart:'↺ Start over',
    aside:'SCORING PROTOCOL',asideP:'Each correct answer earns one point.',resultWait:'The result will appear when the quiz is finished.',
    doneNum:'QUIZ COMPLETED',doneTitle:'Knowledge check completed',
    yours:'Your result: {s} out of {m}.',hi:'Excellent!',mid:'Good! Review the harder stages.',low:'Go back to the “Theory” and “BER animation” sections.',
    final:'Final score: {p}% correct answers.',right:'✓ Correct.',bad:'✕ Incorrect.',
    questions:[
      {q:'What is formed after DNA glycosylase has removed uracil?',a:['An AP site (a position without a base)','A DNA double-strand break','New RNA'],why:'Cleavage of the N-glycosidic bond removes the base and leaves an AP site.'},
      {q:'Which pair should be restored in place of U–G in our example?',a:['A–T','C–G','U–A'],why:'Uracil arose from cytosine deamination. The undamaged G serves as the template for restoring C.'},
      {q:'What is the role of APE1 in short-patch BER?',a:['To cut the strand next to the AP site','To seal the nick with ligase','To synthesise a protein'],why:'APE1 is an AP endonuclease; it cuts the sugar–phosphate backbone near the AP site.'},
      {q:'Which function of Pol β is important besides inserting a nucleotide?',a:['5′-dRP-lyase activity','Unwinding chromatin as its only task','Destroying ribosomes'],why:'Polymerase β can remove the 5′-deoxyribose-phosphate remnant during BER.'},
      {q:'What completes restoration of the sugar–phosphate backbone?',a:['DNA ligase','DNA glycosylase','Transcription helicase'],why:'Ligase forms the missing phosphodiester bond.'},
      {q:'Which pathway more often targets bulky UV lesions?',a:['MMR','NER','Translation'],why:'NER can remove stretches of the strand containing a number of bulky photoproducts.'},
      {q:'Which errors does MMR usually correct?',a:['Base-pairing errors after replication','Any damage, exclusively by a single enzyme','Misfolded proteins'],why:'MMR recognises and corrects base-pairing errors and some small insertions/deletions.'},
      {q:'What is scientifically correct to say about PDB 3D models?',a:['They are real-time recordings of enzyme motion','They are structures of individual, experimentally studied states','They are random computer-generated shapes'],why:'Crystallographic structures capture the spatial arrangement of a sample; animating a reaction requires separate modelling.'}
    ],
    ok:[0,1,0,0,0,1,0,1]
  },
  foot:{tail:'3D: PDB / 3Dmol.js · BER: simplified teaching animation'}
},

/* ======================================================== KAZAKH ===== */
kk: {
  meta:{title:'Genome Mechanic — ДНҚ репарациясының виртуалды зертханасы',desc:'Genome Mechanic — молекулалық биологияның виртуалды зертханасы: ДНҚ репарациясының механизмдері, эксперименттік 3D құрылымдар және интерактивті тапсырмалар.'},
  nav:{aria:'Бөлімдер',overview:'Шолу',molecules:'3D молекулалар',simulation:'BER анимациясы',practice:'Практикум',theory:'Теория',diseases:'Аурулар',test:'Тест'},
  theme:{aria:'Безендіру тақырыбын өзгерту',auto:'Авто',light:'Ашық',dark:'Күңгірт',tip:'Тақырып: {m} · ауыстыру үшін басыңыз'},
  lang:{aria:'Интерфейс тілі'},
  ov:{
    eyebrow:'ВИРТУАЛДЫ ЗЕРТХАНА · МОЛЕКУЛАЛЫҚ БИОЛОГИЯ',
    h1:"ДНҚ-ға көмек<br><span class='gradient-text'>керек болғанда.</span>",
    lead:'Негіздер репарациясын зерттеңіз, ферменттердің <strong>эксперименттік 3D құрылымдарын</strong> қарап шығыңыз және ДНҚ-ның зақымдалған бөлігін өзіңіз қалпына келтіріп көріңіз.',
    btn1:'Молекулаларды зерттеу <span>↗</span>',btn2:'BER іске қосу <span>▶</span>',
    tags:['PDB-дан 4 құрылым','BER-дің 6 кезеңі','Интерактивті тапсырмалар'],
    canvas:'ДНҚ қос спиралінің анимациялық оқу моделі',
    section:'ЗЕРТТЕУ БАҒДАРЛАМАСЫ',open:'Ашу ↗',
    f:[
      {t:'Нақты 3D құрылым',p:'Ферменттерді және олардың ДНҚ-мен түзетін кешендерін айналдырып қараңыз. PDB кристаллографиялық зерттеулерінің деректері.'},
      {t:'Репарация анимациясы',p:'Урацилдің жойылуын, тізбектің кесілуін, синтезді және лигирлеуді бақылаңыз.'},
      {t:'Виртуалды практикум',p:'Ферменттерді өзіңіз таңдап, зерттеу журналын алыңыз.'},
      {t:'Адам аурулары',p:'Репарацияның және геном тұрақтылығының бұзылуымен байланысты тоғыз жағдай.'},
      {t:'Біліміңді тексер',p:'Репарация механизмдері бойынша сұрақтар, түсіндірмелер және нәтиже.'}
    ]
  },
  au:{
    title:'АВТОРЛЫҚ',
    studentK:'Автор',student:'«Медицина» факультетінің 1 курс студенті, Мед26-046р тобы',
    uniK:'Университет',univ:'Асфендияров атындағы ҚазҰМУ',
    supK:'Ғылыми жетекші',sup:'Альмухамбетова Светлана Кадыровна, қауымдастырылған профессор',
    deptK:'Кафедра',dept:'Молекулалық биология және медициналық генетика кафедрасы'
  },
  mol:{
    h1:"Нағыз <span class='gradient-text'>молекулалар.</span>",
    p:'Ферментті таңдап, оның эксперименттік жолмен анықталған кеңістіктік құрылымын қарастырыңыз. Айналдыруға, жақындатуға, лента, молекулалық бет және байланыс көріністерінің арасында ауысуға болады.',
    head:'МОЛЕКУЛАЛЫҚ ҚАРАУ ҚҰРАЛЫ',
    fallbackAria:'3D қосылымы болмағанда көрсетілетін ДНҚ-ның схемалық айналатын моделі',
    ribbon:'Лента',surface:'Бет',sticks:'Байланыстар',center:'⌖ Орталық',rotateOn:'⟳ Авто айналу: қосулы',rotateOff:'⟳ Авто айналу: өшірулі',
    foot:'Сол жақ түйме — айналдыру · Дөңгелек — масштаб · Оң жақ түйме — жылжыту',
    lib:'ФЕРМЕНТТЕР КІТАПХАНАСЫ · BER',focus:'ЗЕРТТЕЛІП ЖАТҚАН ҮЛГІ',structure:'ҚҰРЫЛЫМ',method:'ӘДІС',resolution:'АЖЫРАТЫМДЫЛЫҚ',xray:'Рентгенқұрылымдық талдау',
    noticeStrong:'Интернет тек нақты 3D үшін қажет:',
    noticeBody:'3Dmol.js кітапханасы мен PDB құрылымдары HTTPS арқылы жүктеледі. Жүктеу сәтсіз болса, ақуыздың орнына оқу анимациясы көрсетіледі. Сондай-ақ өзіңіздің жергілікті файлыңызды ашуға болады',
    choose:'PDB таңдау',retry:'Жүктеуді қайталау ↻',
    badge:{wait:'жүктелуде…',ok:'PDB жүктелді',local:'жергілікті PDB',error:'байланыс жоқ'},
    msg:{init:'Үшөлшемді модель жүктелуде…',loading:'Protein Data Bank-тен {id} эксперименттік құрылымы алынуда…',error:'3D жүктелмеді: интернетті тексеріп, «Жүктеуді қайталау» түймесін басыңыз. Қазір фермент пішіні емес, оқу спиралі көрсетіліп тұр.',tooBig:'Файл тым үлкен (шегі — 18 МБ).'},
    proteins:[
      {name:'Урацил-ДНҚ-гликозилаза',short:'UNG · урацилді іздеу',desc:'ДНҚ-мен кешенде тұрған адамның урацил-ДНҚ-гликозилазасы. BER-дің басталуы үшін маңызды: урацилді танып, жояды және AP-сайт түзеді. Бұл құрылымда ДНҚ кешені бар.'},
      {name:'AP-эндонуклеаза 1',short:'APE1 · AP-сайтты кесу',desc:'Үлгілік ДНҚ-субстратпен кешенде тұрған адамның APE1-і. AP-сайтқа жақын қант-фосфат қаңқасын кесіп, учаскені одан әрі өңдеуге дайындайды.'},
      {name:'ДНҚ-полимераза β',short:'POL β · олқылықты толтыру',desc:'Олқылығы бар ДНҚ-мен және кіретін нуклеотид аналогымен кешенде тұрған адамның β полимеразасы. β полимеразасы BER-дің қысқа жамау нұсқасында қысқа олқылықты толтырады және dRP-лиаза белсенділігіне ие.'},
      {name:'ДНҚ-лигаза III',short:'LIG3 · тізбекті жалғау',desc:'Адамның ДНҚ-лигаза III ферментінің ДНҚ-мен құрылымдық кешені. Лигаза тізбектегі фосфодиэфирлік байланысты қалпына келтіреді; эксперименттік зерттелген кешендердің бірі көрсетілген.'}
    ]
  },
  sim:{
    h1:"Негіздер репарациясы <span class='gradient-text'>BER.</span>",
    p:'Қысқа жамау BER моделі: мысалы, цитозиннің дезаминденуі кезінде пайда болған урацилді жою. Зақымдалмаған тізбек матрица қызметін атқарады.',
    chip:'МОДЕЛЬ · МАСШТАБСЫЗ',svgAria:'BER кезінде ДНҚ-ның зақымдалған учаскесінің өзгеруінің схемалық анимациясы',
    bottom:'СХЕМАЛЫҚ АНИМАЦИЯ · ОҚИҒАЛАР ОҚУ МАСШТАБЫНДА КӨРСЕТІЛГЕН',
    prev:'← Артқа',play:'▶ Ойнату',pause:'Ⅱ Кідірту',next:'Алға →',reset:'↺ Басынан',speed:'Жылдамдық',
    timeline:'РЕПАРАЦИЯ ХРОНОЛОГИЯСЫ',current:'АҒЫМДАҒЫ ОҚИҒА',
    steps:[
      {title:'Зақым анықталды',brief:'Гуанинге қарсы урацил',desc:'Цитозиннің дезаминденуі нәтижесінде ДНҚ-да урацил пайда болуы мүмкін. Бұл модельде U гуанинге (G) қарсы орналасқан. Зақым түзетілмесе, келесі репликация кезінде тізбектің өзгерісі бекіп қалуы мүмкін.',why:'Бастапқы дұрыс жұп C–G болған. G бар зақымдалмаған тізбек кейін қай нуклеотидті қалпына келтіру керектігін көрсетеді.',enzyme:'',phase:'Зақым'},
      {title:'Урацилді жою',brief:'ДНҚ-гликозилаза жұмыс істейді',desc:'Урацил-ДНҚ-гликозилаза ДНҚ-дағы урацилді таниды және негіз бен дезоксирибоза арасындағы байланысты үзеді. Урацил жойылады, бірақ қант-фосфат қаңқасы әзірге сақталады.',why:'Негіз жойылғаннан кейін AP-сайт — азотты негізі жоқ орын түзіледі. Полимераза оны әлі өздігінен толтыра алмайды.',enzyme:'ДНҚ-ГЛИКОЗИЛАЗА · UNG',phase:'AP-сайт'},
      {title:'Тізбекті кесу',brief:'APE1 AP-сайтты таниды',desc:'AP-эндонуклеаза APE1 AP-сайттың жанындағы фосфодиэфирлік байланысты кеседі. Бір тізбекті үзіліс түзіледі, ол ДНҚ-ны қант-фосфат тобының қалдығын жоюға дайындайды.',why:'Бұл кезең зақымдалған учаскені одан әрі өңдеуге арналған субстратқа айналдырады.',enzyme:'AP-ЭНДОНУКЛЕАЗА · APE1',phase:'Кесік'},
      {title:'Олқылықты дайындау',brief:'5′-dRP жойылады',desc:'β ДНҚ-полимеразасы 5′-dRP-лиаза белсенділігіне ие және қалған дезоксирибозофосфат фрагментін жояды. Тізбекте қысқа олқылық қалады.',why:'Қысқа жамау BER кезінде зақымдалған азотты негіз ғана емес, зақымдалған нуклеотидтің қалдығы да жойылуы тиіс.',enzyme:'ДНҚ-ПОЛИМЕРАЗА β',phase:'Олқылық'},
      {title:'Жаңа нуклеотид синтезі',brief:'Pol β C қосады',desc:'β полимеразасы жетіспейтін нуклеотидті зақымдалмаған матрица бойынша синтездейді. G-ға қарсы C орнатылып, қалыпты C–G жұбы түзіледі.',why:'Бір ұшындағы фосфодиэфирлік байланыс әлі жоқ: синтезден кейін үзіліс (nick) сақталады.',enzyme:'ДНҚ-ПОЛИМЕРАЗА β',phase:'Жаңа C'},
      {title:'Қалпына келтіру аяқталды',brief:'Лигаза үзілісті жабады',desc:'ДНҚ-лигаза III кешені (адам жасушаларында жиі XRCC1-мен бірге) ДНҚ ұштарын жалғап, қысқа жамау BER-ді аяқтай алады. Тізбектің тұтастығы қалпына келтірілді.',why:'Схема BER-дің бір кең таралған нұсқасын көрсетеді, жалғыз мүмкін жол емес. Молекулалық қозғалыстар әдейі жеңілдетілген.',enzyme:'ДНҚ-ЛИГАЗА III · LIG3',phase:'Қалпына келді'}
    ]
  },
  prac:{
    h1:"Виртуалды <span class='gradient-text'>практикум.</span>",
    p:'Цитозиннің дезаминденуінен кейін урацил гуанинге қарсы орналасты. Қысқа жамау BER үшін қажетті әрекеттерді ретімен таңдаңыз.',
    chip:'ПРАКТИКА · 5 ӘРЕКЕТ',sample:'ҮЛГІ 001 · U:G ДҰРЫС ЖҰПТАСПАУ',damaged:'ЗАҚЫМДАЛҒАН ТІЗБЕК',template:'МАТРИЦАЛЫҚ ТІЗБЕК',
    choose:'КЕЛЕСІ ӘРЕКЕТТІ ТАҢДАҢЫЗ',init:'Алдымен зақымдалған негізді тауып, жойыңыз.',
    resetBtn:'↺ Жаңа тәжірибе',download:'↓ Журналды жүктеу .txt',log:'ЭКСПЕРИМЕНТ ЖУРНАЛЫ',done:'аяқталды',
    note:'Адамдағы BER механизмінің бір нұсқасы. Басқа зақымдар үшін ферменттер мен процесс бөлшектері өзгеше болуы мүмкін.',
    actions:[
      {label:'ДНҚ-гликозилазаны қолдану',desc:'Урацил танылып, жойылды. AP-сайт түзілді.'},
      {label:'APE1 қосу',desc:'APE1 AP-сайттың жанынан кесік жасады.'},
      {label:'5′-dRP жою',desc:'Pol β-ның dRP-лиаза қызметі қант-фосфат қалдығын жойды.'},
      {label:'Pol β арқылы нуклеотид қосу',desc:'Зақымдалмаған G C-ның қосылуын анықтады.'},
      {label:'ДНҚ-лигазаны іске қосу',desc:'Үзіліс жабылды: зақымдалған учаске қалпына келді.'}
    ],
    extras:['NER арқылы ұзын фрагментті кесіп алу','РНҚ-полимеразаны іске қосу','G-ны A-ға ауыстыру','Тізбекті бірден жалғау'],
    cues:['Алдымен урацилді тауып, жою керек.','Негіз жойылды. AP-сайтты не кеседі?','Кесік жасалды. Дезоксирибозофосфат қалдығын жою керек.','Олқылық дайын. C-ны қай фермент толықтырады?','Жаңа C орнатылды. Енді ДНҚ қаңқасын жалғау керек.'],
    next:'Келесі қадам?',wrong:'Бұл кезеңге сәйкес келмейді. Кеңес:',finish:'Тамаша! BER моделі аяқталды. Сіз C–G жұбын қалпына келтірдіңіз.',
    j:{title:'DNA REPAIR LAB / ВИРТУАЛДЫ ЭКСПЕРИМЕНТ ЖУРНАЛЫ',model:'Модель: қысқа жамау эксцизиялық негіздер репарациясы (BER)',lesion:'Бастапқы зақым: G-ға қарсы U (C дезаминденуі)',steps:'Өтілген кезеңдер:',errors:'Қате әрекеттер:',work:'ЖҰМЫС БАРЫСЫ:',result:'НӘТИЖЕ:',ok:'модельдік учаске қалпына келді: C–G',no:'эксперимент аяқталған жоқ',concl:'Қорытынды: зақымдалған негізді жою және ДНҚ тұтастығын қалпына келтіру үшін мамандандырылған ферменттердің тізбектей жұмысы қажет.',note:'Ескерту: бұл оқу симуляциясы, нақты биохимиялық эксперимент емес.'}
  },
  th:{
    eyebrow:'ТЕОРИЯЛЫҚ БӨЛІМ',
    h1:"ДНҚ <span class='gradient-text'>репарациясының механизмдері.</span>",
    p:'Жасушалар мен басқа организмдер ДНҚ зақымдарын жою және геном тұрақтылығын сақтау үшін бірнеше жүйені пайдаланады. Механизмді таңдау зақымның түріне және биологиялық жағдайға байланысты.',
    anim:[
      {t:'Фотореактивация',p:'Фотолиаза фотодимерді байланыстырады; жарық негіздердің қалпына келуін белсендіреді.',s:'ЖАРЫҚ → ҚАЛПЫНА КЕЛУ'},
      {t:'Алкил топтарын жою',p:'MGMT алкил тобын өзіне ауыстырып, гуанинді қалпына келтіреді.',s:'ТОПТЫ КӨШІРУ'},
      {t:'BER',p:'Гликозилаза негізді жояды; учаске толтырылып, жалғанады.',s:'ЖОЮ → ТОЛТЫРУ'},
      {t:'NER',p:'Тізбектің зақымдалған фрагменті кесіп алынады, содан кейін қайта синтезделеді.',s:'ФРАГМЕНТТІ КЕСІП АЛУ'},
      {t:'MMR',p:'Дұрыс жұптаспау танылады; жаңа тізбектің қате учаскесі ауыстырылады.',s:'ЖҰПТАСПАУДЫ ТҮЗЕТУ'},
      {t:'HR',p:'Зақымдалған тізбек гомологты ДНҚ-ны матрица ретінде пайдаланады.',s:'МАТРИЦА БОЙЫНША КӨШІРУ'},
      {t:'NHEJ',p:'Ақуыздық кешен қос тізбекті үзілістің ұштарын жақындатып, біріктіреді.',s:'ҰШТАРДЫ БІРІКТІРУ'},
      {t:'SOS-жауап',p:'Бактерияларда RecA LexA репрессиясының жойылуына ықпал етіп, жауапты іске қосады.',s:'ЖАУАП ГЕНДЕРІН БЕЛСЕНДІРУ'}
    ],
    cards:[
      {h:'Тікелей репарация',p:'<b>Фотореактивация.</b> Фотолиазалар көрінетін/көк жарықтың энергиясын УК-индукцияланған кейбір пиримидин димерлерін ыдырату үшін пайдаланады. Бұл механизм бактерияларда, саңырауқұлақтарда, өсімдіктерде және көптеген жануарларда кездеседі, бірақ адамда және басқа плацентарлы сүтқоректілерде жоқ.<br><br><b>Алкил топтарын жою.</b> MGMT алкил тобын O⁶-гуаниннен өзінің белсенді цистеин қалдығына ауыстырады және қайтымсыз инактивтенеді. AlkB тұқымдасының ферменттері кейбір зақымдалған негіздерді тотығу жолымен деметилдейді.',lb:'Принцип',lv:'Химиялық модификация тізбек учаскесін кесіп алмай-ақ жойылады'},
      {h:'Негіздердің эксцизиялық репарациясы',p:'Жеке негіздердің шағын зақымдарын түзетеді: дезаминдену, тотығу және алкилденудің кейбір түрлері. ДНҚ-гликозилаза зақымдалған негізді жойып, AP-сайт түзеді. Содан кейін AP-эндонуклеаза, ДНҚ-полимераза және лигаза учаскені қалпына келтіреді.',lb:'Адамдағы негізгі қатысушылар',lv:'ДНҚ-гликозилазалар → APE1 → Pol β → ДНҚ-лигаза'},
      {h:'Нуклеотидтік эксцизиялық репарация',p:'Қос спиральді деформациялайтын көлемді зақымдарды, соның ішінде УК-фотопродуктілерді жояды. Бір тізбектің зақымдалған фрагменті кесіп алынады, содан кейін ДНҚ-полимераза олқылықты толтырады, ал лигаза тізбекті жалғайды.',lb:'Екі нұсқа',lv:'Геномдық NER және транскрипциямен тіркескен NER'},
      {h:'Дұрыс жұптаспаған негіздер репарациясы',p:'Репликация қателерін түзетеді: негіздердің дұрыс емес жұптары мен шағын инсерциялар немесе делециялар. Жүйе жұптаспауды таниды, жаңадан синтезделген тізбектің учаскесін жойып, оны матрица бойынша қалпына келтіреді.',lb:'Адамдағы негізгі ақуыздар',lv:'MSH2–MSH6 / MSH2–MSH3, MLH1–PMS2'},
      {h:'Қос тізбекті үзілістер репарациясы',p:'<b>Гомологиялық рекомбинация (HR).</b> Матрица ретінде гомологты тізбекті, әдетте қарындас хроматидті пайдаланады. Сондықтан жасуша циклінің S және G₂ фазаларында ерекше маңызды.<br><br><b>Гомологты емес ұштарды қосу (NHEJ).</b> Үзілістің ұштарын ұзын гомологты матрицасыз біріктіреді. Нуклеотидтердің шағын инсерциялары немесе жоғалуы қатар жүруі мүмкін.',lb:'Негізгі ақуыздар',lv:'HR: BRCA1/2, RAD51 · NHEJ: Ku70/80, DNA-PKcs, XRCC4–лигаза IV'},
      {h:'SOS-жауап',p:'ДНҚ зақымына индукцияланатын жауап, бактерияларда, мысалы Escherichia coli-де жан-жақты зерттелген. Бір тізбекті ДНҚ жиналғанда RecA белсенеді, бұл LexA репрессиясының жойылуына және жауап гендерінің экспрессиясына ықпал етеді. Репарация және транслезиялық синтез жүйелері қосылады; соңғысы қате жіберуі мүмкін.',lb:'Маңызды',lv:'SOS-жауап — бактериялық жүйе, адам жасушаларының репарация механизмі емес'}
    ],
    cmp:'МЕХАНИЗМДЕРДІ САЛЫСТЫРУ',cmpH:'Зақым түрі және негізгі жол',
    head:['Механизм','Негізгі нысана','Биологиялық жағдай'],
    rows:[
      ['Тікелей репарация','Кейбір фотопродуктілер және алкилденген негіздер','Адамда фотолиазалар жоқ; MGMT бар'],
      ['BER','Негіздердің шағын химиялық өзгерістері','Адам жасушаларын қоса'],
      ['NER','Спиральді бұрмалайтын көлемді зақымдар','Адам жасушаларын қоса'],
      ['MMR','Репликациядан кейінгі жұптасу қателері','Адам жасушаларын қоса'],
      ['HR / NHEJ','ДНҚ-ның қос тізбекті үзілістері','Адам жасушаларын қоса'],
      ['SOS-жауап','Геном зақымына кешенді жауап','Бактериялар; адамның репарация жүйесі емес']
    ],
    srcOver:'МОЛЕКУЛАЛЫҚ ҚҰРЫЛЫМДАРДЫҢ КӨЗДЕРІ',srcP:'Ақуыздардың эксперименттік құрылымдары Protein Data Bank-те қолжетімді. Әр құрылым молекуланың жеке зерттелген күйін көрсетеді.'
  },
  dis:{
    eyebrow:'КЛИНИКАЛЫҚ ГЕНЕТИКА',
    h1:"Аурулар және <span class='gradient-text'>ДНҚ репарациясы.</span>",
    p:'Геном тұрақтылығын сақтау жүйелерінің тұқым қуалайтын бұзылыстары және олармен байланысты клиникалық жағдайлар.',
    over:'АДАМ АУРУЛАРЫ',h2:'Репарация мен геном тұрақтылығының бұзылыстары',
    cards:[
      {t:'Пигментті ксеродерма',p:'NER ақуыздарының тұқым қуалайтын ақаулары УК-индукцияланған зақымдардың жойылуын бұзады және теріні ультракүлгін сәулеге сезімталдығын күрт арттырады.',s:'Байланысты жол: NER'},
      {t:'Атаксия-телеангиэктазия',p:'ATM генінің нұсқалары ДНҚ-ның қос тізбекті үзілістеріне жасушалық жауапты, жасуша циклін бақылауды және геном тұрақтылығын сақтауды бұзады.',s:'Байланысты жол: қос тізбекті үзілістерге жауап'},
      {t:'Коккейн синдромы',p:'Транскрипциямен тіркескен NER-ге қатысатын ERCC6/CSB немесе ERCC8/CSA ақауларымен байланысты.',s:'Байланысты жол: TC-NER'},
      {t:'Трихотиодистрофия',p:'Кейбір түрлері TFIIH кешені мен NER-мен байланысты ERCC2/XPD, ERCC3/XPB немесе GTF2H5 гендерінің нұсқаларынан туындайды.',s:'Байланысты жол: NER'},
      {t:'Блум синдромы',p:'RecQ тұқымдасының ДНҚ-геликазасын кодтайтын BLM генінің патогенді нұсқаларынан туындайды; геномдық тұрақсыздықтың жоғарылауымен сипатталады.',s:'Байланысты процесс: геном тұрақтылығын сақтау'},
      {t:'Вернер синдромы',p:'Репликацияға, рекомбинацияға және геном тұрақтылығын сақтауға қатысатын WRN геликазасының қызметінің бұзылуымен байланысты.',s:'Байланысты процесс: репликация және рекомбинация'},
      {t:'Секкель синдромы',p:'Генетикалық гетерогенді жағдай; кейбір түрлері ATR немесе репликациялық стресске жауапқа әсер ететін гендердің нұсқаларымен байланысты.',s:'Байланысты процесс: репликациялық стресті бақылау'},
      {t:'Линч синдромы',p:'MLH1, MSH2, MSH6, PMS2 гендерінің тұқым қуалайтын патогенді нұсқалары немесе EPCAM делециялары репликация қателерін түзету жүйесін бұзады.',s:'Байланысты жол: MMR'},
      {t:'Сүт безі мен аналық без қатерлі ісігіне тұқым қуалайтын бейімділік',p:'BRCA1 немесе BRCA2 патогенді нұсқалары тиімді гомологиялық рекомбинацияны бұзып, бірқатар ісіктердің қаупін арттырады.',s:'Байланысты жол: HR'}
    ]
  },
  quiz:{
    h1:"Өзіңді <span class='gradient-text'>тексер.</span>",
    p:'Репарация механизмдері, ферменттер және BER кезеңдері бойынша сұрақтар. Жауап бергеннен кейін ғылыми түсіндірме аласыз.',
    total:'{n} СҰРАҚ',qnum:'СҰРАҚ {n} / {m}',pts:['ұпай'],
    prompt:'Дұрыс нұсқаны таңдаңыз.',next:'Келесі сұрақ →',finishBtn:'Тестті аяқтау →',restart:'↺ Қайта бастау',
    aside:'БАҒАЛАУ ХАТТАМАСЫ',asideP:'Әр дұрыс жауап үшін бір ұпай беріледі.',resultWait:'Нәтиже тест аяқталғаннан кейін шығады.',
    doneNum:'ТЕСТ АЯҚТАЛДЫ',doneTitle:'Білімді тексеру аяқталды',
    yours:'Нәтижеңіз: {m} ішінен {s}.',hi:'Тамаша!',mid:'Жақсы! Қиын кезеңдерді қайталаңыз.',low:'«Теория» және «BER анимациясы» бөлімдеріне оралыңыз.',
    final:'Қорытынды баға: {p}% дұрыс жауап.',right:'✓ Дұрыс.',bad:'✕ Қате.',
    questions:[
      {q:'ДНҚ-гликозилаза урацилді жойғаннан кейін не пайда болады?',a:['AP-сайт (негізі жоқ учаске)','ДНҚ-ның қос үзілісі','Жаңа РНҚ'],why:'N-гликозидтік байланыстың үзілуі негізді жойып, AP-сайт қалдырады.'},
      {q:'Біздің мысалда U–G орнына қандай жұп қалпына келтірілуі тиіс?',a:['A–T','C–G','U–A'],why:'Урацил цитозиннің дезаминденуінен кейін түзілді. Зақымдалмаған G C-ны қалпына келтіру үшін матрица болады.'},
      {q:'Қысқа жамау BER-де APE1-дің рөлі қандай?',a:['AP-сайттың жанынан тізбекті кесу','Үзілісті лигазамен жалғау','Ақуыз синтездеу'],why:'APE1 — AP-эндонуклеаза, ол AP-сайттың маңындағы қант-фосфат қаңқасын кеседі.'},
      {q:'Нуклеотид қосудан басқа Pol β-ның қандай қызметі маңызды?',a:['5′-dRP-лиаза белсенділігі','Хроматинді жазу — жалғыз міндеті ретінде','Рибосомаларды жою'],why:'β полимеразасы BER кезінде 5′-дезоксирибозофосфат қалдығын жоя алады.'},
      {q:'Қант-фосфат қаңқасын қалпына келтіруді не аяқтайды?',a:['ДНҚ-лигаза','ДНҚ-гликозилаза','Транскрипция геликазасы'],why:'Лигаза жетіспейтін фосфодиэфирлік байланысты түзеді.'},
      {q:'Қай жол көбіне көлемді УК-зақымдарға бағытталған?',a:['MMR','NER','Трансляция'],why:'NER бірқатар көлемді фотопродуктілері бар тізбек фрагменттерін жоя алады.'},
      {q:'MMR әдетте қандай қателерді түзетеді?',a:['Репликациядан кейінгі жұптасу қателерін','Кез келген зақымдарды тек бір ферментпен','Дұрыс оралмаған ақуыздарды'],why:'MMR жұптасу қателерін және кейбір шағын инсерциялар/делециялар түрлерін таниды және түзетеді.'},
      {q:'PDB 3D модельдері туралы ғылыми тұрғыдан не дұрыс?',a:['Бұл ферменттер қозғалысының нақты уақыттағы жазбасы','Бұл эксперименттік зерттелген жеке күйлердің құрылымдары','Бұл кездейсоқ компьютерлік фигуралар'],why:'Кристаллографиялық құрылымдар үлгінің кеңістіктік құрылысын бекітеді; реакция анимациясы жеке модельдеуді қажет етеді.'}
    ],
    ok:[0,1,0,0,0,1,0,1]
  },
  foot:{tail:'3D: PDB / 3Dmol.js · BER: жеңілдетілген оқу анимациясы'}
}
};
