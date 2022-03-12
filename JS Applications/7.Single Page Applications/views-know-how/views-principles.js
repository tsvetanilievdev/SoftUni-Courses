//Initial Static Content:
//  - The HTML template holds all views as hidden sections
//  - Modules are responsible for populating and displaying views
//  - Sections can be controlled by reference or by visibility
//  - Dynamic content is loaded via AJAX calls

//Capturing navigation - смяната на VIEW-тата обиктовено с прави с anchor <a> тагове, но трябда да се preventDefault()

/* 1. simpleDemo(папка) Затриване на съдържанието на Main елемента и добавяне на ново при цъкане на бутони */

/* 2. ЗАПАЗВАНЕ ПО РЕФЕРЕНЦИЯ - Cookbook - пример:

HTML-а от 4те страници 'index.html','create.html','login.html' и 'register.html' го слагаме в един единствет index.html файл. Вътре ще има скрити секции(sections);
При стартиране на приложението, ще вземем рефереция към всяка една от секциите, и ще ги изтрием в index.html, но ще ги пазим по референция;
При цъкане на бутон(навигиране) от потребителя, нашият код ЩЕ ЗАКАЧИ в index.html секцията, която е нужна(ако има стари секции, ще ги изтрием/ или откачане-закачане на DOM дървото),
като за нея ще има закачени event listeners, ще правим AJAX заявки за да си добиваме данните и ще ги и т.н.т;

виж. задача Calendar!!!! 
*/
