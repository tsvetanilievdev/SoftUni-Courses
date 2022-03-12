async function lockedProfile() {
// 1. remove templete profile
let mainDiv = document.getElementById('main');
mainDiv.querySelectorAll('.profile').forEach(x => x.remove())

//2. get all users data
let allUsers = Object.values(await getAllUsers());

//render all profiles
allUsers.forEach((x,i) => createProfileCard(x,i))
}

async function getAllUsers(){
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';

    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    return data;
}

function createProfileCard(user,index){
let mainDiv = document.getElementById('main');
    
    let divProfile = createHtmlElement('div',{class: 'profile'},
        createHtmlElement('img', {class: 'userIcon', src: './iconProfile2.png'}),
        createHtmlElement('label',undefined,'Lock'),
        createHtmlElement('input', {type: 'radio', name: `user${index + 1}Locked`, value: 'lock', checked: true}),
        createHtmlElement('label',undefined,'Unlock'),
        createHtmlElement('input', {type: 'radio', name: `user${index + 1}Locked`, value: 'unlock'}),
        createHtmlElement('br'),
        createHtmlElement('hr'),
        createHtmlElement('label',undefined,'Username'),
        createHtmlElement('input', {type: 'text', name: `user${index + 1}Locked`, value: '', disabled: true, readonly: true},user.username),
        createHtmlElement('div', {class: 'hidden-div hide'},
            createHtmlElement('hr'),
            createHtmlElement('label',undefined, 'Email:'),
            createHtmlElement('input',{type: 'email', name: `user${index + 1}Email`, value: '', disabled: true, readonly: true}, user.email),
            createHtmlElement('label',undefined, 'Age:'),
            createHtmlElement('input',{type: 'text', name: `user${index + 1}Age`, value: '', disabled: true, readonly: true}, user.age),
        ),
        createHtmlElement('button',{id: `btn-show-more-${index + 1}`},'Show more')
    )

    
    mainDiv.append(divProfile)
    let buttonShowMore = document.getElementById(`btn-show-more-${index + 1}`);

    buttonShowMore.addEventListener('click', (e) => {
        let parent = e.currentTarget.parentElement;
        
        let isLocked = parent.querySelector('input[value="lock"]');
        if(isLocked.checked == false){
            let hiddenField = parent.querySelector(`.hidden-div`);
            if(hiddenField.classList.contains('hide')){
                hiddenField.classList.remove('hide');
            }else {
                hiddenField.classList.add('hide');
            }
            e.currentTarget.textContent = e.currentTarget.textContent == 'Show more' ? 'Hide it!' : 'Show more';
        }
    })
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