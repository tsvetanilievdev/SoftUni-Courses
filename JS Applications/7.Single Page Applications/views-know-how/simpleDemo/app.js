const mainElement = document.querySelector('main');
const titleElement = document.querySelector('h1')

const navElement = document.querySelector('nav');
navElement.addEventListener('click', (event) => {
  switch (event.target.id) {
    case 'home':
        titleElement.textContent = 'Home Page'
        mainElement.innerHTML = '<p>Home Page main content</p>'
      break;
    case 'catalog':
        titleElement.textContent = 'Catalog Page'
        mainElement.innerHTML = '<p>Catalog Page main content</p>'
      break;
    case 'login':
        titleElement.textContent = 'Login Page'
        mainElement.innerHTML = '<p>Login Page main content</p>'
      break;
  }
});

