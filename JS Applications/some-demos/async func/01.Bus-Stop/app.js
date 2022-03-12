document.getElementById('submit').addEventListener('click', () => {
  let inputValue = document.getElementById('stopId').value;
  let ulElement = document.getElementById('buses');

  let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';

  fetch(`${baseUrl}${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll('li').forEach((x) => x.remove());
      Object.entries(data.buses).forEach(([num, min]) => {
        let liEl = document.createElement('li');
        liEl.textContent = `Bus ${num} arrives in ${min} minutes`;
        ulElement.appendChild(liEl);
      });
      document.getElementById('stopName').textContent = data.name;
    })
    .catch((err) => {
      document.getElementById('stopName').textContent = 'Error!';
      document.querySelectorAll('li').forEach((x) => x.remove());
    });
});
