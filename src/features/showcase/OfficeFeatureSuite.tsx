'use client';

import { useLocale } from 'next-intl';
import React, { useState } from 'react';
import './office-feature-suite.css';

type Locale = 'ka' | 'en' | 'ru';

export function OfficeFeatureSuite(): React.ReactElement {
  const locale = useLocale() as Locale;

  // 1. Playground State
  const [activeQueryIdx, setActiveQueryIdx] = useState(0);
  // 4. Calculator State
  const [employees, setEmployees] = useState(15);
  const [avgSalary, setAvgSalary] = useState(1800);
  // 5. Voice Player State
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  // 6. Industry Blueprint State
  const [activeIndustry, setActiveIndustry] = useState(0);
  // 7. Role Switch State
  const [activeRole, setActiveRole] = useState<'emp' | 'ceo'>('emp');

  // Multi-language content
  const CONTENT = {
    ka: {
      // 1. Playground
      s1Eyebrow: 'გამოსცადეთ თავად',
      s1Title: 'მყისიერი ძებნა თქვენს დოკუმენტებში',
      s1Desc: 'დააწკაპუნეთ რეალურ სამუშაო კითხვაზე და ნახეთ, როგორ პოულობს AI ზუსტ აბზაცს 0.28 წამში.',
      s1Presets: [
        'საბითუმო ფასდაკლება 50+ ცალზე',
        'კლიენტის ხელშეკრულების გაფორმება',
        'RS.ge დაბრუნების პროცედურა',
        'საცდელი ვადის რეგლამენტი',
      ],
      s1Results: [
        {
          doc: 'commercial_policy_2026.docx',
          page: 'გვ. 3, სტრიქონი 12',
          text: '„50-დან 100 ცალამდე შეკვეთაზე მოქმედებს ავტომატური 12%-იანი საბითუმო ფასდაკლება. 100+ ცალზე საჭიროა კომერციული დირექტორის წერილობითი დასტური.“',
          highlight: 'ავტომატური 12%-იანი საბითუმო ფასდაკლება',
          aiAnswer: '50-დან 100 ცალამდე ფასდაკლებაა 12%. 100+ ცალზე საჭიროა კომერციული დირექტორის თანხმობა.',
        },
        {
          doc: 'sales_onboarding_guide.pdf',
          page: 'გვ. 5, სტრიქონი 6',
          text: '„ახალი კლიენტის რეგისტრაციისთვის შეავსეთ ფორმა №4 CRM-ში. ხელმოწერილი ინვოისი ავტომატურად იგზავნება ბუღალტერიაში.“',
          highlight: 'შეავსეთ ფორმა №4 CRM-ში',
          aiAnswer: 'შეავსეთ ფორმა №4 CRM-ში კლიენტის რეკვიზიტებით; ინვოისი ავტომატურად გადაეცემა ბუღალტერიას.',
        },
        {
          doc: 'returns_and_claims.xlsx',
          page: 'გვ. 2, სტრიქონი 8',
          text: '„დაბრუნების მოთხოვნა მიიღება მიწოდებიდან 14 კალენდარული დღის ვადაში. ზედნადების კორექტირება ხდება RS.ge-ზე საწყობის დასტურის შემდეგ.“',
          highlight: '14 კალენდარული დღის ვადაში',
          aiAnswer: 'დაბრუნება შესაძლებელია 14 დღეში. ზედნადების კორექტირებას RS.ge-ზე საწყობი ადასტურებს.',
        },
        {
          doc: 'hr_internal_rules.pdf',
          page: 'გვ. 8, სტრიქონი 19',
          text: '„თანამშრომლის საცდელი ვადა შეადგენს 3 თვეს. პირველი თვის ბოლოს ტარდება შუალედური შეფასება გუნდის ლიდერთან.“',
          highlight: 'საცდელი ვადა შეადგენს 3 თვეს',
          aiAnswer: 'საცდელი ვადაა 3 თვე. 1 თვის თავზე ტარდება შუალედური გასაუბრება გუნდის ლიდერთან.',
        },
      ],

      // 2. Before vs After
      s2Eyebrow: 'შედარება',
      s2Title: 'ძველი მეთოდი vs aiOFFICE',
      s2Desc: 'როგორ იცვლება კომპანიის ყოველდღიური სამუშაო რიტმი სისტემის ჩართვის შემდეგ.',
      beforeTitle: 'ძველი გზა (სისტემის გარეშე)',
      beforeItems: [
        'თანამშრომელი 40 წუთი ელოდება დაკავებული უფროსის პასუხს',
        'ფაილები გაფანტულია მეილებში, ჩატებსა და პირად კომპიუტერებში',
        'ახალბედას ონბორდინგს 2-3 თვე და მენეჯერის მუდმივი ყურადღება სჭირდება',
        'ფასდაკლებისა და დაბრუნების წესების დარღვევა კომპანიას აზარალებს',
      ],
      afterTitle: 'aiOFFICE-თან ერთად',
      afterItems: [
        'მყისიერი პასუხი Telegram/Slack-ში 0.28 წამში ზუსტი ციტირებით',
        'ერთიანი ცოცხალი ცოდნის ბანკი, რომელიც მუდმივად ავტომატურად ახლდება',
        'სრული ავტონომია პირველივე დღიდან — 0 მოცდენა ხელმძღვანელისთვის',
        '100%-ით დაცული რეგლამენტები და გამორიცხული შეცდომები',
      ],

      // 3. Integrations
      s3Eyebrow: 'ეკოსისტემა',
      s3Title: 'მუშაობს იმ სისტემებთან, რომლებსაც უკვე იყენებთ',
      s3Desc: 'aiOFFICE პირდაპირ უკავშირდება თქვენს ყოველდღიურ სამუშაო არხებს — ახალი რთული პროგრამების სწავლის გარეშე.',
      integrations: [
        { name: 'Telegram', sub: 'კორპორატიული ბოტი' },
        { name: 'Slack', sub: 'სამუშაო არხები' },
        { name: 'WhatsApp', sub: 'ოპერატიული ჩატი' },
        { name: 'Bitrix24', sub: 'CRM & დავალებები' },
        { name: 'HubSpot', sub: 'გაყიდვების ბაზა' },
        { name: 'Google Drive', sub: 'დოკუმენტების სინქრონიზაცია' },
        { name: 'Notion', sub: 'შიდა ვიკი' },
        { name: '1C / ORIS', sub: 'საბუღალტრო წესები' },
        { name: 'PDF / Word', sub: 'პირველადი ფაილები' },
        { name: 'Excel / Sheets', sub: 'პრაისები და ცხრილები' },
      ],

      // 4. Calculator
      s4Eyebrow: 'ROI კალკულატორი',
      s4Title: 'დათვალეთ დაზოგილი დრო და ბიუჯეტი',
      s4Desc: 'შეიყვანეთ თქვენი გუნდის მონაცემები და ნახეთ, რამდენ რესურსს ათავისუფლებს aiOFFICE ყოველთვიურად.',
      calcEmpLabel: 'თანამშრომლების რაოდენობა:',
      calcSalaryLabel: 'საშუალო ხელფასი (₾):',
      calcHoursSaved: 'დაზოგილი სამუშაო საათი / თვეში',
      calcMoneySaved: 'დაზოგილი სახელფასო ფონდი / თვეში',
      calcManagerTime: 'მენეჯერის 10+ საათი კვირაში თავისუფლდება განმეორებითი კითხვებისგან',

      // 5. Voice
      s5Eyebrow: 'ხმოვანი შეტყობინებები',
      s5Title: 'დასვით კითხვა ხმით Telegram-ში',
      s5Desc: 'თანამშრომლებს შეუძლიათ ხმოვანი შეტყობინებით იკითხონ ნებისმიერი რამ გზაში ან ობიექტზე ყოფნისას.',
      voiceTranscription: 'ხმოვანი კითხვა: „რა ვადებში ხდება დაზიანებული პროდუქციის დაბრუნება საწყობში?“',
      voiceAiTitle: 'aiOFFICE პასუხი (0.28 წმ):',
      voiceAiText: '„დაზიანებული პროდუქცია ბრუნდება მიღებიდან 3 სამუშაო დღეში აქტის თანხლებით (იხ. logistics_rules.pdf, გვ. 4).“',

      // 6. Industries
      s6Eyebrow: 'ინდუსტრიები',
      s6Title: 'მზა გადაწყვეტა თქვენი სექტორისთვის',
      s6Desc: 'aiOFFICE მორგებულია ქართული ბიზნესის სპეციფიკასა და დარგობრივ დოკუმენტაციაზე.',
      industries: [
        {
          name: '📦 დისტრიბუცია & რითეილი',
          bullets: [
            'საბითუმო ფასდაკლებისა და კრედიტ-ლიმიტების წესები',
            'RS.ge ზედნადებების გაუქმებისა და კორექტირების რეგლამენტი',
            'საწყობის ნაშთების შემოწმება და დაბრუნების ვადები',
          ],
          q: '„რა საბითუმო ფასდაკლება ეკუთვნის სუპერმარკეტების ქსელს?“',
          a: '15% ავტომატური ფასდაკლება 200+ ერთეულის შეკვეთაზე (იხ. distribution_terms.pdf, გვ. 2).',
        },
        {
          name: '🏥 კლინიკები & ფარმა',
          bullets: [
            'სამედიცინო მომსახურების შიდა პროტოკოლები და ფასები',
            'სადაზღვევო კომპანიებთან ანგარიშსწორების წესები',
            'ექიმების მიღების განრიგები და პაციენტის მომზადების ინსტრუქციები',
          ],
          q: '„რა საბუთები სჭირდება სადაზღვევო პაციენტის რეგისტრაციას?“',
          a: 'პირადობა, მიმართვის ფორმა №100 და საგარანტიო წერილი (იხ. insurance_guide.pdf, გვ. 7).',
        },
        {
          name: '🏗️ მშენებლობა & დეველოპმენტი',
          bullets: [
            'სამშენებლო მასალების ტექნიკური სპეციფიკაციები',
            'ბინების კვადრატულობის ფასები და ეტაპობრივი გადახდის გრაფიკი',
            'უსაფრთხოების ნორმები და ობიექტზე დაშვების რეგლამენტი',
          ],
          q: '„რა არის პირველადი შენატანი განვადებით შეძენისას?“',
          a: 'მინიმუმ 20% ხელშეკრულების გაფორმებისას (იხ. payment_schedule.pdf, გვ. 3).',
        },
        {
          name: '🍽️ HoReCa & სერვისი',
          bullets: [
            'მომსახურების სტანდარტები და მენიუს ინგრედიენტების ბაზა',
            'სალარო დისციპლინა და ცვლის გადაბარების წესები',
            'ახალი მიმტანებისა და მზარეულების სწრაფი ონბორდინგი',
          ],
          q: '„რა ალერგენებს შეიცავს საფირმო სოუსი?“',
          a: 'შეიცავს ნიგოზსა და მდოგვს (იხ. kitchen_standards.docx, გვ. 11).',
        },
      ],

      // 7. Dual Roles
      s7Eyebrow: 'როლები',
      s7Title: 'თანამშრომლის კომფორტი და დირექტორის კონტროლი',
      s7Desc: 'ერთიანი სისტემა, რომელიც ორივე მხარის საჭიროებას იდეალურად პასუხობს.',
      roleEmpBtn: 'თანამშრომლის ხედი',
      roleCeoBtn: 'ხელმძღვანელის ანალიტიკა',
      empPoints: [
        'სწრაფი და მეგობრული ჩატი Telegram-ში ზედმეტი სირთულეების გარეშე',
        '0.28 წამი პასუხისთვის — აღარ უწევს უფროსის მოცდა ან კოლეგების შეწუხება',
        'ზუსტი მითითება, სად წერია წესი, რათა თავდაჯერებულად იმოქმედოს',
      ],
      ceoPoints: [
        'დეტალური ანალიტიკა: რა კითხვებს სვამს გუნდი ყველაზე ხშირად',
        'სუსტი წერტილების გამოვლენა: სად აქვთ თანამშრომლებს ინფორმაციის დეფიციტი',
        'მონაცემთა სრული იზოლაცია და კონფიდენციალურობის 100%-იანი კონტროლი',
      ],

      // 8. Security
      s8Eyebrow: 'უსაფრთხოება',
      s8Title: '100% იზოლირებული კორპორატიული საცავი',
      s8Desc: 'თქვენი კომპანიის კომერციული საიდუმლოება და მონაცემები მკაცრად დაცულია.',
      secCards: [
        {
          title: 'იზოლირებული საცავი',
          desc: 'მონაცემები ინახება დაცულ დაშიფრულ სერვერზე და კომპანიის გარეთ არ გადის.',
        },
        {
          title: '0% საჯარო სწავლება',
          desc: 'თქვენი დოკუმენტები არასდროს გამოიყენება საჯარო AI მოდელების (OpenAI/Google) გასაწვრთნელად.',
        },
        {
          title: 'წვდომის დონეები (ACL)',
          desc: 'თითოეულ დეპარტამენტს მხოლოდ მისი უფლებამოსილების დოკუმენტებზე აქვს წვდომა.',
        },
        {
          title: 'სრული NDA დაცვა',
          desc: 'ხელშეკრულებით გარანტირებული კონფიდენციალურობა და საქართველოს პერსონალურ მონაცემთა დაცვის კანონთან შესაბამისობა.',
        },
      ],

      // 9. Blindspot
      s9Eyebrow: 'სუსტი წერტილების ანალიტიკა',
      s9Title: 'AI აჩვენებს, რა აკლია თქვენს რეგლამენტებს',
      s9Desc: 'სისტემა ყოველკვირეულად აჯამებს გაურკვეველ საკითხებს და გეხმარებათ ბიზნესის სრულყოფაში.',
      blindspotDigestTitle: 'ყოველკვირეული AI დაიჯესტი დირექტორისთვის:',
      blindspotItems: [
        '📊 „გასულ კვირას 11-მა თანამშრომელმა იკითხა საგარანტიო ტალონის შევსების წესი — რეკომენდებულია ამ პუნქტის დამატება რეგლამენტში.“',
        '⚠️ „3 თანამშრომელს ჰქონდა გაურკვევლობა ახალი ლოგისტიკური ტარიფების შესახებ.“',
      ],

      // 10. Pilot Banner
      s10Badge: 'რისკის გარეშე',
      s10Title: 'გამოსცადეთ თქვენი კომპანიის AI მოდელი 24 საათში უფასოდ',
      s10Desc: 'გამოგვიგზავნეთ 2-3 ნებისმიერი შიდა დოკუმენტი. aiNOW 24 საათში ააწყობს სატესტო ბოტს Telegram-ში, რათა თქვენი თვალით ნახოთ შედეგი.',
      s10Cta: 'მოითხოვეთ უფასო სატესტო მოდელი',
    },

    ru: {
      s1Eyebrow: 'Попробуйте сами',
      s1Title: 'Мгновенный поиск по документам компании',
      s1Desc: 'Нажмите на реальный рабочий вопрос и посмотрите, как ИИ находит нужный абзац за 0.28 секунды.',
      s1Presets: [
        'Оптовая скидка на 50+ штук',
        'Оформление договора с клиентом',
        'Порядок возврата по накладной RS.ge',
        'Регламент испытательного срока',
      ],
      s1Results: [
        {
          doc: 'commercial_policy_2026.docx',
          page: 'стр. 3, строка 12',
          text: '«На заказы от 50 до 100 единиц действует автоматическая оптовая скидка 12%. На заказы 100+ штук требуется письменное согласование коммерческого директора.»',
          highlight: 'автоматическая оптовая скидка 12%',
          aiAnswer: 'Скидка от 50 до 100 шт составляет 12%. От 100 шт необходимо согласование коммерческого директора.',
        },
        {
          doc: 'sales_onboarding_guide.pdf',
          page: 'стр. 5, строка 6',
          text: '«Для регистрации нового клиента заполните форму №4 в CRM. Подписанный инвойс автоматически отправляется в бухгалтерию.»',
          highlight: 'заполните форму №4 в CRM',
          aiAnswer: 'Заполните форму №4 в CRM реквизитами клиента; инвойс автоматически уйдет в бухгалтерию.',
        },
        {
          doc: 'returns_and_claims.xlsx',
          page: 'стр. 2, строка 8',
          text: '«Заявка на возврат принимается в течение 14 календарных дней с момента поставки. Корректировка накладной в RS.ge происходит после подтверждения склада.»',
          highlight: 'в течение 14 календарных дней',
          aiAnswer: 'Возврат возможен в течение 14 дней. Корректировку накладной в RS.ge подтверждает склад.',
        },
        {
          doc: 'hr_internal_rules.pdf',
          page: 'стр. 8, строка 19',
          text: '«Испытательный срок сотрудника составляет 3 месяца. В конце первого месяца проводится промежуточная оценка с тимлидом.»',
          highlight: 'составляет 3 месяца',
          aiAnswer: 'Испытательный срок — 3 месяца. Через 1 месяц проводится встреча с руководителем группы.',
        },
      ],
      s2Eyebrow: 'Сравнение',
      s2Title: 'Старый метод vs aiOFFICE',
      s2Desc: 'Как меняется рабочий ритм компании после внедрения корпоративной базы знаний.',
      beforeTitle: 'Раньше (без системы)',
      beforeItems: [
        'Сотрудник 40 минут ждет ответа занятого руководителя',
        'Файлы разбросаны по почтам, чатам и личным папкам',
        'Онбординг новичка занимает 2-3 месяца и постоянное время наставника',
        'Ошибки в скидках и накладных приносят прямые убытки бизнесу',
      ],
      afterTitle: 'Вместе с aiOFFICE',
      afterItems: [
        'Мгновенный ответ в Telegram/Slack за 0.28 сек с цитатой документа',
        'Единая база знаний, которая автоматически обновляется 24/7',
        'Новичок работает автономно с первого дня без отвлечения директора',
        '100% соблюдение внутренних правил и исключение человеческих ошибок',
      ],
      s3Eyebrow: 'Экосистема',
      s3Title: 'Работает с программами, которые вы уже используете',
      s3Desc: 'aiOFFICE подключается к привычным рабочим каналам — не нужно осваивать сложный сторонний софт.',
      integrations: [
        { name: 'Telegram', sub: 'Корпоративный бот' },
        { name: 'Slack', sub: 'Рабочие каналы' },
        { name: 'WhatsApp', sub: 'Оперативный чат' },
        { name: 'Bitrix24', sub: 'CRM и задачи' },
        { name: 'HubSpot', sub: 'База продаж' },
        { name: 'Google Drive', sub: 'Синхронизация файлов' },
        { name: 'Notion', sub: 'Внутренняя вики' },
        { name: '1C / ORIS', sub: 'Бухгалтерские правила' },
        { name: 'PDF / Word', sub: 'Регламенты и договоры' },
        { name: 'Excel / Sheets', sub: 'Прайс-листы и таблицы' },
      ],
      s4Eyebrow: 'ROI Калькулятор',
      s4Title: 'Рассчитайте экономию времени и бюджета',
      s4Desc: 'Укажите параметры вашей команды и узнайте, сколько часов и денег экономит aiOFFICE каждый месяц.',
      calcEmpLabel: 'Количество сотрудников:',
      calcSalaryLabel: 'Средняя зарплата (₾):',
      calcHoursSaved: 'Сэкономлено рабочих часов / месяц',
      calcMoneySaved: 'Сэкономлено ФОТ / месяц',
      calcManagerTime: '10+ часов в неделю руководителя освобождаются от рутинных ответов',
      s5Eyebrow: 'Голосовые сообщения',
      s5Title: 'Задавайте вопросы голосом в Telegram',
      s5Desc: 'Сотрудники могут надиктовать вопрос на ходу или на объекте — ИИ мгновенно расшифрует и выдаст ответ.',
      voiceTranscription: 'Голосовой вопрос: «В какие сроки оформляется возврат бракованного товара на склад?»',
      voiceAiTitle: 'Ответ aiOFFICE (0.28 сек):',
      voiceAiText: '«Бракованный товар принимается в течение 3 рабочих дней с актом осмотра (см. logistics_rules.pdf, стр. 4).»',
      s6Eyebrow: 'Отраслевые решения',
      s6Title: 'Готовые решения под вашу сферу',
      s6Desc: 'aiOFFICE настроен под специфику грузинского бизнеса и отраслевые стандарты.',
      industries: [
        {
          name: '📦 Дистрибуция и ритейл',
          bullets: [
            'Условия оптовых скидок и кредитные лимиты',
            'Регламент корректировки накладных в RS.ge',
            'Сроки возврата и складские остатки',
          ],
          q: '«Какая скидка положена сети супермаркетов?»',
          a: '15% автоматическая скидка при заказе от 200 шт (см. distribution_terms.pdf, стр. 2).',
        },
        {
          name: '🏥 Клиники и фарма',
          bullets: [
            'Внутренние протоколы услуг и прайс-листы',
            'Правила работы со страховыми компаниями',
            'Графики врачей и инструкции для пациентов',
          ],
          q: '«Какие документы нужны для страхового пациента?»',
          a: 'Паспорт, форма №100 и гарантийное письмо (см. insurance_guide.pdf, стр. 7).',
        },
        {
          name: '🏗️ Стройка и девелопмент',
          bullets: [
            'Технические спецификации стройматериалов',
            'Цены за м² и графики поэтапной оплаты',
            'Нормы безопасности и допуск на объекты',
          ],
          q: '«Какой первоначальный взнос при рассрочке?»',
          a: 'Минимум 20% при подписании договора (см. payment_schedule.pdf, стр. 3).',
        },
        {
          name: '🍽️ HoReCa и сервис',
          bullets: [
            'Стандарты сервиса и состав блюд меню',
            'Кассовая дисциплина и передача смен',
            'Быстрый ввод новых официантов и поваров',
          ],
          q: '«Какие аллергены содержатся в фирменном соусе?»',
          a: 'Грецкий орех и горчица (см. kitchen_standards.docx, стр. 11).',
        },
      ],
      s7Eyebrow: 'Роли',
      s7Title: 'Удобство для сотрудников и контроль для директора',
      s7Desc: 'Единая система, закрывающая задачи всей компании.',
      roleEmpBtn: 'Вид для сотрудника',
      roleCeoBtn: 'Аналитика для директора',
      empPoints: [
        'Быстрый чистый чат-бот в Telegram без сложных интерфейсов',
        '0.28 сек на ответ — не нужно ждать занятого руководителя',
        'Точные цитаты из документов для уверенности в действиях',
      ],
      ceoPoints: [
        'Аналитика популярных вопросов команды и пробелов в регламентах',
        'Выявление тем, где сотрудникам не хватает понятных инструкций',
        'Полная изоляция коммерческих данных и безопасность 100%',
      ],
      s8Eyebrow: 'Безопасность',
      s8Title: '100% изолированное корпоративное хранилище',
      s8Desc: 'Коммерческая тайна вашей компании находится под надежной защитой.',
      secCards: [
        {
          title: 'Изолированное хранилище',
          desc: 'Все данные хранятся на зашифрованном сервере и не выходят за пределы компании.',
        },
        {
          title: '0% публичного обучения',
          desc: 'Ваши документы никогда не используются для обучения публичных моделей (OpenAI/Google).',
        },
        {
          title: 'Разграничение прав (ACL)',
          desc: 'Каждый отдел видит только те документы, к которым ему открыт доступ руководством.',
        },
        {
          title: 'Защита по NDA',
          desc: 'Юридические гарантии конфиденциальности и соответствие закону Грузии о защите данных.',
        },
      ],
      s9Eyebrow: 'Аналитика слепых зон',
      s9Title: 'ИИ показывает, чего не хватает в ваших регламентах',
      s9Desc: 'Система еженедельно собирает частые вопросы и помогает улучшать бизнес-процессы.',
      blindspotDigestTitle: 'Еженедельный отчет для директора:',
      blindspotItems: [
        '📊 «На прошлой неделе 11 сотрудников спросили порядок оформления гарантии — рекомендуется добавить этот пункт в регламент.»',
        '⚠️ «3 сотрудника путались в новых тарифах доставки.»',
      ],
      s10Badge: 'Без риска',
      s10Title: 'Проверьте ИИ-модель вашей компании бесплатно за 24 часа',
      s10Desc: 'Загрузите 2-3 любых внутренних файла. aiNOW за 24 часа создаст тестового Telegram-бота, чтобы вы лично оценили точность ответов.',
      s10Cta: 'Получить бесплатную демо-модель',
    },

    en: {
      s1Eyebrow: 'Try it yourself',
      s1Title: 'Instant search across company knowledge',
      s1Desc: 'Click on a real workplace query and see how AI retrieves the exact paragraph in 0.28 seconds.',
      s1Presets: [
        'Bulk discount for 50+ items',
        'Client contract workflow',
        'RS.ge waybill return policy',
        'Probation period guidelines',
      ],
      s1Results: [
        {
          doc: 'commercial_policy_2026.docx',
          page: 'p. 3, line 12',
          text: '"For orders between 50 and 100 units, an automatic 12% wholesale discount applies. Orders over 100 units require written approval from the Commercial Director."',
          highlight: 'automatic 12% wholesale discount',
          aiAnswer: 'Discount is 12% for 50-100 units. For 100+ units, Commercial Director approval is required.',
        },
        {
          doc: 'sales_onboarding_guide.pdf',
          page: 'p. 5, line 6',
          text: '"To register a new customer, complete Form No. 4 in CRM. The signed invoice is automatically routed to accounting."',
          highlight: 'complete Form No. 4 in CRM',
          aiAnswer: 'Fill Form No. 4 in CRM with client credentials; the invoice is dispatched to accounting automatically.',
        },
        {
          doc: 'returns_and_claims.xlsx',
          page: 'p. 2, line 8',
          text: '"Return claims are accepted within 14 calendar days of delivery. Waybill corrections on RS.ge are submitted following warehouse confirmation."',
          highlight: 'within 14 calendar days',
          aiAnswer: 'Returns allowed within 14 days. RS.ge waybill adjustments require warehouse confirmation.',
        },
        {
          doc: 'hr_internal_rules.pdf',
          page: 'p. 8, line 19',
          text: '"Employee probation period is 3 months. An interim performance evaluation is held with the team lead at the end of month one."',
          highlight: 'probation period is 3 months',
          aiAnswer: 'Probation is 3 months. A check-in with the team lead occurs at month 1.',
        },
      ],
      s2Eyebrow: 'Comparison',
      s2Title: 'Old Method vs aiOFFICE',
      s2Desc: 'How your company operations transform after deploying a central AI knowledge model.',
      beforeTitle: 'Before (Without System)',
      beforeItems: [
        'Employee waits 40 minutes for busy manager replies',
        'Files scattered across emails, chats, and personal desktops',
        'New hire onboarding takes 2-3 months of constant supervisor time',
        'Violations in discount and return rules lead to profit loss',
      ],
      afterTitle: 'With aiOFFICE',
      afterItems: [
        'Instant answers in Telegram/Slack in 0.28s with exact citations',
        'Single living knowledge base updated automatically 24/7',
        'Complete day-one autonomy for new hires without executive interruption',
        '100% policy compliance and eliminated human errors',
      ],
      s3Eyebrow: 'Ecosystem',
      s3Title: 'Works with the tools your team already uses',
      s3Desc: 'aiOFFICE integrates into your daily communication channels — no complicated new software to learn.',
      integrations: [
        { name: 'Telegram', sub: 'Company Bot' },
        { name: 'Slack', sub: 'Team Channels' },
        { name: 'WhatsApp', sub: 'Direct Messaging' },
        { name: 'Bitrix24', sub: 'CRM & Tasks' },
        { name: 'HubSpot', sub: 'Sales Hub' },
        { name: 'Google Drive', sub: 'File Sync' },
        { name: 'Notion', sub: 'Internal Wiki' },
        { name: '1C / ORIS', sub: 'Accounting Rules' },
        { name: 'PDF / Word', sub: 'Policy Files' },
        { name: 'Excel / Sheets', sub: 'Price Lists' },
      ],
      s4Eyebrow: 'ROI Calculator',
      s4Title: 'Calculate saved time and budget',
      s4Desc: 'Enter your team metrics to see how many hours and funds aiOFFICE unlocks every month.',
      calcEmpLabel: 'Number of employees:',
      calcSalaryLabel: 'Average salary (₾):',
      calcHoursSaved: 'Working hours saved / month',
      calcMoneySaved: 'Payroll budget saved / month',
      calcManagerTime: '10+ hours per week of managerial time freed from repetitive inquiries',
      s5Eyebrow: 'Voice Notes',
      s5Title: 'Ask questions via voice in Telegram',
      s5Desc: 'Staff can record voice messages on the go — AI transcribes and delivers verified answers instantly.',
      voiceTranscription: 'Voice Query: "What is the deadline for returning defective goods to the warehouse?"',
      voiceAiTitle: 'aiOFFICE Response (0.28s):',
      voiceAiText: '"Defective items must be returned within 3 business days accompanied by an inspection report (see logistics_rules.pdf, p. 4)."',
      s6Eyebrow: 'Industry Blueprints',
      s6Title: 'Tailored solutions for your sector',
      s6Desc: 'aiOFFICE is calibrated to Georgian business workflows and industry documentation.',
      industries: [
        {
          name: '📦 Distribution & Retail',
          bullets: [
            'Wholesale volume discount & credit limit rules',
            'RS.ge waybill modification and cancellation regulations',
            'Warehouse inventory inquiries and return timeframes',
          ],
          q: '"What wholesale discount applies to supermarket chains?"',
          a: '15% automatic discount for orders of 200+ units (see distribution_terms.pdf, p. 2).',
        },
        {
          name: '🏥 Clinics & Pharma',
          bullets: [
            'Internal medical protocols and service price lists',
            'Insurance billing procedures and claim terms',
            'Doctor schedules and patient prep guidelines',
          ],
          q: '"What documents are required for insured patients?"',
          a: 'ID, Form No. 100 referral, and insurance guarantee letter (see insurance_guide.pdf, p. 7).',
        },
        {
          name: '🏗️ Construction & Real Estate',
          bullets: [
            'Building material technical specifications',
            'Price per square meter and installment schedules',
            'Safety protocols and site access guidelines',
          ],
          q: '"What is the down payment for installment plans?"',
          a: 'Minimum 20% upon signing the contract (see payment_schedule.pdf, p. 3).',
        },
        {
          name: '🍽️ HoReCa & Hospitality',
          bullets: [
            'Service standards and recipe ingredient databases',
            'Cash register procedures and shift handover rules',
            'Rapid onboarding for new waitstaff and chefs',
          ],
          q: '"What allergens are in the signature sauce?"',
          a: 'Contains walnuts and mustard (see kitchen_standards.docx, p. 11).',
        },
      ],
      s7Eyebrow: 'Roles',
      s7Title: 'Employee convenience meets executive control',
      s7Desc: 'A unified system tailored to both operational frontline staff and leadership.',
      roleEmpBtn: 'Employee View',
      roleCeoBtn: 'Executive Analytics',
      empPoints: [
        'Clean, intuitive Telegram chat bot with zero learning curve',
        '0.28s response time — eliminates waiting for managers',
        'Exact document citations for total confidence in daily tasks',
      ],
      ceoPoints: [
        'Detailed analytics on top search queries and team knowledge gaps',
        'Proactive alerts identifying missing internal procedures',
        'Complete data isolation and enterprise-grade security',
      ],
      s8Eyebrow: 'Security',
      s8Title: '100% isolated enterprise data vault',
      s8Desc: 'Your company proprietary data and trade secrets remain strictly protected.',
      secCards: [
        {
          title: 'Isolated Storage',
          desc: 'All data is hosted on encrypted servers and never leaves your organization.',
        },
        {
          title: '0% Public AI Training',
          desc: 'Your files are never fed into public AI model datasets (OpenAI/Google).',
        },
        {
          title: 'Access Control (ACL)',
          desc: 'Granular permissions ensure departments only access their authorized files.',
        },
        {
          title: 'NDA & Legal Protection',
          desc: 'Contractually guaranteed privacy compliant with Georgian Data Protection Law.',
        },
      ],
      s9Eyebrow: 'Blindspot Analytics',
      s9Title: 'AI reveals missing company procedures',
      s9Desc: 'Weekly synthesized insights to continuously improve your business operations.',
      blindspotDigestTitle: 'Weekly Executive AI Digest:',
      blindspotItems: [
        '📊 "Last week 11 employees inquired about warranty certificate procedures — recommended to add this clause to policies."',
        '⚠️ "3 team members experienced confusion regarding updated logistics rates."',
      ],
      s10Badge: 'Risk-Free',
      s10Title: 'Test your company AI model in 24 hours for free',
      s10Desc: 'Upload 2-3 internal documents. aiNOW will build a live Telegram prototype in 24 hours so you can test accuracy firsthand.',
      s10Cta: 'Request Free Demo Model',
    },
  };

  const t = CONTENT[locale] || CONTENT.ka;

  // Reactive calculations
  const hoursSavedPerMonth = Math.round(employees * 1.4 * 22);
  const hourlyRate = avgSalary / 160;
  const moneySavedPerMonth = Math.round(hoursSavedPerMonth * hourlyRate * 0.75);

  const currentResult = t.s1Results[activeQueryIdx] || t.s1Results[0];
  const currentIndustry = t.industries[activeIndustry] || t.industries[0];

  return (
    <div className="suite-root" data-feature-suite="aioffice">
      
      {/* ── 1. Interactive Search Playground ── */}
      <section className="suite-block" id="playground">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s1Eyebrow}</span>
          <h2 className="suite-title">{t.s1Title}</h2>
          <p className="suite-desc">{t.s1Desc}</p>
        </header>

        <div className="playground-card">
          <div className="playground-input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00c2a8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              readOnly
              value={t.s1Presets[activeQueryIdx]}
              className="playground-input"
              aria-label="Search query preview"
            />
          </div>

          <div className="playground-chips" role="tablist" aria-label="Preset queries">
            {t.s1Presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                className={`playground-chip ${activeQueryIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveQueryIdx(idx)}
              >
                <span>{preset}</span>
              </button>
            ))}
          </div>

          <div className="playground-result-grid">
            {/* Document Snippet */}
            <div className="result-doc-preview">
              <div className="doc-header">
                <span className="doc-name">{currentResult.doc}</span>
                <span>{currentResult.page}</span>
              </div>
              <p className="doc-text-body">
                {currentResult.text.split(currentResult.highlight).map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <mark className="doc-highlight">{currentResult.highlight}</mark>
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* AI Verified Answer */}
            <div className="result-ai-answer">
              <div className="ai-answer-header">
                <span className="ai-pill">aiOFFICE პასუხი</span>
                <span className="ai-speed">⚡ 0.28 წმ</span>
              </div>
              <p className="ai-answer-body">{currentResult.aiAnswer}</p>
              <div className="ai-citation-footer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                </svg>
                <span>{currentResult.doc} • {currentResult.page}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Before vs After Split ── */}
      <section className="suite-block" id="comparison">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s2Eyebrow}</span>
          <h2 className="suite-title">{t.s2Title}</h2>
          <p className="suite-desc">{t.s2Desc}</p>
        </header>

        <div className="compare-split-grid">
          <div className="compare-card before">
            <span className="compare-badge">{t.beforeTitle}</span>
            <ul className="compare-list">
              {t.beforeItems.map((item, idx) => (
                <li key={idx} className="compare-item">
                  <span className="compare-icon-wrap" style={{ color: '#ef4444' }}>✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="compare-card after">
            <span className="compare-badge">{t.afterTitle}</span>
            <ul className="compare-list">
              {t.afterItems.map((item, idx) => (
                <li key={idx} className="compare-item">
                  <span className="compare-icon-wrap" style={{ color: '#10b981' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. Integrations Grid ── */}
      <section className="suite-block" id="integrations-ecosystem">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s3Eyebrow}</span>
          <h2 className="suite-title">{t.s3Title}</h2>
          <p className="suite-desc">{t.s3Desc}</p>
        </header>

        <div className="integrations-box">
          <div className="integrations-flow-grid">
            {t.integrations.map((item, idx) => (
              <div key={idx} className="integration-item">
                <span className="integration-name">{item.name}</span>
                <span className="integration-sub">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ROI & Time-Saved Calculator ── */}
      <section className="suite-block" id="roi-calc">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s4Eyebrow}</span>
          <h2 className="suite-title">{t.s4Title}</h2>
          <p className="suite-desc">{t.s4Desc}</p>
        </header>

        <div className="calc-card">
          <div className="calc-controls">
            <div className="calc-slider-group">
              <div className="calc-label-row">
                <span>{t.calcEmpLabel}</span>
                <span className="calc-val-badge">{employees} თანამშრომელი</span>
              </div>
              <input
                type="range"
                min="3"
                max="120"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <div className="calc-slider-group">
              <div className="calc-label-row">
                <span>{t.calcSalaryLabel}</span>
                <span className="calc-val-badge">{avgSalary.toLocaleString()} ₾</span>
              </div>
              <input
                type="range"
                min="800"
                max="5000"
                step="100"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.4 }}>
              {t.calcManagerTime}
            </p>
          </div>

          <div className="calc-metrics-grid">
            <div className="calc-metric-box">
              <span className="metric-big-num">~{hoursSavedPerMonth.toLocaleString()} სთ</span>
              <span className="metric-desc">{t.calcHoursSaved}</span>
            </div>
            <div className="calc-metric-box" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
              <span className="metric-big-num">~{moneySavedPerMonth.toLocaleString()} ₾</span>
              <span className="metric-desc">{t.calcMoneySaved}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Voice Notes in Telegram ── */}
      <section className="suite-block" id="voice-notes">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s5Eyebrow}</span>
          <h2 className="suite-title">{t.s5Title}</h2>
          <p className="suite-desc">{t.s5Desc}</p>
        </header>

        <div className="voice-demo-card">
          <div className="voice-bubble">
            <button
              type="button"
              className="voice-play-btn"
              onClick={() => setIsVoicePlaying(!isVoicePlaying)}
              aria-label="Play sample voice note"
            >
              {isVoicePlaying ? '❚❚' : '▶'}
            </button>
            <div className="voice-waveform">
              {[8, 16, 22, 12, 18, 24, 14, 20, 10, 16, 22, 14, 8, 18, 12].map((h, i) => (
                <span
                  key={i}
                  className="wave-bar"
                  style={{
                    height: `${h}px`,
                    animationPlayState: isVoicePlaying ? 'running' : 'paused',
                  }}
                />
              ))}
            </div>
            <span className="voice-duration">0:06</span>
          </div>

          <div className="voice-transcription-box">
            {t.voiceTranscription}
          </div>

          <div className="voice-ai-answer">
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#15803d' }}>
              {t.voiceAiTitle}
            </span>
            <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#14532d', lineHeight: 1.4 }}>
              {t.voiceAiText}
            </span>
          </div>
        </div>
      </section>

      {/* ── 6. Industry Blueprints Tabs ── */}
      <section className="suite-block" id="industry-blueprints">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s6Eyebrow}</span>
          <h2 className="suite-title">{t.s6Title}</h2>
          <p className="suite-desc">{t.s6Desc}</p>
        </header>

        <div className="industry-tabs-nav" role="tablist">
          {t.industries.map((ind, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeIndustry === idx}
              className={`industry-tab-btn ${activeIndustry === idx ? 'active' : ''}`}
              onClick={() => setActiveIndustry(idx)}
            >
              {ind.name}
            </button>
          ))}
        </div>

        <div className="industry-blueprint-card">
          <div className="blueprint-bullets">
            <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#09090b', marginBottom: '6px' }}>
              რას არეგულირებს AI მოდელი:
            </h3>
            {currentIndustry.bullets.map((b, i) => (
              <div key={i} className="blueprint-bullet">
                <span style={{ color: '#00c2a8', fontWeight: 800 }}>•</span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="blueprint-qna-sample">
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
              მაგალითი ჩატში:
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
              {currentIndustry.q}
            </div>
            <div style={{ fontSize: '13px', color: '#15803d', background: '#f0fdf4', padding: '8px 10px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
              {currentIndustry.a}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Dual-Role View Switcher ── */}
      <section className="suite-block" id="dual-roles">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s7Eyebrow}</span>
          <h2 className="suite-title">{t.s7Title}</h2>
          <p className="suite-desc">{t.s7Desc}</p>
        </header>

        <div className="role-switch-dock">
          <button
            type="button"
            className={`role-btn ${activeRole === 'emp' ? 'active' : ''}`}
            onClick={() => setActiveRole('emp')}
          >
            {t.roleEmpBtn}
          </button>
          <button
            type="button"
            className={`role-btn ${activeRole === 'ceo' ? 'active' : ''}`}
            onClick={() => setActiveRole('ceo')}
          >
            {t.roleCeoBtn}
          </button>
        </div>

        <div className="role-view-card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(activeRole === 'emp' ? t.empPoints : t.ceoPoints).map((point, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', lineHeight: 1.45 }}>
                <span style={{ color: '#00c2a8', fontWeight: 800 }}>✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Enterprise Security Shield ── */}
      <section className="suite-block" id="security-shield">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s8Eyebrow}</span>
          <h2 className="suite-title">{t.s8Title}</h2>
          <p className="suite-desc">{t.s8Desc}</p>
        </header>

        <div className="security-grid">
          {t.secCards.map((sec, idx) => (
            <div key={idx} className="security-card">
              <div className="security-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="security-card-title">{sec.title}</span>
              <p className="security-card-text">{sec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 9. Blindspot Detection Preview ── */}
      <section className="suite-block" id="blindspot-analytics">
        <header className="suite-section-head">
          <span className="suite-eyebrow">{t.s9Eyebrow}</span>
          <h2 className="suite-title">{t.s9Title}</h2>
          <p className="suite-desc">{t.s9Desc}</p>
        </header>

        <div className="blindspot-card">
          <div className="blindspot-header">
            <span className="blindspot-pulse" />
            <span>{t.blindspotDigestTitle}</span>
          </div>
          <div className="blindspot-digest-box">
            {t.blindspotItems.map((item, idx) => (
              <div key={idx} className="digest-item">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Zero-Risk 24-Hour Pilot Banner ── */}
      <section className="suite-block" id="pilot-offer">
        <div className="pilot-banner">
          <span className="pilot-badge">{t.s10Badge}</span>
          <h2 className="pilot-title">{t.s10Title}</h2>
          <p className="pilot-desc">{t.s10Desc}</p>
          <a href="#cta" className="pilot-cta-btn">
            <span>{t.s10Cta}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  );
}
