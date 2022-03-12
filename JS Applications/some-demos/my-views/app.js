import { setupHome } from './src/views/home.js';
import { setupLogin } from './src/views/login.js';
import { setupRegister } from './src/views/register.js';

// селектиране на main и nav секциите
const main = document.getElementById('main');
const nav = document.querySelector('nav');

// създаване на асоциативни масиви.
const views = {}; // views(изгледи) се съхраняват функциите(референции), които връщат определена секция
const links = {}; // links се съхраняват id от nav линковите, които се асоциират с името на определно view. Тоест homeLink: 'home'

const navigation = {
  goTo,
};

//1. setup and register all views
//всяко view трябва да се регистрира с помощта на 4ри параметъра. Модули(setup функциите), които се грижат само за съхранението на view-tata setupHome,setupLogin,setupRegister
//викаме registerView за всяко едно view, като подаваме неговото име, секцията върху която ще работи, фунцията която го подготвя, id на линка ако има такъв
registerView('home', document.getElementById('home'), setupHome, 'homeLink');
registerView(
  'login',
  document.getElementById('login'),
  setupLogin,
  'loginLink'
);
registerView(
  'register',
  document.getElementById('register'),
  setupRegister,
  'registerLink'
);

//2. setup nav - add event listener to nav bar
setupNavigation();

//3. start app at home view - manually
goTo('home');

// функция инициализираща всяко view --> с определено 'name' напр. с 'home'
function registerView(name, section, setup, linkId) {
  const view = setup(section, navigation); // view сега е функция, която запазва и  връща определена секция

  views[name] = view; // добавяме в асоциативния масив, views['home'] = func(която връка home секция)
  if (linkId) {
    // ако view-to има linkId в nav bar, то се запазва.
    links[linkId] = name;
  }
}
function setupNavigation() {
  // закачане на event listener за nav bar
  setUserNav();
  nav.addEventListener('click', async (event) => {
    const viewName = links[event.target.id]; //който взема name чрез id на линка
    if (viewName) {
      event.preventDefault();

      if (viewName == 'logoutBtn') { // моя импровизация за logout!!
        await logout();
        return goTo('home');
      }
      goTo(viewName); //го подава на goTo функция която го визуализира
    }
  });
}

// goTo функция визуализира view чрез подадено съответното име на view-to
async function goTo(name, ...params) {
  main.innerHTML = ''; // изчистване на main секцията
  const view = views[name]; // вземане на view function от асоциативният масив с помощта на name
  const section = await view(...params); // съхранение на view секцията
  main.appendChild(section); // закачане на секцията
}

// func проверяваща дали user е логнат, и според това променя кои nav links да се показват в nav bar
function setUserNav() {
  const token = sessionStorage.getItem('authToken');
  if (token != null) {
    [...nav.querySelectorAll('.user-nav')].forEach(
      (e) => (e.style.display = 'list-item')
    );
    [...nav.querySelectorAll('.guest-nav')].forEach(
      (e) => (e.style.display = 'none')
    );
  } else {
    [...nav.querySelectorAll('.user-nav')].forEach(
      (e) => (e.style.display = 'none')
    );
    [...nav.querySelectorAll('.guest-nav')].forEach(
      (e) => (e.style.display = 'list-item')
    );
  }
}


// трябда се закачи ръчно за logoutBtn
async function logout() {
    console.log('logout to do.............');
} 
