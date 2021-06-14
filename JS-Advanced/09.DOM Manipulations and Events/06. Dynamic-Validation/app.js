function validate() {
    let inputElement = document.querySelector('input');
    let regexp = /([A-Za-z0-9]+)@([A-Za-z0-9]+)[.]([A-Za-z0-9]+)/;

    inputElement.addEventListener('change', updateValue) // after 'change' event check for validation

    function updateValue(e) {
        let email = e.target.value;
        if (!regexp.test(email)) {
            e.target.className = 'error'
        } else {
            e.target.className = ''
        }
    }
}
/* const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('change', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
} */