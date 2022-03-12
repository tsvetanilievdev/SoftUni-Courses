const notifyElement = document.querySelector('#errorBox');
const output = notifyElement.querySelector('span');

export function notify(message){
    output.textContent = message;
    notifyElement.style.display = 'block';

    setTimeout(() => notifyElement.style.display = 'none', 3000)
}
window.notify = notify;

// поправяне на request в api.js - на основния catch вместо alert, импортваме notify

// сменяме alert, на return nofity във всички модули където искаме да се покаже