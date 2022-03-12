import { setupHome } from "./home.js";
import { setupLogin } from "./login.js";
import { setupRegister } from "./register.js";



// селектиране на main и nav секциите
const main = document.getElementById('main');
const nav = document.querySelector('nav')

// създаване на асоциативни масиви. 
const views = {}; // views се съхраняват функциите, които връщат определена секция
const links = {}; // links се съхраняват id от nav линковите, които се асоциират с името на определно view. Тоест homeLink: 'home'

const navigation = {
    goTo
}

//1. setup and register all views
//всяко view трябва да се регистрира с помощта на 4ри параметъра
registerView('home', document.getElementById('home'),setupHome, 'homeLink');
registerView('login', document.getElementById('login'),setupLogin, 'loginLink');
registerView('register', document.getElementById('register'),setupRegister, 'registerLink');

//2. setup nav - add event listener to nav bar
setupNavigation()

//3. start app at home view - manually
goTo('home')

// функция инициализираща всяко view --> с определено 'name' напр. с 'home'
function registerView(name, section,setup, linkId){
    const view = setup(section, navigation) // view сега е функция, която запазва и  връща определена секция

    views[name] = view; // добавяме в асоциативния масив, views['home'] = func(която връка home секция)
    if(linkId) { // ако view-to има linkId в nav bar, то се запазва.
        links[linkId] = name;
    }
}

function setupNavigation(){ // закачане на event listener за nav bar

    nav.addEventListener('click', (event) => {
        const viewName = event.target.id; //който взема id на линк
        if(viewName){
            event.preventDefault();
            console.log(viewName)
            const name = links[viewName] //чрез който взема името на view
            console.log(name)
            goTo(name) //го подава на goTo функция която го визуализира
        }
    })
}

// goTo функция визуализира view чрез подадено съответното име на view-to
async function goTo(name, ...params){
    main.innerHTML = ''; // изчистване на main секцията
    const view = views[name]; // вземане на view function от асоциативният масив с помощта на name
    const section = await view(...params); // съхранение на view секцията 
    main.appendChild(section); // закачане на секцията
    
}