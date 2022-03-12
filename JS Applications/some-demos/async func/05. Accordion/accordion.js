function solution() {
  let mainSection = document.getElementById('main');

  fetch('http://localhost:3030/jsonstore/advanced/articles/list')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((post) => createPost(mainSection, post));
    });
}
solution();

function createPost(mainElement, post) {
  let divAccordion = document.createElement('div');
  divAccordion.classList.add('accordion');

  let divHead = document.createElement('div');
  divHead.classList.add('head');
  /// inside divHead
  let spanElement = document.createElement('span');
  spanElement.textContent = post.title;
  let buttonElement = document.createElement('button'); // to do functionallity
  buttonElement.classList.add('button');
  buttonElement.id = post._id;
  buttonElement.textContent = 'More';
  buttonElement.addEventListener('click', toggleInfo);

  let divExtra = document.createElement('div');
  divExtra.classList.add('extra');
  // divExtra.style.display = 'none';
  //inside divExtra
  let p = document.createElement('p');

  divHead.append(spanElement, buttonElement);
  divExtra.appendChild(p);
  divAccordion.appendChild(divHead);
  divAccordion.appendChild(divExtra);
  mainElement.appendChild(divAccordion);
}

function toggleInfo(event) {
  let id = event.target.id;
  let selectedPost = event.target.parentElement.parentElement;
  let selectedParagraph = selectedPost.querySelector('p');
  fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
    .then((res) => res.json())
    .then((data) => {
      selectedParagraph.textContent = data.content;
      if (event.target.textContent == 'More') {
        event.target.textContent = 'Less';
        selectedParagraph.parentElement.classList.remove('extra');
      } else {
        event.target.textContent = 'More';
        selectedParagraph.parentElement.classList.add('extra');
      }
    });
}

