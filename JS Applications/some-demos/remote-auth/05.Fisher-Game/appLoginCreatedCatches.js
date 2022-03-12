let loadBtn = document.querySelector('main aside .load');
loadBtn.addEventListener('click', getCatches);

let addBtn = document.querySelector('main fieldset .add');
addBtn.addEventListener('click', createNewCatch);
let token = sessionStorage.getItem('auth_token');
let id = sessionStorage.getItem('_id');
if (token) {
  addBtn.disabled = '';
} else {
  addBtn.disabled = true;
}

async function getCatches() {
  const mainDivCatches = document.getElementById('catches');

  const response = await fetch('http://localhost:3030/data/catches');
  if (response == false) {
    const err = await response.json();
    throw new Error('Error! ' + err.message);
  }

  mainDivCatches.textContent = '';
  const data = await response.json();
  data.forEach((c) => {
    let result = createCatchElement(c);
    let btn = result.querySelector('button');
    let btnId = btn.getAttribute('dataset-id')
    if(id == btnId){
      mainDivCatches.appendChild(result);

    }
  });
}

async function createNewCatch(event) {
  let anglerInput = document.querySelector('#addForm .angler');
  let weightInput = document.querySelector('#addForm .weight');
  let speciesInput = document.querySelector('#addForm .species');
  let locationInput = document.querySelector('#addForm .location');
  let baitInput = document.querySelector('#addForm .bait');
  let captureTimeInput = document.querySelector('#addForm .captureTime');

  let newCatch = {
    angler: anglerInput.value,
    weight: Number(weightInput.value),
    species: speciesInput.value,
    location: locationInput.value,
    bait: baitInput.value,
    captureTime: Number(captureTimeInput.value),
  };

  const response = await fetch('http://localhost:3030/data/catches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify(newCatch),
  });

  if (response.ok == false) {
    const error = await response.json();
    throw new Error(error.message);
  }

  const resData = await response.json();
  console.log(resData);

  getCatches();
}

function createCatchElement(catchObj) {

    
  let updateBtn = ce(
    'button',
    { disabled: true, class: 'update', 'dataset-id': catchObj._ownerId },
    'Update'
  );
  updateBtn.addEventListener('click', updateCatch);
  updateBtn.disabled = id !== catchObj._ownerId;
  let deleteBtn = ce(
    'button',
    { disabled: true, class: 'delete', 'dataset-id': catchObj._ownerId },
    'Delete'
  );
  deleteBtn.addEventListener('click', deleteCatch);
  deleteBtn.disabled = id !== catchObj._ownerId;



  let divCatch = ce(
    'div',
    { class: 'catch' },
    ce('label', undefined, 'Angler'),
    ce('input', { type: 'text', class: 'angler' }, catchObj.angler),
    ce('hr'),
    ce('label', undefined, 'Weight'),
    ce('input', { type: 'number', class: 'weight' }, catchObj.weight),
    ce('hr'),
    ce('label', undefined, 'Species'),
    ce('input', { type: 'text', class: 'species' }, catchObj.species),
    ce('hr'),
    ce('label', undefined, 'Location'),
    ce('input', { type: 'text', class: 'location' }, catchObj.location),
    ce('hr'),
    ce('label', undefined, 'Bait'),
    ce('input', { type: 'text', class: 'bait' }, catchObj.bait),
    ce('hr'),
    ce('label', undefined, 'Capture Time'),
    ce('input', { type: 'text', class: 'captureTime' }, catchObj.captureTime),
    ce('hr'),
    updateBtn,
    deleteBtn
  );
  return divCatch;
}

function ce(tag, attributes, ...params) {
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

console.log(
  'updateCatch and deleteCatch functions'
);

async function updateCatch(){
    
}

async function deleteCatch(){
    
}