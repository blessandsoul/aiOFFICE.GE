# aioffice.ge, text review

**For the translator.** Edit the **KA** and **RU** columns only. Leave the KEY column alone.

Rules that will break the site if you ignore them:

- **No long dash and no middle dash.** Not one, anywhere. Use a comma, a period, a colon,
  parentheses, or a plain hyphen. A validator blocks the file otherwise.
- **Keep every placeholder exactly as it is.** `{year}` stays `{year}`. `<brand></brand>` stays
  `<brand></brand>` (it renders the product logo inline, so do not translate it and do not
  delete it).
- **Georgian is Mkhedruli**, never Mtavruli and never uppercase.
- **Never put a Cyrillic letter inside a Georgian word.** They look alike and it corrupts search.
- `typewriterWords` is a comma-separated list with **no space after the comma**, and
  `typewriterPrefill` must be **the first word of that list**.
- Keep the length roughly in the same range as the English. These are laid out in fixed boxes,
  and a heading that doubles in length will wrap into three lines.

Where this text lives, if you would rather edit the source directly:
`aioffice.ge_project/src/messages/{ka,en,ru}.json`

---


| KEY | EN | KA | RU |
| --- | --- | --- | --- |
| `seo.contact.title` | Contact aiOFFICE | კონტაქტი, aiOFFICE | Контакты, aiOFFICE |
| `seo.contact.description` | Talk to us about automating one process in your company: orders, documents, approvals, RS.ge waybills. | დაგვიკავშირდით, თუ გინდათ, კომპანიაში ერთი პროცესი ავტომატიზდეს: შეკვეთები, დოკუმენტები, დამტკიცებები, RS.ge-ის ზედნადებები. | Напишите нам, если хотите автоматизировать один процесс в компании: заказы, документы, согласования, накладные RS.ge. |
| `seo.notFound.title` | 404, page not found | 404, გვერდი ვერ მოიძებნა | 404, страница не найдена |
| `seo.notFound.description` | This page does not exist. Go back to the homepage. | ეს გვერდი არ არსებობს. დაბრუნდით მთავარ გვერდზე. | Эта страница не существует. Вернитесь на главную. |
| `seo.notFound.heading` | Page not found | გვერდი ვერ მოიძებნა | Страница не найдена |
| `seo.notFound.body` | This page does not exist, or it has moved. | ეს გვერდი არ არსებობს ან გადატანილია. | Эта страница не существует или была перемещена. |
| `seo.notFound.backHome` | Back to the homepage | მთავარ გვერდზე | На главную |
| `contact.title` | Contact us | დაგვიკავშირდით | Свяжитесь с нами |
| `contact.subtitle` | Leave your number and we will call you back. | დატოვეთ ნომერი და ჩვენ დაგირეკავთ. | Оставьте номер, и мы вам перезвоним. |
| `contact.phone` | Phone number | ტელეფონის ნომერი | Номер телефона |
| `contact.phonePlaceholder` | +995 5XX XXX XXX | +995 5XX XXX XXX | +995 5XX XXX XXX |
| `contact.submit` | Send | გაგზავნა | Отправить |
| `contact.submitting` | Sending... | იგზავნება... | Отправка... |
| `contact.successTitle` | Received | მიღებულია | Принято |
| `contact.successMessage` | We will call you back shortly. | მალე დაგირეკავთ. | Мы скоро перезвоним вам. |
| `contact.errorMessage` | Something went wrong. Please try again. | დაფიქსირდა შეცდომა. გთხოვთ, სცადოთ თავიდან. | Что-то пошло не так. Пожалуйста, попробуйте ещё раз. |
| `contact.contactInfo` | Contact information | საკონტაქტო ინფორმაცია | Контактная информация |
| `contact.phoneLabel` | Phone | ტელეფონი | Телефон |
| `contact.emailLabel` | Email | ელფოსტა | Почта |
| `contact.officeLabel` | Office | ოფისი | Офис |
| `contact.office` | Tbilisi, Tornike Eristavi St. 3 | თბილისი, თორნიკე ერისთავის ქ. 3 | Тбилиси, ул. Торнике Эриставе 3 |
| `contact.legalLabel` | Registered address | იურიდიული მისამართი | Юридический адрес |
| `contact.legal` | Zemo Plato, III Array, N14, Apt. 87, Tbilisi 0163 | ზემო პლატო, III მასივი, N14, ბინა 87, თბილისი 0163 | Земо Плато, III массив, N14, кв. 87, Тбилиси 0163 |
| `landingNav.showcase` | Watch an order run itself | ნახეთ, როგორ მუშავდება შეკვეთა | Как обрабатывается заказ |
| `landingNav.process` | How it works | როგორ მუშაობს | Как работает |
| `landingNav.faq` | Questions | კითხვები | Вопросы |
| `landingNav.cta` | Get in touch | დაგვიკავშირდით | Связаться |
| `landingFooter.company` | AI NOW LLC, Tbilisi, Georgia | შპს AI NOW, თბილისი, საქართველო | ООО AI NOW, Тбилиси, Грузия |
| `landingFooter.familyHeading` | aiNOW family | aiNOW-ის პროდუქტები | Семейство aiNOW |
| `landingFooter.companyHeading` | aiOFFICE | aiOFFICE | aiOFFICE |
| `landingFooter.socialHeading` | Social | სოციალური ქსელები | Соцсети |
| `landingFooter.languageHeading` | Language | ენა | Язык |
| `landingFooter.contact` | Contact | კონტაქტი | Контакты |
| `landingFooter.sectionShowcase` | Watch an order run itself | ნახეთ, როგორ მუშავდება შეკვეთა | Как обрабатывается заказ |
| `landingFooter.sectionWork` | How it works | როგორ მუშაობს | Как работает |
| `landingFooter.sectionFaq` | Questions | კითხვები | Вопросы |
| `landingFooter.ctaHuge` | Show us the process that hurts | გვაჩვენეთ პროცესი, რომელიც გტკივათ | Покажите процесс, который болит |
| `landingFooter.copyright` | © {year} aiOFFICE, an aiNOW product. All rights reserved. | © {year} aiOFFICE, aiNOW-ის პროდუქტი. ყველა უფლება დაცულია. | © {year} aiOFFICE, продукт aiNOW. Все права защищены. |
| `product.seo.title` | aiOFFICE, one process automated, with a number attached before we start | aiOFFICE, ერთი ავტომატიზებული პროცესი, დაწყებამდე დაფიქსირებული ციფრით | aiOFFICE, один автоматизированный процесс с цифрой, названной до начала работ |
| `product.seo.description` | Orders, documents, approvals, RS.ge waybills, and the glue to 1C, ORIS or Balance. We name one number in writing before we begin, and if it has not moved 30 days after launch we keep working at no charge. | შეკვეთები, დოკუმენტები, დამტკიცებები, RS.ge-ის ზედნადებები და კავშირი 1C-სთან, ORIS-სთან ან Balance-თან. ერთ ციფრს წერილობით ვასახელებთ დაწყებამდე და თუ გაშვებიდან 30 დღეში არ დაიძრა, უფასოდ ვაგრძელებთ მუშაობას. | Заказы, документы, согласования, накладные RS.ge и связка с 1C, ORIS или Balance. Одну цифру называем письменно до старта, и если через 30 дней после запуска она не сдвинулась, продолжаем работать бесплатно. |
| `product.hero.lead` | Nobody re-types the | ხელით აღარავინ კრეფს | Больше никто не перепечатывает |
| `product.hero.taglinePrefix` | AI that | AI, რომელიც | AI, который |
| `product.hero.taglineWorks` | runs it | ამუშავებს | везёт это |
| `product.hero.typewriterWords` | orders,waybills,invoices,approvals,reports | შეკვეთებს,ზედნადებებს,ინვოისებს,დამტკიცებებს,ანგარიშებს | заказы,накладные,счета,согласования,отчёты |
| `product.hero.typewriterPrefill` | orders | შეკვეთებს | заказы |
| `product.hero.sloganCreates` | creates | ქმნის | создаёт |
| `product.hero.sloganAds` | advertises | არეკლამებს | рекламирует |
| `product.hero.sloganSells` | sells | ყიდის | продаёт |
| `product.hero.sloganManages` | manages | მართავს | управляет |
| `product.hero.sloganTogether` | together | ერთად | вместе |
| `product.hero.ctaResults` | Watch an order run itself | ნახეთ, როგორ მუშავდება შეკვეთა | Посмотреть, как идёт заказ |
| `product.hero.ctaCall` | Book a call | დაგვიკავშირდით | Связаться |
| `product.hero.commitment` | We name one number in writing before we start. If it has not moved 30 days after launch, we keep working at no charge until it does. | ერთ ციფრს წერილობით ვასახელებთ დაწყებამდე. თუ გაშვებიდან 30 დღეში ის არ დაიძრა, უფასოდ ვაგრძელებთ მუშაობას, სანამ არ დაიძვრება. | Одну цифру называем письменно до начала работ. Если через 30 дней после запуска она не сдвинулась, продолжаем работать бесплатно, пока не сдвинется. |
| `product.hero.audience` | For distribution, retail chains, logistics, clinics and construction. 5 to 50 people. | დისტრიბუციას, საცალო ქსელებს, ლოჯისტიკას, კლინიკებსა და მშენებლობას. 5-დან 50 თანამშრომლამდე. | Для дистрибуции, розничных сетей, логистики, клиник и строительства. От 5 до 50 человек. |
| `product.hero.sub` | A Viber message at twenty to midnight becomes an order, an RS.ge waybill, an invoice and a confirmation. A human approves the one step that touches money. | Viber-ის შეტყობინება ღამის თერთმეტ ორმოცზე იქცევა შეკვეთად, RS.ge-ის ზედნადებად, ინვოისად და დადასტურებად. ადამიანი ამტკიცებს იმ ერთ ნაბიჯს, რომელიც ფულს ეხება. | Сообщение в Viber без двадцати полночь становится заказом, накладной RS.ge, счётом и подтверждением. Человек утверждает тот единственный шаг, что касается денег. |
| `product.hero.signedBy` | Andrew Altair. I am the one who stands on your floor. | ენდრიუ ალტაირი. თქვენს ობიექტზე მე ვდგები. | Эндрю Алтаир. На вашем объекте стоять буду я. |
| `product.work.eyebrow` | How it works | როგორ მუშაობს | Как это работает |
| `product.work.headingPre` | Six steps. | ექვსი ნაბიჯი. | Шесть шагов. |
| `product.work.headingAccent` | One process. One number. Then the next one. | ერთი პროცესი. ერთი ციფრი. მერე შემდეგი. | Один процесс. Одна цифра. Потом следующий. |
| `product.work.s1Title` | Half a day on your floor | ნახევარი დღე თქვენს ობიექტზე | Полдня у вас на месте |
| `product.work.s1Tag` | we watch, we do not present | ვუყურებთ, პრეზენტაციას არ ვაკეთებთ | мы смотрим, а не презентуем |
| `product.work.s1Desc` | We stand where the work happens and we count who re-types what into which system. Not a workshop, not a deck. The waste is always somewhere nobody thinks to look. | ვდგავართ იქ, სადაც სამუშაო კეთდება, და ვითვლით, ვინ რას კრეფს ხელით რომელ სისტემაში. არც სემინარი და არც სლაიდები. დანაკარგი ყოველთვის იქაა, სადაც ვერავინ ფიქრობს, რომ შეიხედოს. | Мы стоим там, где идёт работа, и считаем, кто что перепечатывает в какую систему. Не воркшоп и не слайды. Потери всегда там, куда никто не догадывается заглянуть. |
| `product.work.s2Title` | We name the one number | ვასახელებთ ერთ ციფრს | Называем одну цифру |
| `product.work.s2Tag` | in writing, before you pay | წერილობით, გადახდამდე | письменно, до оплаты |
| `product.work.s2Desc` | Orders lost to a Viber message nobody saw. Fines for a late waybill. Deliveries that went out wrong. One number, and we write it down so you can hold us to it later. | შეკვეთები, დაკარგული Viber-ის მიმოწერაში, რომელიც ვერავინ დაინახა. ჯარიმა დაგვიანებული ზედნადებისთვის. მიწოდებები, რომლებიც არასწორად წავიდა. ერთი ციფრი, და ჩვენ ვწერთ, რომ მერე ჩვენვე მოგვთხოვოთ. | Заказы, потерянные в переписке, которую никто не увидел. Штраф за просроченную накладную. Отгрузки, ушедшие не туда. Одна цифра, и мы её записываем, чтобы вы потом могли с нас спросить. |
| `product.work.s3Title` | Fixed scope, fixed date | ფიქსირებული მოცულობა, ფიქსირებული ვადა | Фиксированный объём, фиксированный срок |
| `product.work.s3Tag` | one process, not a programme | ერთი პროცესი, არა პროგრამა | один процесс, а не программа |
| `product.work.s3Desc` | An AI transformation programme is how consultancies bill for two years and change nothing. We do one process. If it works, we do the next one. If it does not, you have lost weeks, not a year. | AI-ტრანსფორმაციის პროგრამა ის საშუალებაა, რომლითაც საკონსულტაციო კომპანიები ორი წელი გიწერენ ინვოისს და არაფერს ცვლიან. ჩვენ ერთ პროცესს ვაკეთებთ. თუ იმუშავებს, გადავდივართ შემდეგზე. თუ არა, კვირები დაკარგეთ და არა წელი. | Программа AI-трансформации, это способ выставлять счета два года и ничего не изменить. Мы делаем один процесс. Сработало, берёмся за следующий. Не сработало, вы потеряли недели, а не год. |
| `product.work.s4Title` | We build it | ვაშენებთ | Мы строим |
| `product.work.s4Tag` | you approve what matters | თქვენ ამტკიცებთ იმას, რაც მნიშვნელოვანია | вы утверждаете то, что важно |
| `product.work.s4Desc` | The machine does the typing. A human still approves anything that touches money, a customer or the tax office. That is not a limitation we are apologising for, it is the design. | კრეფას მანქანა აკეთებს. ადამიანი მაინც ამტკიცებს ყველაფერს, რაც ფულს, კლიენტს ან საგადასახადოს ეხება. ეს შეზღუდვა კი არაა, რომელზეც ბოდიშს ვიხდით, ეს თავად კონსტრუქციაა. | Перепечатывает машина. Человек по-прежнему утверждает всё, что касается денег, клиента или налоговой. Это не ограничение, за которое мы извиняемся, это и есть конструкция. |
| `product.work.s5Title` | We measure the number | ვზომავთ იმ ციფრს | Замеряем ту самую цифру |
| `product.work.s5Tag` | 30 days after launch | გაშვებიდან 30 დღეში | через 30 дней после запуска |
| `product.work.s5Desc` | The one from step two. Not a satisfaction survey and not a slide. If it did not move, we keep working at no charge until it does. | იმ ციფრს, რომელიც მეორე ნაბიჯზე დავასახელეთ. არც კმაყოფილების კვლევა და არც სლაიდი. თუ არ დაიძრა, უფასოდ ვაგრძელებთ მუშაობას, სანამ არ დაიძვრება. | Ту, что назвали на втором шаге. Не опрос удовлетворённости и не слайд. Если не сдвинулась, работаем дальше бесплатно, пока не сдвинется. |
| `product.work.s6Title` | We run it | ჩვენ ვამუშავებთ | Мы это ведём |
| `product.work.s6Tag` | and we get the 9pm call | და ღამის ცხრაზე ჩვენ გვირეკავენ | и звонок в девять вечера принимаем мы |
| `product.work.s6Desc` | It will break. Something upstream will change its format, RS.ge will change a field, someone will paste a photo instead of a file. We are the ones who fix it, and that is most of what you are paying for. | გაფუჭდება. მომწოდებელი შეიცვლის ფაილის ფორმატს, RS.ge შეცვლის ველს, ვიღაც ფაილის ნაცვლად ფოტოს ჩააგდებს. ვინც გეუბნებათ, რომ არ გაფუჭდება, გეუბნებათ, რომ ასეთი სისტემა რეალურ მუშაობაში არასოდეს უნახავს. | Оно сломается. Поставщик поменяет формат файла, RS.ge поменяет поле, кто-то пришлёт фотографию вместо файла. Тот, кто говорит, что не сломается, сообщает вам, что никогда не вёл такое в бою. |
| `product.faq.headingPre` | Questions, | კითხვები, | Вопросы, |
| `product.faq.headingAccent` | answered straight. | პირდაპირი პასუხებით. | прямые ответы. |
| `product.faq.subtitle` | Including the part where we tell you not to do it in-house. | მათ შორის ის ნაწილიც, სადაც გირჩევთ, ეს საკუთარი ძალებით არ გააკეთოთ. | Включая ту часть, где мы отговариваем вас делать это своими силами. |
| `product.faq.q1` | Everyone says AI automation and nothing ever works. Why is <brand></brand> different? | ყველა ამბობს AI-ავტომატიზაციას და არაფერი მუშაობს. რითი განსხვავდება <brand></brand>? | Все говорят про AI-автоматизацию, и ничего не работает. Чем <brand></brand> отличается? |
| `product.faq.a1` | It mostly does not work, and that is not a slur, it is measured. MIT found that 95% of enterprise generative-AI pilots deliver zero return. The same research found the part nobody quotes: buying from a specialist succeeds about 67% of the time while internal builds succeed about a third as often, and the biggest returns are in boring back-office work. So the honest reading is not that AI does not work. It is that a company doing it itself, on an exciting customer-facing use case, is the thing that does not work. We do the boring part, from the outside, one process at a time. | უმეტესად მართლაც არ მუშაობს და ეს შეურაცხყოფა კი არაა, გაზომილი ფაქტია. MIT-მა დაადგინა, რომ საწარმოებში გენერაციული AI-ის პილოტების 95% ნულოვან უკუგებას იძლევა. იმავე კვლევაში ისიც წერია, რასაც არავინ ციტირებს: სპეციალისტისგან ყიდვა დაახლოებით 67% შემთხვევაში მუშაობს, შიდა ძალებით შექმნა კი დაახლოებით სამჯერ იშვიათად, ხოლო ყველაზე დიდი უკუგება მოსაწყენ საოფისე სამუშაოშია. მაშ, პატიოსანი დასკვნა არაა, რომ AI არ მუშაობს. დასკვნა ისაა, რომ არ მუშაობს კომპანია, რომელიც ამას თავად აკეთებს, ეფექტურ საკლიენტო იდეაზე. ჩვენ მოსაწყენ ნაწილს ვაკეთებთ, გარედან, თითო პროცესად. | В основном действительно не работает, и это не выпад, это измерено. MIT установил, что 95% корпоративных пилотов генеративного AI дают нулевую отдачу. В том же исследовании есть то, что никто не цитирует: покупка у специалиста срабатывает примерно в 67% случаев, а внутренняя разработка примерно втрое реже, и самая большая отдача, это скучная работа бэк-офиса. Значит, честный вывод не в том, что AI не работает. Вывод в том, что не работает компания, которая делает это сама, на красивом клиентском кейсе. Мы делаем скучную часть, снаружи, по одному процессу. |
| `product.faq.q2` | How much, and what is the cheapest thing you will sell me? | რა ღირს და რა არის ყველაზე იაფი, რასაც მომყიდით? | Сколько это стоит и что самое дешёвое вы мне продадите? |
| `product.faq.a2` | The half-day on your floor is the cheapest thing, and it is the one we want you to buy first, because until we have stood there neither of us knows what the automation is worth. After that it is a fixed price for one process. There is no price table on this page because the same process costs a different amount in a company with an ERP and a company with a WhatsApp group. | ყველაზე იაფი ის ნახევარი დღეა თქვენს ობიექტზე, და სწორედ ის გვინდა, რომ ჯერ იყიდოთ, რადგან სანამ იქ არ ვიდექით, არც ჩვენ ვიცით და არც თქვენ, რად ღირს ეს ავტომატიზაცია. შემდეგ ერთი პროცესის ფიქსირებული ფასია. ამ გვერდზე ფასების ცხრილი არაა, რადგან ერთი და იგივე პროცესი სხვადასხვა ღირს კომპანიაში, რომელსაც ERP უდგას, და კომპანიაში, რომელსაც WhatsApp-ის ჯგუფი. | Самое дешёвое, это полдня у вас на месте, и именно это мы хотим, чтобы вы купили первым, потому что пока мы там не постояли, ни вы, ни мы не знаем, сколько эта автоматизация стоит. Дальше фиксированная цена за один процесс. Прайса на странице нет, потому что один и тот же процесс стоит по-разному в компании с ERP и в компании с группой в WhatsApp. |
| `product.faq.q3` | How long until something actually works? Weeks or months? | რამდენ ხანში ამუშავდება რამე რეალურად? კვირები თუ თვეები? | Через сколько что-то реально заработает? Недели или месяцы? |
| `product.faq.a3` | Weeks for the first process, and then we stop and measure before touching anything else. Anyone who quotes you months for the first result is selling you a programme, and a programme is how this money gets spent without anything changing. | პირველი პროცესი კვირებში, და მერე ვჩერდებით და ვზომავთ, სანამ სხვას შევეხებით. ვინც პირველ შედეგზე თვეებს გპირდებათ, პროგრამას გყიდით, ხოლო პროგრამა ის მექანიზმია, რომლითაც ეს ფული იხარჯება ისე, რომ არაფერი იცვლება. | Первый процесс, недели, а потом мы останавливаемся и замеряем, прежде чем трогать что-то ещё. Тот, кто обещает вам месяцы до первого результата, продаёт программу, а программа, это механизм потратить эти деньги так, чтобы ничего не изменилось. |
| `product.faq.q4` | Will it understand Georgian, including how my customers actually type? | გაიგებს ქართულს, მათ შორის იმას, როგორც ჩემი კლიენტები რეალურად წერენ? | Он поймёт грузинский, включая то, как реально пишут мои клиенты? |
| `product.faq.a4` | Printed Georgian, yes, well. What people type in Viber at eleven at night, with half the letters missing and a photo of a handwritten note attached, is harder, and we will show you exactly where it fails on your own messages before you pay for anything. | ნაბეჭდ ქართულს, დიახ, კარგად. ის, რასაც ღამის თერთმეტზე Viber-ში წერენ, ნახევარი ასოების გარეშე და ხელნაწერი სიის ფოტოთი, უფრო რთულია, და ჩვენ ზუსტად გაჩვენებთ, სად იშლება ის თქვენსავე შეტყობინებებზე, სანამ რამეს გადაიხდით. | Печатный грузинский, да, хорошо. То, что пишут в Viber в одиннадцать вечера, без половины букв и с фотографией рукописного списка, сложнее, и мы покажем вам ровно там, где оно ломается, на ваших же сообщениях, до того как вы что-то заплатите. |
| `product.faq.q5` | Does it connect to 1C, ORIS or Balance? What if it cannot? | დაუკავშირდება 1C-ს, ORIS-ს ან Balance-ს? და თუ ვერა? | Он подключится к 1C, ORIS или Balance? А если нет? |
| `product.faq.a5` | Usually yes, and we will not promise it before we have seen your actual installation, because every one of them here is slightly different and the ones that were customised by a contractor who has since left are their own adventure. If there is no clean way in, we say so, and we bridge it with a file instead of pretending we have an API we do not have. | ჩვეულებრივ დიახ, და არ დაგპირდებით, სანამ თქვენს რეალურ ინსტალაციას არ ვნახავთ, რადგან აქ ყოველი მათგანი ოდნავ განსხვავებულია, ხოლო ისინი, რომლებიც წასული კონტრაქტორის მიერაა გადაკეთებული, ცალკე თავგადასავალია. თუ სუფთა შესვლის გზა არაა, ამას ვამბობთ და ხიდს ფაილით ვდებთ, ნაცვლად იმისა, რომ არარსებული API მოვიგონოთ. | Обычно да, и мы не пообещаем этого, пока не увидим вашу реальную установку, потому что здесь каждая из них чуть своя, а те, что дорабатывал подрядчик, который давно ушёл, это отдельное приключение. Если чистого входа нет, мы так и скажем и построим мост через файл, вместо того чтобы придумывать несуществующий API. |
| `product.faq.q6` | Can it read RS.ge waybills and invoices automatically? | შეუძლია RS.ge-ის ზედნადებებისა და ინვოისების ავტომატურად წაკითხვა? | Он может сам читать накладные и счета RS.ge? |
| `product.faq.a6` | Yes, and this is the part we would push you toward first. RS.ge waybills are mandatory, the data is real, the fines for getting them late or wrong are real money, and waybill to inventory to invoice is the most reliable automation available in this country. It is also the least exciting, which is exactly why it works. | დიახ, და სწორედ აქეთ მიგიწევდით პირველ რიგში. RS.ge-ის ზედნადებები სავალდებულოა, მონაცემი რეალურია, დაგვიანებისა და შეცდომის ჯარიმა კი ნამდვილი ფულია. ზედნადები, მარაგი, ინვოისი, ეს ყველაზე საიმედო ავტომატიზაციაა ამ ქვეყანაში. ის ასევე ყველაზე ნაკლებად საინტერესოა და სწორედ ამიტომ მუშაობს. | Да, и именно сюда мы бы вас подтолкнули первым делом. Накладные RS.ge обязательны, данные настоящие, а штраф за просрочку или ошибку, это реальные деньги. Накладная, склад, счёт, это самая надёжная автоматизация в этой стране. Она же и самая скучная, и именно поэтому работает. |
| `product.faq.q7` | Where does my data go? Can you run this on my own server? | სად მიდის ჩემი მონაცემი? შეგიძლიათ ჩემსავე სერვერზე გაუშვათ? | Куда уходят мои данные? Можно поднять это на моём сервере? |
| `product.faq.a7` | Yes, on your server, and this is a normal request rather than a paranoid one. It costs a little more and it removes an entire category of argument with your own people. If you would rather we hosted it, we will, and we will tell you plainly what leaves the building. | დიახ, თქვენს სერვერზე, და ეს ნორმალური მოთხოვნაა და არა პარანოია. ცოტა უფრო ძვირი ჯდება და მთელ კატეგორიას შლის კამათებს თქვენივე ხალხთან. თუ გირჩევნიათ, ჩვენ ვუმასპინძლოთ, ვუმასპინძლებთ და პირდაპირ გეტყვით, რა ტოვებს შენობას. | Да, на вашем сервере, и это нормальная просьба, а не паранойя. Стоит чуть дороже и снимает целый класс споров с вашими же людьми. Если предпочитаете, чтобы хостили мы, будем хостить и прямо скажем, что покидает здание. |
| `product.faq.q8` | Will it ever send a customer something wrong, and who is liable? | შეიძლება კლიენტს არასწორი რამ გაუგზავნოს და ვინ აგებს პასუხს? | Он может отправить клиенту что-то не то, и кто отвечает? |
| `product.faq.a8` | Anything that touches a customer, money, or the tax office goes through a human approval. That is deliberate and it is why we are slower than the demo you saw on LinkedIn. Where a mistake is possible, a person is in the loop, and the contract says who owns what. | ყველაფერი, რაც კლიენტს, ფულს ან საგადასახადოს ეხება, ადამიანის დამტკიცებაზე გადის. ეს განზრახაა და სწორედ ამიტომ ვართ უფრო ნელი, ვიდრე ის დემო, რომელიც LinkedIn-ზე ნახეთ. სადაც შეცდომა შესაძლებელია, იქ ადამიანია, ხოლო ხელშეკრულებაში წერია, ვინ რაზე აგებს პასუხს. | Всё, что касается клиента, денег или налоговой, проходит через утверждение человеком. Это сделано намеренно, и именно поэтому мы медленнее того демо, что вы видели в LinkedIn. Там, где ошибка возможна, стоит человек, а в договоре написано, кто за что отвечает. |
| `product.faq.q9` | Am I supposed to fire someone after this? What do I tell my team? | ამის შემდეგ ვინმე უნდა გავათავისუფლო? რა ვუთხრა გუნდს? | После этого надо кого-то уволить? Что сказать команде? |
| `product.faq.a9` | We do not sell headcount reduction, and if that is what you want, you should hire a different firm and be honest with yourself about it. What actually happens is that the person who spent two hours a day re-typing orders spends it selling instead. Your staff will work out what you are doing within a week, so tell them before they guess. | ჩვენ შტატის შემცირებას არ ვყიდით, და თუ სწორედ ეს გინდათ, სხვა კომპანია დაიქირავეთ და საკუთარ თავს პატიოსნად უთხარით ეს. სინამდვილეში ხდება ის, რომ ადამიანი, რომელიც დღეში ორ საათს შეკვეთების კრეფაში ხარჯავდა, ამ დროს გაყიდვაში ხარჯავს. თქვენი ხალხი ერთ კვირაში მიხვდება, რასაც აკეთებთ, ამიტომ უთხარით მანამ, სანამ თავად გამოიცნობენ. | Мы не продаём сокращение штата, и если вам нужно именно это, наймите другую фирму и будьте честны с собой. На деле происходит то, что человек, который тратил два часа в день на перепечатку заказов, тратит их на продажи. Ваши сотрудники поймут, что вы делаете, за неделю, поэтому скажите им раньше, чем они догадаются. |
| `product.faq.q10` | What happens when it breaks at 9pm on a Friday? | რა ხდება, როცა პარასკევს ღამის ცხრაზე გაფუჭდება? | Что будет, когда оно сломается в девять вечера в пятницу? |
| `product.faq.a10` | We get the call, not you. It will break: a supplier changes a file format, RS.ge changes a field, someone sends a photo instead of a PDF. Anyone who tells you it will not break is telling you they have never run one of these in production. | ზარი ჩვენ მოგვდის და არა თქვენ. გაფუჭდება: მომწოდებელი შეიცვლის ფაილის ფორმატს, RS.ge შეცვლის ველს, ვიღაც PDF-ის ნაცვლად ფოტოს გამოგზავნის. ვინც გეუბნებათ, რომ არ გაფუჭდება, გეუბნებათ, რომ ასეთი სისტემა რეალურ მუშაობაში არასოდეს უნახავს. | Звонок принимаем мы, а не вы. Оно сломается: поставщик поменяет формат, RS.ge поменяет поле, кто-то пришлёт фотографию вместо PDF. Тот, кто говорит, что не сломается, сообщает вам, что никогда не вёл такое в бою. |
| `product.faq.q11` | What if I stop paying you? Do I lose everything? | თუ გადახდას შევწყვეტ, ყველაფერს დავკარგავ? | А если я перестану платить? Я всё потеряю? |
| `product.faq.a11` | You own the automation and you own the data. What stops is us running and fixing it. We will hand it over documented, and whether your own IT person can actually keep it alive is a question you should ask him honestly before you sign anything with anybody. | ავტომატიზაცია თქვენია და მონაცემიც თქვენია. ჩერდება ის, რომ ჩვენ ვამუშავებთ და ვასწორებთ. დოკუმენტირებულს გადმოგცემთ, ხოლო კითხვა, შეძლებს თუ არა თქვენი IT-ადამიანი მის ცოცხლად შენარჩუნებას, ისეთია, რომელიც მას პატიოსნად უნდა დაუსვათ, სანამ ვინმესთან რამეს ხელს მოაწერთ. | Автоматизация ваша и данные ваши. Останавливается то, что мы её ведём и чиним. Мы передадим её с документацией, а вопрос, сможет ли ваш айтишник удержать её живой, стоит честно задать ему до того, как вы с кем-либо что-либо подпишете. |
| `product.faq.q12` | I have 12 employees. Am I too small? | 12 თანამშრომელი მყავს. ძალიან პატარა ხომ არ ვარ? | У меня 12 сотрудников. Я слишком маленький? |
| `product.faq.a12` | Maybe. If your orders arrive by Viber and nobody re-types anything twice, there is nothing here for you and we will say so on the call rather than invent a project. The test is not headcount, it is whether a human being is moving data from one screen to another every day. | შესაძლოა. თუ შეკვეთები Viber-ით მოდის და არავინ კრეფს არაფერს ორჯერ, აქ თქვენთვის არაფერია, და ამას ზარზევე გეტყვით, ნაცვლად იმისა, რომ პროექტი მოვიგონოთ. საზომი თანამშრომელთა რაოდენობა კი არა, ისაა, ყოველდღიურად გადააქვს თუ არა ცოცხალ ადამიანს მონაცემი ერთი ეკრანიდან მეორეზე. | Возможно. Если заказы приходят в Viber и никто ничего не перепечатывает дважды, вам здесь нечего брать, и мы скажем это на звонке, а не станем придумывать проект. Мерило не численность, а то, переносит ли живой человек данные с одного экрана на другой каждый день. |
| `product.faq.q13` | You keep talking about revenue, not saved hours. Why? | მუდმივად შემოსავალზე ლაპარაკობთ და არა დაზოგილ საათებზე. რატომ? | Вы всё время говорите про выручку, а не про сэкономленные часы. Почему? |
| `product.faq.a13` | Because a Georgian working hour costs about 14 GEL and an American one costs around 38 dollars, and every automation calculator on the internet was built on the American number. Saving a few hours a week here is worth a hundred and something lari a month, which does not pay for anything. What is worth real money is the order you never lost, the fine you did not pay, and the delivery that went out right the first time. | იმიტომ, რომ ქართული სამუშაო საათი დაახლოებით 14 ლარი ჯდება, ამერიკული კი დაახლოებით 38 დოლარი, ხოლო ინტერნეტში ყველა ავტომატიზაციის კალკულატორი ამერიკულ ციფრზეა აგებული. კვირაში რამდენიმე საათის დაზოგვა აქ ასიოდე ლარს ნიშნავს თვეში, რაც არაფერს ფარავს. რეალურ ფულს ნიშნავს შეკვეთა, რომელიც არ დაგიკარგავთ, ჯარიმა, რომელიც არ გადაგიხდიათ, და მიწოდება, რომელიც პირველივე ჯერზე სწორად წავიდა. | Потому что грузинский рабочий час стоит около 14 лари, а американский около 38 долларов, и все калькуляторы автоматизации в интернете построены на американской цифре. Экономия нескольких часов в неделю здесь, это сто с чем-то лари в месяц, что ничего не окупает. Настоящие деньги, это заказ, который вы не потеряли, штраф, который не заплатили, и отгрузка, которая с первого раза ушла верно. |
| `product.faq.q14` | aiOFFICE, aiDOCS, aiSTAFF, aiCALL. Which one do I need? | aiOFFICE, aiDOCS, aiSTAFF, aiCALL. რომელი მჭირდება? | aiOFFICE, aiDOCS, aiSTAFF, aiCALL. Что мне нужно? |
| `product.faq.a14` | aiOFFICE is the inside of your company: orders, approvals, reports, the RS.ge and accounting glue. If the whole job is a pile of documents becoming ledger rows, that is productized and cheaper, and it lives at aiDOCS.ge. Answering customers is aiSTAFF.ge for chat and aiCALL.ge for the phone. | aiOFFICE თქვენი კომპანიის შიგნითაა: შეკვეთები, დამტკიცებები, ანგარიშები, RS.ge-სა და ბუღალტერიის შეერთება. თუ მთელი საქმე ისაა, რომ დოკუმენტების გროვა საბუღალტრო ჩანაწერებად იქცეს, ეს ცალკე პროდუქტია და უფრო იაფიც, და ის aiDOCS.ge-ზეა. კლიენტებს პასუხობს aiSTAFF.ge ჩატში და aiCALL.ge ტელეფონზე. | aiOFFICE, это внутренности компании: заказы, согласования, отчёты, связка с RS.ge и бухгалтерией. Если вся задача в том, чтобы гора документов превращалась в проводки, это отдельный и более дешёвый продукт, он на aiDOCS.ge. Клиентам отвечает aiSTAFF.ge в чате и aiCALL.ge по телефону. |
| `product.cta.heading` | Show us the process that hurts | გვაჩვენეთ პროცესი, რომელიც გტკივათ | Покажите процесс, который болит |
| `product.cta.subtitle` | Leave your number. Twenty minutes, and we will tell you honestly whether there is anything here worth automating in your company, including when the answer is no. | დატოვეთ ნომერი. ოცი წუთი, და პატიოსნად გეტყვით, არის თუ არა თქვენს კომპანიაში საერთოდ რამე ავტომატიზაციის ღირსი, მათ შორის მაშინაც, როცა პასუხი არაა. | Оставьте номер. Двадцать минут, и мы честно скажем, есть ли в вашей компании вообще что автоматизировать, в том числе когда ответ отрицательный. |
| `product.cta.phoneLabel` | Phone number | ტელეფონის ნომერი | Номер телефона |
| `product.cta.phoneSubmit` | Call me | დამირეკეთ | Позвоните мне |
| `product.cta.phoneNote` | We call back within 24 hours | დაგირეკავთ 24 საათში | Перезвоним в течение 24 часов |
| `product.cta.orWrite` | Or write to us: | ან მოგვწერეთ: | Или напишите: |
| `product.wordmark.line` | Nobody re-types anything. | ხელით აღარავინ კრეფს. | Больше никто ничего не перепечатывает. |
| `product.flow.eyebrow` | Watch an order run itself | ნახეთ, როგორ მუშავდება შეკვეთა | Как обрабатывается заказ |
| `product.flow.heading` | A Viber message, at 23:40, on a Friday. | Viber-ის შეტყობინება, 23:40-ზე, პარასკევს. | Сообщение в Viber, 23:40, пятница. |
| `product.flow.subtitle` | This is the process. Press play and do not read anything: if it is not obvious what happened, we built it wrong. | ეს არის პროცესი. დააჭირეთ და არაფერი წაიკითხოთ: თუ არ არის აშკარა, რა მოხდა, ესე იგი ცუდად ავაწყვეთ. | Это и есть процесс. Нажмите и ничего не читайте: если непонятно, что произошло, значит мы собрали плохо. |
| `product.flow.play` | Run it | გაშვება | Запустить |
| `product.flow.again` | Run it again | თავიდან გაშვება | Запустить ещё раз |
| `product.flow.running` | Running... | მიმდინარეობს... | Идёт... |
| `product.flow.manual` | Today, by hand | დღეს, ხელით | Сегодня, вручную |
| `product.flow.auto` | With aiOFFICE | aiOFFICE-თან | С aiOFFICE |
| `product.flow.handTime` | 17 minutes, three people, one of them tomorrow morning | 17 წუთი, სამი ადამიანი, ერთი მათგანი ხვალ დილით | 17 минут, три человека, один из них завтра утром |
| `product.flow.autoTime` | 9 seconds, one approval | 9 წამი, ერთი დამტკიცება | 9 секунд, одно утверждение |
| `product.flow.s1` | Order arrives on Viber | შეკვეთა მოდის Viber-ზე | Заказ приходит в Viber |
| `product.flow.s1sub` | A voice note and a photo of a handwritten list | ხმოვანი შეტყობინება და ხელნაწერი სიის ფოტო | Голосовое и фотография рукописного списка |
| `product.flow.s2` | Read and turned into an order | იკითხება და იქცევა შეკვეთად | Прочитан и превращён в заказ |
| `product.flow.s2sub` | Products matched to your catalogue, quantities checked against stock | პროდუქტები ემთხვევა თქვენს კატალოგს, რაოდენობა მოწმდება მარაგზე | Товары сопоставлены с вашим каталогом, количества сверены с остатками |
| `product.flow.s3` | RS.ge waybill created | იქმნება RS.ge-ის ზედნადები | Создана накладная RS.ge |
| `product.flow.s3sub` | Filed before the goods leave, which is the part that gets fined | იწერება საქონლის გასვლამდე, სწორედ ეს ნაწილია, რასაც ჯარიმა ეხება | Оформлена до отгрузки, а именно за это и штрафуют |
| `product.flow.s4` | Invoice drafted | იწერება ინვოისის დრაფტი | Черновик счёта |
| `product.flow.s4sub` | Posted to 1C, ORIS or Balance, whichever you run | ჩაიდება 1C-ში, ORIS-ში ან Balance-ში, რომელიც გიდგათ | Проведён в 1C, ORIS или Balance, смотря что у вас стоит |
| `product.flow.s5` | A human approves | ადამიანი ამტკიცებს | Человек утверждает |
| `product.flow.s5sub` | One screen, one button. Anything touching money stops here. | ერთი ეკრანი, ერთი ღილაკი. ყველაფერი, რაც ფულს ეხება, აქ ჩერდება. | Один экран, одна кнопка. Всё, что касается денег, останавливается здесь. |
| `product.flow.s6` | Confirmation back to the customer | დადასტურება უბრუნდება კლიენტს | Подтверждение уходит клиенту |
| `product.flow.s6sub` | On the same Viber thread he wrote to, in Georgian | იმავე Viber-ის მიმოწერაში, სადაც მან მოგწერათ, ქართულად | В той же переписке Viber, куда он писал, на грузинском |
| `product.flow.human` | Human approval | ადამიანის დამტკიცება | Утверждение человеком |
| `product.flow.note` | The approval step is not a limitation we are apologising for. It is the design, and it is why this is safe to put near your tax filings. | დამტკიცების ნაბიჯი შეზღუდვა კი არაა, რომელზეც ბოდიშს ვიხდით. ეს თავად კონსტრუქციაა და სწორედ ამიტომ არის უსაფრთხო მისი დაყენება საგადასახადო ანგარიშგების გვერდით. | Шаг с утверждением, это не ограничение, за которое мы извиняемся. Это и есть конструкция, и именно поэтому такое безопасно ставить рядом с вашей налоговой отчётностью. |
| `product.leak.eyebrow` | Your numbers, not an American calculator | თქვენი ციფრები, არა ამერიკული კალკულატორი | Ваши цифры, а не американский калькулятор |
| `product.leak.heading` | What is the paperwork actually costing you? | რად გიჯდებათ ქაღალდები სინამდვილეში? | Во что вам на самом деле обходятся бумаги? |
| `product.leak.subtitle` | Not in saved hours. A Georgian hour costs about 14 GEL and an American one about 38 dollars, so every ROI calculator you have seen was built on a number that is not yours. This one counts the money that leaks out. | არა დაზოგილ საათებში. ქართული საათი დაახლოებით 14 ლარი ჯდება, ამერიკული კი დაახლოებით 38 დოლარი, ამიტომ ყველა ROI-კალკულატორი, რომელიც გინახავთ, თქვენი ციფრით არ არის აგებული. ეს კი ითვლის იმ ფულს, რომელიც გიდის. | Не в сэкономленных часах. Грузинский час стоит около 14 лари, американский около 38 долларов, поэтому любой ROI-калькулятор, который вы видели, построен не на вашей цифре. Этот считает деньги, которые утекают. |
| `product.leak.orders` | Orders a day | შეკვეთა დღეში | Заказов в день |
| `product.leak.viber` | Share that arrive by Viber, phone or a photo | წილი, რომელიც Viber-ით, ზარით ან ფოტოთი მოდის | Доля, приходящая в Viber, по телефону или фотографией |
| `product.leak.retype` | Share a human re-types by hand | წილი, რომელსაც ადამიანი ხელით კრეფს | Доля, которую человек перепечатывает вручную |
| `product.leak.errors` | Share that go out wrong or get lost | წილი, რომელიც არასწორად მიდის ან იკარგება | Доля, которая уходит не туда или теряется |
| `product.leak.ticket` | Average order value, GEL | საშუალო შეკვეთა, ლარი | Средний заказ, лари |
| `product.leak.fines` | Waybill fines last year, GEL | ზედნადების ჯარიმები შარშან, ლარი | Штрафы по накладным за прошлый год, лари |
| `product.leak.lost` | Orders lost or sent wrong | დაკარგული ან არასწორად გაგზავნილი შეკვეთები | Потерянные или неверно отгруженные заказы |
| `product.leak.finesOut` | Fines and penalties | ჯარიმები და საურავები | Штрафы и пени |
| `product.leak.total` | Leaking, every month | გიდის, ყოველთვიურად | Утекает, каждый месяц |
| `product.leak.perMonth` | GEL | ლარი | лари |
| `product.leak.note` | Your inputs, your arithmetic. We supplied no percentage and no benchmark. If the number comes out small, then there is nothing here worth buying, and you have just saved yourself a meeting. | თქვენი მონაცემები, თქვენი არითმეტიკა. არც პროცენტი მოგვიცია და არც ბენჩმარკი. თუ ციფრი მცირე გამოვიდა, ესე იგი აქ საყიდელი არაფერია, და ერთი შეხვედრა უკვე დაიზოგეთ. | Ваши данные, ваша арифметика. Мы не подставили ни одного процента и ни одного бенчмарка. Если цифра вышла маленькой, значит покупать здесь нечего, и вы только что сэкономили себе встречу. |
| `product.map.eyebrow` | Where we would start | საიდან დავიწყებდით | С чего бы мы начали |
| `product.map.heading` | Pick your business. See the first thing we would automate. | აირჩიეთ თქვენი ბიზნესი. ნახეთ, რას გავაავტომატებდით პირველად. | Выберите свой бизнес. Посмотрите, что мы автоматизировали бы первым. |
| `product.map.subtitle` | Ranked by what actually moves money in Georgia, not by what demos well. | დალაგებულია იმის მიხედვით, რა ძრავს ფულს საქართველოში, და არა იმის მიხედვით, რა გამოიყურება ლამაზად დემოზე. | Отсортировано по тому, что реально двигает деньги в Грузии, а не по тому, что красиво выглядит на демо. |
| `product.map.first` | We start here | აქედან ვიწყებთ | Начинаем отсюда |
| `product.map.then` | Then, if it worked | მერე, თუ იმუშავა | Потом, если сработало |
| `product.map.later` | Later, or never | მოგვიანებით, ან საერთოდ არა | Позже, или никогда |
| `product.map.difficulty` | Difficulty | სირთულე | Сложность |
| `product.map.d1` | Easy | მარტივი | Просто |
| `product.map.d2` | Real work | ნამდვილი სამუშაო | Настоящая работа |
| `product.map.d3` | Hard | რთული | Сложно |
| `product.map.moves` | What moves | რა იძვრის | Что двигается |
| `product.map.i1` | Distribution | დისტრიბუცია | Дистрибуция |
| `product.map.i2` | Retail chain | საცალო ქსელი | Розничная сеть |
| `product.map.i3` | Clinic | კლინიკა | Клиника |
| `product.map.i4` | Construction | მშენებლობა | Строительство |
| `product.map.i5` | Logistics | ლოჯისტიკა | Логистика |
| `product.map.i6` | Restaurant group | რესტორნების ქსელი | Сеть ресторанов |
| `product.map.i1p1` | Viber and phone orders become real orders | Viber-ისა და სატელეფონო შეკვეთები ნამდვილ შეკვეთებად | Заказы из Viber и по телефону становятся настоящими заказами |
| `product.map.i1p1m` | Orders that used to vanish in a chat thread | შეკვეთები, რომლებიც მიმოწერაში ქრებოდა | Заказы, которые пропадали в переписке |
| `product.map.i1p2` | RS.ge waybill filed before the truck moves | RS.ge-ის ზედნადები დაიწერება, სანამ მანქანა დაიძვრება | Накладная RS.ge оформлена до выезда машины |
| `product.map.i1p2m` | The fine you paid last quarter | ჯარიმა, რომელიც გასულ კვარტალში გადაიხადეთ | Штраф, который вы заплатили в прошлом квартале |
| `product.map.i1p3` | Stock reconciled against what actually left | მარაგი შედარებული იმასთან, რაც რეალურად გავიდა | Остатки сверены с тем, что реально уехало |
| `product.map.i1p3m` | The gap between the system and the warehouse | სხვაობა სისტემასა და საწყობს შორის | Разрыв между системой и складом |
| `product.map.i1p4` | Supplier invoices into the accounts | მომწოდებლის ინვოისები ბუღალტერიაში | Счета поставщиков в бухгалтерию |
| `product.map.i1p4m` | Two days a month of a bookkeeper | ბუღალტრის ორი დღე თვეში | Два дня бухгалтера в месяц |
| `product.map.i1p5` | Reorder before you run out | შეკვეთა მომწოდებელთან, სანამ მარაგი გათავდება | Заказ поставщику до того, как закончится |
| `product.map.i1p5m` | The sale you could not fill | გაყიდვა, რომელიც ვერ დაფარეთ | Продажа, которую вы не закрыли |
| `product.map.i1p6` | A weekly report nobody has to build | კვირეული ანგარიში, რომელსაც არავინ აწყობს | Недельный отчёт, который никто не собирает |
| `product.map.i1p6m` | Monday morning | ორშაბათი დილა | Утро понедельника |
| `product.map.i2p1` | Price changes pushed to every branch at once | ფასის ცვლილება ერთდროულად ყველა ფილიალში | Смена цен разом во всех филиалах |
| `product.map.i2p1m` | The branch still selling at last month's price | ფილიალი, რომელიც ისევ გასული თვის ფასით ყიდის | Филиал, который всё ещё продаёт по прошлой цене |
| `product.map.i2p2` | RS.ge waybills between your own branches | RS.ge-ის ზედნადებები საკუთარ ფილიალებს შორის | Накладные RS.ge между своими же филиалами |
| `product.map.i2p2m` | The transfer that was never filed | გადაზიდვა, რომელიც არასოდეს დარეგისტრირდა | Перемещение, которое так и не оформили |
| `product.map.i2p3` | Supplier invoices into the accounts | მომწოდებლის ინვოისები ბუღალტერიაში | Счета поставщиков в бухгалтерию |
| `product.map.i2p3m` | Two days a month of a bookkeeper | ბუღალტრის ორი დღე თვეში | Два дня бухгалтера в месяц |
| `product.map.i2p4` | Stock counted from the till, not from memory | მარაგი ითვლება სალაროდან და არა მეხსიერებიდან | Остатки считаются с кассы, а не по памяти |
| `product.map.i2p4m` | Shrinkage nobody can explain | დანაკლისი, რომელსაც ვერავინ ხსნის | Недостача, которую никто не объясняет |
| `product.map.i2p5` | Shift reports collected automatically | ცვლის ანგარიშები ავტომატურად | Отчёты по сменам собираются сами |
| `product.map.i2p5m` | Manager time on paperwork | მენეჯერის დრო ქაღალდებზე | Время управляющего на бумаги |
| `product.map.i2p6` | Reorder before the shelf is empty | შეკვეთა, სანამ თარო დაცარიელდება | Заказ до того, как полка опустеет |
| `product.map.i2p6m` | The empty shelf | ცარიელი თარო | Пустая полка |
| `product.map.i3p1` | Bookings from Viber and Instagram into one calendar | ჩაწერები Viber-იდან და Instagram-იდან ერთ კალენდარში | Записи из Viber и Instagram в один календарь |
| `product.map.i3p1m` | The double-booked chair | ორჯერ დაჯავშნილი სავარძელი | Дважды занятое кресло |
| `product.map.i3p2` | Patient records filed without re-typing | პაციენტის ჩანაწერები ხელით კრეფის გარეშე | Карты пациентов без перепечатки |
| `product.map.i3p2m` | An hour a day of an administrator | ადმინისტრატორის საათი დღეში | Час администратора в день |
| `product.map.i3p3` | Supplier invoices into the accounts | მომწოდებლის ინვოისები ბუღალტერიაში | Счета поставщиков в бухгалтерию |
| `product.map.i3p3m` | Two days a month of a bookkeeper | ბუღალტრის ორი დღე თვეში | Два дня бухгалтера в месяц |
| `product.map.i3p4` | Consumables reordered before they run out | მასალები შეიკვეთება, სანამ გათავდება | Расходники заказываются до того, как кончатся |
| `product.map.i3p4m` | The cancelled appointment | გაუქმებული ჩაწერა | Отменённая запись |
| `product.map.i3p5` | Insurance paperwork prepared | სადაზღვევო ქაღალდები მომზადებული | Страховые бумаги подготовлены |
| `product.map.i3p5m` | The rejected claim | უარყოფილი მოთხოვნა | Отклонённое возмещение |
| `product.map.i3p6` | A monthly report on which service actually pays | თვიური ანგარიში, რომელი სერვისი იხდის თავს | Месячный отчёт, какая услуга реально окупается |
| `product.map.i3p6m` | The service you are running at a loss | სერვისი, რომელსაც ზარალით ატარებთ | Услуга, которую вы ведёте в убыток |
| `product.map.i4p1` | Estimates built from a price book, not from memory | ხარჯთაღრიცხვა ფასების წიგნიდან და არა მეხსიერებიდან | Смета из прайс-книги, а не по памяти |
| `product.map.i4p1m` | The job you quoted too low | სამუშაო, რომელიც ძალიან იაფად დათვალეთ | Работа, которую вы посчитали слишком дёшево |
| `product.map.i4p2` | Material orders and delivery notes matched | მასალის შეკვეთები და ზედნადებები შედარებული | Заказы материалов и накладные сведены |
| `product.map.i4p2m` | Material that arrived and nobody logged | მასალა, რომელიც მოვიდა და არავინ ჩაწერა | Материал, который приехал и никто не записал |
| `product.map.i4p3` | Supplier invoices into the accounts | მომწოდებლის ინვოისები ბუღალტერიაში | Счета поставщиков в бухгалтерию |
| `product.map.i4p3m` | Two days a month of a bookkeeper | ბუღალტრის ორი დღე თვეში | Два дня бухгалтера в месяц |
| `product.map.i4p4` | Site photos filed against the right job | ობიექტის ფოტოები მიბმული სწორ სამუშაოზე | Фото с объекта подшиты к нужному заказу |
| `product.map.i4p4m` | The dispute you cannot prove | დავა, რომელსაც ვერ ამტკიცებთ | Спор, который вы не можете доказать |
| `product.map.i4p5` | Progress reports to the client, automatically | პროგრესის ანგარიში კლიენტს, ავტომატურად | Отчёт о ходе работ клиенту, автоматически |
| `product.map.i4p5m` | The client who calls every day | კლიენტი, რომელიც ყოველდღე რეკავს | Клиент, который звонит каждый день |
| `product.map.i4p6` | Subcontractor invoices checked against the contract | ქვეკონტრაქტორის ინვოისები შედარებული ხელშეკრულებას | Счета субподрядчика сверены с договором |
| `product.map.i4p6m` | The overcharge nobody caught | ზედმეტად დარიცხული თანხა, რომელიც ვერავინ დაიჭირა | Переплата, которую никто не поймал |
| `product.map.i5p1` | RS.ge waybills filed before the truck moves | RS.ge-ის ზედნადები დაიწერება, სანამ მანქანა დაიძვრება | Накладная RS.ge оформлена до выезда машины |
| `product.map.i5p1m` | The fine, which is the whole business case | ჯარიმა, რაც მთელი ბიზნეს-არგუმენტია | Штраф, а это и есть весь бизнес-кейс |
| `product.map.i5p2` | CMR and delivery notes read and matched | CMR და ზედნადებები წაკითხული და შედარებული | CMR и накладные прочитаны и сведены |
| `product.map.i5p2m` | The load nobody can account for | ტვირთი, რომელსაც ვერავინ აღრიცხავს | Груз, который никто не может свести |
| `product.map.i5p3` | Customs paperwork prepared | საბაჟო ქაღალდები მომზადებული | Таможенные бумаги подготовлены |
| `product.map.i5p3m` | The truck sitting at the border | მანქანა, რომელიც საზღვარზე დგას | Машина, стоящая на границе |
| `product.map.i5p4` | Driver reports without a driver typing | მძღოლის ანგარიშები მძღოლის კრეფის გარეშე | Отчёты водителя без того, чтобы водитель печатал |
| `product.map.i5p4m` | Data that arrives three days late | მონაცემი, რომელიც სამი დღით გვიან მოდის | Данные, которые приходят с опозданием на три дня |
| `product.map.i5p5` | Supplier invoices into the accounts | მომწოდებლის ინვოისები ბუღალტერიაში | Счета поставщиков в бухгалтерию |
| `product.map.i5p5m` | Two days a month of a bookkeeper | ბუღალტრის ორი დღე თვეში | Два дня бухгалтера в месяц |
| `product.map.i5p6` | Fuel and route reconciliation | საწვავისა და მარშრუტის შედარება | Сверка топлива и маршрута |
| `product.map.i5p6m` | Fuel that does not add up | საწვავი, რომელიც არ ჯდება | Топливо, которое не сходится |
| `product.map.i6p1` | Delivery orders from every channel into one screen | მიწოდების შეკვეთები ყველა არხიდან ერთ ეკრანზე | Заказы на доставку со всех каналов на один экран |
| `product.map.i6p1m` | The order taken twice | შეკვეთა, რომელიც ორჯერ მიიღეს | Заказ, принятый дважды |
| `product.map.i6p2` | Supplier invoices into the accounts | მომწოდებლის ინვოისები ბუღალტერიაში | Счета поставщиков в бухгалтерию |
| `product.map.i6p2m` | Two days a month of a bookkeeper | ბუღალტრის ორი დღე თვეში | Два дня бухгалтера в месяц |
| `product.map.i6p3` | Stock counted from the till | მარაგი ითვლება სალაროდან | Остатки считаются с кассы |
| `product.map.i6p3m` | Food cost you cannot explain | პროდუქტის თვითღირებულება, რომელსაც ვერ ხსნით | Себестоимость, которую вы не объясняете |
| `product.map.i6p4` | Reorder before the kitchen runs out | შეკვეთა, სანამ სამზარეულოს გაუთავდება | Заказ до того, как кухня останется без продукта |
| `product.map.i6p4m` | The dish you had to take off the menu | კერძი, რომელიც მენიუდან მოხსენით | Блюдо, которое пришлось снять с меню |
| `product.map.i6p5` | Shift and tip reports collected | ცვლისა და თეიფის ანგარიშები შეგროვებული | Отчёты по сменам и чаевым собраны |
| `product.map.i6p5m` | Manager time on paperwork | მენეჯერის დრო ქაღალდებზე | Время управляющего на бумаги |
| `product.map.i6p6` | A weekly report on margin by dish | კვირეული ანგარიში მარჟაზე კერძების მიხედვით | Недельный отчёт по марже на блюдо |
| `product.map.i6p6m` | The dish you are losing money on | კერძი, რომელზეც ფულს კარგავთ | Блюдо, на котором вы теряете деньги |
| `product.proof.s1` | Read, and turned into an order | წაიკითხა და იქცა შეკვეთად | Прочитано и превращено в заказ |
| `product.proof.s2` | RS.ge waybill filed, before the truck moves | RS.ge-ის ზედნადები დაიწერა, სანამ მანქანა დაიძვრება | Накладная RS.ge оформлена до выезда машины |
| `product.proof.s3` | Invoice drafted, posted to your accounts | ინვოისის დრაფტი, ჩადებული თქვენს ბუღალტერიაში | Черновик счёта, проведён в вашу бухгалтерию |
| `product.proof.human` | Human approval | ადამიანის დამტკიცება | Утверждение человеком |
| `product.proof.note` | The approval step is not a caveat we buried. It is why this is safe to put near your tax filings. | დამტკიცების ნაბიჯი დამალული შენიშვნა არაა. სწორედ ის ხდის უსაფრთხოს მის დაყენებას თქვენი საგადასახადო ანგარიშგების გვერდით. | Шаг с утверждением, это не спрятанная оговорка. Именно он делает безопасной установку рядом с вашей налоговой отчётностью. |
