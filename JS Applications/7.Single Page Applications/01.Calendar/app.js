let monthNames = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

let yearSelect = document.querySelector('.yearsCalendar');

let years = [...document.querySelectorAll('.monthCalendar')].reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {}
);

let months = [...document.querySelectorAll('.daysCalendar')].reduce(
  (acc, c) => {
    acc[c.id] = c;
    return acc;
  },
  {}
);

displaySection(yearSelect);

yearSelect.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('date') ||
    event.target.classList.contains('day')
  ) {
    event.stopImmediatePropagation();
    let yearId = `year-${event.target.textContent.trim()}`;
    displaySection(years[yearId]);
  }
});

document.body.addEventListener('click', (event) => {
  if (event.target.tagName == 'CAPTION') {
    let sectionId = event.target.parentNode.parentNode.id;
    if (sectionId.includes('year-')) {
      displaySection(yearSelect);
    }else if(sectionId.includes('month-')){
      let yearId = sectionId.split('-')[1];
      displaySection(years[`year-${yearId}`]);
    }
  } else if (event.target.tagName == 'TD' || event.target.tagName == 'DIV') {
    let monthName = event.target.textContent.trim();
    if (monthNames.hasOwnProperty(monthName)) {
      let month = monthNames[monthName]
      let year = event.target
        .closest('table')
        .querySelector('caption')
        .textContent.trim();
        let monthId = `month-${year}-${month}`;
        displaySection(months[monthId]);
    }

  }
});

function displaySection(section) {
  document.body.innerHTML = '';
  document.body.appendChild(section);
}
