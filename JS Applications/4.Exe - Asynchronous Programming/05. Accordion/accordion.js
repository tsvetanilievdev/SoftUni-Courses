async function setup() {
  let data = await getAllData();

  renderAll(data);

  //event delegation
  let mainSection = document.getElementById('main');
    mainSection.addEventListener('click', toggleInfo)
}

setup();

async function getAllData() {
  let url = 'http://localhost:3030/jsonstore/advanced/articles/list';

  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function createHtmlElement(type, attributes, ...content) {
  let element = document.createElement(type);
  let firstValue = content[0];
  if (content.length === 1 && typeof firstValue !== 'object') {
    if (['input', 'textarea'].includes(type)) {
      element.value = firstValue;
    } else {
      element.textContent = firstValue;
    }
  } else {
    element.append(...content);
  }

  if (attributes !== undefined) {
    Object.keys(attributes).forEach((key) =>
      element.setAttribute(key, attributes[key])
    );
  }
  return element;
}

function createEl(item){

    let div = createHtmlElement('div', {class: 'accordion'},
        createHtmlElement('div', {class: 'head'},
            createHtmlElement('span',undefined, item.title),
            createHtmlElement('button', {class: 'button', id: item._id}, 'More')),
        createHtmlElement('div', {class: 'extra'},
            createHtmlElement('p', {class: 'hide'},  ''
            )),
    )

    return div;
}


async function renderAll(data){
    let mainSection = document.getElementById('main');
    data.forEach( item => {
        mainSection.appendChild(createEl(item));


    })
}

async function toggleInfo(e){

    if(e.target.tagName == 'BUTTON'){
        let id = e.target.id;
        let btn = document.getElementById(id)
        let parent = e.target.parentElement.parentElement;
        let p = parent.querySelector('p');
        let text = await getCurrInfo(id);
        p.textContent = text;

        if(p.classList.contains('hide')){
            p.classList.remove('hide');
            btn.textContent = 'Less'
        }else {
            p.classList.add('hide');
            btn.textContent = 'More'

        }
    }
}

async function getCurrInfo(id){
    let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    return data.content;
}