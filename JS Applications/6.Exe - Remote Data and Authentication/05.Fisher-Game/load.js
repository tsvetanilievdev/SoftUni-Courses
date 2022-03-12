let url = 'http://localhost:3030/data/catches';
let catchesContainer = document.querySelector('#catches');
async function load() {
  //clear old catches
  let catchesElements = document.querySelectorAll('.catch');
  catchesElements.forEach((x) => x.remove());

  let loadResponse = await fetch(url);
  let loadResult = await loadResponse.json();

  catchesContainer.append(...loadResult.map((c) => createHtmlCatch(c)));

  function createHtmlCatch(currCatch) {
    let labelAngler = createElement('label', undefined, 'Angler');
    let inputAngler = createElement(
      'input',
      { type: 'text', class: 'angler' },
      currCatch.angler
    );
    let labelWeight = createElement('label', undefined, 'Weight');
    let inputWeight = createElement(
      'input',
      { type: 'text', class: 'weight' },
      currCatch.weight
    );
    let labelSpecies = createElement('label', undefined, 'Species');
    let inputSpecies = createElement(
      'input',
      { type: 'text', class: 'species' },
      currCatch.species
    );
    let labelLocation = createElement('label', undefined, 'Location');
    let inputLocation = createElement(
      'input',
      { type: 'text', class: 'location' },
      currCatch.location
    );
    let labelBait = createElement('label', undefined, 'Bait');
    let inputBait = createElement(
      'input',
      { type: 'text', class: 'bait' },
      currCatch.bait
    );
    let labelCaptureTime = createElement('label', undefined, 'CaptureTime');
    let inputCaptureTime = createElement(
      'input',
      { type: 'number', class: 'captureTime' },
      currCatch.captureTime
    );
    let buttonUpdate = createElement(
      'button',
      { 'data-id': currCatch._id, 'data-owner': currCatch._ownerId },
      'Update'
    );
    buttonUpdate.addEventListener('click', update);
    let buttonDelete = createElement(
      'button',
      { 'data-id': currCatch._id, 'data-owner': currCatch._ownerId },
      'Delete'
    );
    buttonDelete.addEventListener('click', deleteFunc);

    let div = createElement(
      'div',
      { class: 'catch' },
      labelAngler,
      inputAngler,
      labelWeight,
      inputWeight,
      labelSpecies,
      inputSpecies,
      labelLocation,
      inputLocation,
      labelBait,
      inputBait,
      labelCaptureTime,
      inputCaptureTime,
      buttonUpdate,
      buttonDelete
    );

    //check is there saved token
    let addButton = document.querySelector('#addForm button');
    if (localStorage.token) {
      addButton.disabled = false;
    }

    if (localStorage.owner_id === buttonUpdate.getAttribute('data-owner')) {
      buttonUpdate.classList.add('update');
      buttonDelete.classList.add('delete');
      buttonUpdate.disabled = false;
      buttonDelete.disabled = false;
    }else {
        buttonUpdate.classList.remove('update');
        buttonDelete.classList.remove('delete');
        buttonUpdate.disabled = true;
        buttonDelete.disabled = true;
    }

    return div;
  }

  function createElement(tag, attributes, ...params) {
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
}

async function update(e) {
  let currCatch = e.currentTarget.parentElement;
  let id = e.currentTarget.getAttribute('data-id');

  let inputAngler = currCatch.querySelector('.angler');
  let inputWeight = currCatch.querySelector('.weight');
  let inputSpecies = currCatch.querySelector('.species');
  let inputLocation = currCatch.querySelector('.location');
  let inputBait = currCatch.querySelector('.bait');
  let inputCaptureTime = currCatch.querySelector('.captureTime');
  let updateRes = await fetch(`http://localhost:3030/data/catches/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': localStorage.token,
    },
    body: JSON.stringify({
      angler: inputAngler.value,
      weight: inputWeight.value,
      species: inputSpecies.value,
      location: inputLocation.value,
      bait: inputBait.value,
      captureTime: inputCaptureTime.value,
    }),
  });
}

async function deleteFunc(e) {
  let id = e.currentTarget.getAttribute('data-id');
  console.log(id);
  let deleteRes = await fetch(`http://localhost:3030/data/catches/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': localStorage.token,
    },
  });
}
export default load;
