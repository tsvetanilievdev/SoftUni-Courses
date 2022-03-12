// Какво следва да се направи:
//  При стартиране на приложението всички секции се запазват по референция в асоциативен масив и се изтриват от html
//  Потребителя като цъка ще намерим секцията която той иска да види и я визуализараме на екрана
// 0.1 Създаваме обект с месеците
let monthNames = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sept: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

//  -1.1 създаване на асоциативни масиви от всички секции
const yearSelect = document.querySelector('#years');

// превръщане в АСОЦИАТИВЕН МАСИВ с key ID, а value самата секция
const years = [...document.querySelectorAll('.monthCalendar')].reduce(
  (acc, c) => {
    acc[c.id] = c; // Пример acc['year-2021'] = section#year-2020.monthCalendar
    return acc;
  },
  {}
);

const months = [...document.querySelectorAll('.daysCalendar')].reduce(
  (acc, c) => {
    acc[c.id] = c; // Пример acc['month-2020-1'] = section#month-2020-1.daysCalendar
    return acc;
  },
  {}
);

// 1.2 и 1.3 ги обединяваме в една функция
function displaySection(section) {
  //  -1.2 премахваме или откачане на всички секции
  document.body.textContent = ''; // Това ще изтрие всичко, но как ще го визуализарме после? Референциите на секциите седят в промеливите(съответно и в паметта),
  // и докато тези референции са в scope на script-а си седят в паметта;
  //  -1.3 показване на year selection
  document.body.appendChild(section);
}

// 1.2 и 1.3
displaySection(yearSelect);

//  -1.4 слагане на event listeners за click event:

yearSelect.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('date') ||
    event.target.classList.contains('day')
  ) {
    event.stopImmediatePropagation();
    const yearId = event.target.textContent.trim(); // проверяме коя година е кликната
    displaySection(years[`year-${yearId}`]); // показване на year section
  }
});
document.body.addEventListener('click', (event) => {
  if (event.target.tagName == 'CAPTION') {
    // задаваме въпрос CAPTION ли е? ако Е връщаме назад до year или month;
    const sectionID = event.target.parentElement.parentElement.id;
    if (sectionID.includes('year-')) {
      displaySection(yearSelect);
    } else if (sectionID.includes('month-')) {
      const yearId = sectionID.split('-')[1];
      displaySection(years[`year-${yearId}`])
    }
  } else if (event.target.tagName == 'TD' || event.target.tagName == 'DIV') {
    const monthName = event.target.textContent.trim();
    if (monthNames.hasOwnProperty(monthName)) {
      // Проверяме дали месеца съществува
      let parent = event.target.parentNode;
      while (parent.tagName != 'TABLE') {
        // безкраен цикъл -> вървим нагоре по DOM дървото, докато не стигтем 'table' tag, за да можем да вземем годината!
        parent = parent.parentNode;
      }
      const year = parent.firstElementChild.textContent.trim(); // вземаме caption tag, за да видим годинага
      let month = monthNames[monthName];
      displaySection(months[`month-${year}-${month}`]);
    }
  }
});

// - main function
//  -1.1 създаване на асоциативни масиви от всички секции
//  -1.2 премахваме или откачане на всички секции
//  -1.3 показване на year selection
//  -1.4 слагане на event listeners за click event:
//     - да разбира дали потребителят е кликнал year, month or back бутон
//     - изпълнява логиката за премахване на тущото view и да визуализира това view, което цъкнато от потребителя
