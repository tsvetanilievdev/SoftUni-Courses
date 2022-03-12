function setup() {
  let url = 'http://localhost:3030/jsonstore/collections/students';
  // add event listener
  loadStudents(url);

  let form = document.getElementById('form');
  form.addEventListener('submit', (e) => createStudent(e,url));
}

setup();

async function loadStudents(url) {
  let tbody = document.getElementById('tbody');
  tbody.querySelectorAll('tr').forEach((x) => x.remove());

  let response = await fetch(url);
  let data = await response.json();

  console.log(data);
  Object.values(data).forEach((x) => {
    let trElement = createHtmlElement(
      'tr',
      undefined,
      createHtmlElement('td', undefined, x.firstName),
      createHtmlElement('td', undefined, x.lastName),
      createHtmlElement('td', undefined, x.facultyNumber),
      createHtmlElement('td', undefined, x.grade)
    );
    tbody.appendChild(trElement);
  });
}

async function createStudent(event, url) {
  event.preventDefault();
  let firstName = document.querySelector('input[name="firstName"]').value;
  let lastName = document.querySelector('input[name="lastName"]').value;
  let facultyNumber = document.querySelector(
    'input[name="facultyNumber"]'
  ).value;
  let grade = document.querySelector('input[name="grade"]').value;

  let response = await fetch(url, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      facultyNumber,
      firstName,
      grade,
      lastName,
    }),
  });

  loadStudents(url);
  event.currentTarget.reset();
}

function createHtmlElement(tag, attributes, ...params) {
  let element = document.createElement(tag);
  let firstValue = params[0];

  if (params.length === 1 && typeof firstValue !== 'object') {
    if (['input', 'textarea'].includes(tag)) {
      element.value = firstValue;
    } else {
      element.textContent = firstValue;
    }
  } else {
    element.append(...params);
  }

  if (attributes !== undefined) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  return element;
}
