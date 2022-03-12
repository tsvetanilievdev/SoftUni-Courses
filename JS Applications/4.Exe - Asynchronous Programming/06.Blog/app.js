async function attachEvents() {
  let btnLoad = document.querySelector('#btnLoadPosts');
  btnLoad.addEventListener('click', renderSetup);

  let btnView = document.querySelector('#btnViewPost');
  btnView.addEventListener('click', renderCurrent);
}

attachEvents();

async function getAllPosts(e) {
  let url = 'http://localhost:3030/jsonstore/blog/posts';
  let response = await fetch(url);
  let data = await response.json();

  return data;
}

async function renderSetup() {
  let data = await getAllPosts();
  let selectElement = document.getElementById('posts');
  Object.keys(data).forEach((x) => {
    let optionElement = createHtmlElement(
      'option',
      { value: x },
      data[x].title
    );
    selectElement.appendChild(optionElement);
  });
}

async function getAllComments(id) {
  let url = `http://localhost:3030/jsonstore/blog/comments/`;
  let response = await fetch(url);
  let data = await response.json();
  let curr = Object.entries(data).filter((x) => x[1].postId === id);
  return curr;
}

async function renderCurrent(e) {
  let selected = document.getElementById('posts');
  let id = selected.options[selected.selectedIndex].value;

  let data = await getAllComments(id);

  let allDataPosts = await getAllPosts();

  let h1 = document.getElementById('post-title');
  h1.textContent = allDataPosts[id].title;
  let bodyUl = document.getElementById('post-body');
  bodyUl.textContent = allDataPosts[id].body;
  let commentsUl = document.getElementById('post-comments');
  commentsUl.querySelectorAll('li').forEach(x => x.remove())
  Object.values(data).forEach((x) => {
    let li = document.createElement('li');
    li.textContent = x[1].text;
    commentsUl.appendChild(li);
  });
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
