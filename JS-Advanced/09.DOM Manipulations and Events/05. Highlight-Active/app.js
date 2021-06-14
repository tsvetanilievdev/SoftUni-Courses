function focused() {
    let div = document.getElementsByTagName('div')[0];

    div.addEventListener('focus', changeColor, true) // set to be executed in capture phase
    div.addEventListener('blur', returnColor, true) // set to be executed in capture phase

    function changeColor(e) {
        if (e.target.nodeName == 'INPUT') { // check if target is INPUT
            e.target.parentNode.className = 'focused'; // change the class
        }
    }

    function returnColor(e) {
        if (e.target.nodeName == 'INPUT') { // check if target is INPUT
            e.target.parentNode.className = ''; // change the class
        }
    }

}
/* table.onclick = function(event) {
  let target = event.target; // where was the click?

  if (target.tagName != 'TD') return; // not on TD? Then we're not interested

  highlight(target); // highlight it
}; */

/* const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = '';
}, true); */