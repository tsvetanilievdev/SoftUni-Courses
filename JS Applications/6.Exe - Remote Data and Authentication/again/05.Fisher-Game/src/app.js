showNavigation();

let loadBtn = document.getElementById('load-btn');
loadBtn.addEventListener('click', loadAllCatches);

let logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', logout);

let addForm = document.getElementById('addForm');
addForm.addEventListener('submit', addCatch);

async function loadAllCatches(e) {
  let mainDivCatches = document.getElementById('catches');
  mainDivCatches.querySelectorAll('div').forEach((div) => div.remove());
  let response = await fetch('http://localhost:3030/data/catches');
  let data = await response.json();

  data.forEach((x) => {
    console.log(x);
    let divCatch = createHtmlElement(
      'div',
      { class: 'catch' },
      createHtmlElement('label', undefined, 'Angler'),
      createHtmlElement('input', { type: 'text', class: 'angler' }, x.angler),
      createHtmlElement('label', undefined, 'Weight'),
      createHtmlElement('input', { type: 'number', class: 'weight' }, x.weight),
      createHtmlElement('label', undefined, 'Species'),
      createHtmlElement('input', { type: 'text', class: 'species' }, x.species),
      createHtmlElement('label', undefined, 'Location'),
      createHtmlElement(
        'input',
        { type: 'text', class: 'location' },
        x.location
      ),
      createHtmlElement('label', undefined, 'Bait'),
      createHtmlElement('input', { type: 'text', class: 'bait' }, x.bait),
      createHtmlElement('label', undefined, 'Capture Time'),
      createHtmlElement(
        'input',
        { type: 'number', class: 'captureTime' },
        x.captureTime
      ),
      createHtmlElement(
        'button',
        { class: 'update', 'data-id': x._ownerId},
        'Update'
      ),
      createHtmlElement(
        'button',
        { class: 'delete', 'data-id': x._ownerId},
        'Delete'
      )
    );
    mainDivCatches.appendChild(divCatch);
  });

  activeButtons(sessionStorage.getItem('id'));
}

async function activeButtons(token) {
  console.log('logged user ' + token)
  document.querySelectorAll('.update').forEach((x) => {
    let id = x.dataset.id;
    console.log('owner ' + id)
    if (id == token) {
      x.disabled = false;
    }else {
      x.disabled = true;
    }
  });

  document.querySelectorAll('.delete').forEach((x) => {
    let id = x.dataset.id;
    console.log(id)
    if (id == token) {
      x.disabled = false;

    }else {
      x.disabled = true;
    }
  });
}

async function addCatch(e) {
  e.preventDefault();
  let formData = new FormData(e.currentTarget);
  console.log(formData);

  let angler = formData.get('angler');
  let weight = formData.get('weight');
  let species = formData.get('species');
  let location = formData.get('location');
  let bait = formData.get('bait');
  let captureTime = formData.get('captureTime');

  let url = 'http://localhost:3030/data/catches';

  let response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': sessionStorage.getItem('auth-token'),
    },
    body: JSON.stringify({
      angler,
      weight,
      species,
      location,
      bait,
      captureTime,
    }),
  });

  if (!response.ok) {
    let err = await response.json();
    throw new Error(err.message);
  }

  loadAllCatches();
}

// to do edit and delete functions and add it to event listeners

async function logout() {
  let url = 'http://localhost:3030/users/logout';
  await fetch(url);
  sessionStorage.removeItem('auth-token');
  sessionStorage.removeItem('email');
  sessionStorage.removeItem('id');

  showNavigation();
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

function showNavigation() {
  let token = sessionStorage.getItem('auth-token');
  let email = sessionStorage.getItem('email');

  if (token) {
    document.getElementById('guest').style.display = 'none';
    document.getElementById('display-name').textContent = email;
    document.getElementById('add-btn').disabled = false;
  } else {
    document.getElementById('guest').style.display = '';
    document.getElementById('user').style.display = 'none';
    document.getElementById('display-name').textContent = 'guest';
    document.getElementById('add-btn').disabled = true;
  }
}
