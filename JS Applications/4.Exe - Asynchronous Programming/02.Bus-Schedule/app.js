function solve() {
  let baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';

  //select buttons
  let btnDepart = document.getElementById('depart');
  let btnArrive = document.getElementById('arrive');

  //create boolean for first stop
  let id = 'depot';
  let isFirstStop = true;
  //select spans
  let spanElement = document.querySelector('#info span');

  function depart() {
    //activate and deactivate buttons
    btnDepart.disabled = true;
    btnArrive.disabled = false;

    // check if is first stops
    if (isFirstStop) {
      spanElement.textContent = `Next stop Depot`;
      isFirstStop = false;
      return;
    }

    //creaete fetch and change spanElement
    fetch(`${baseUrl}${id}`)
      .then((res) => res.json())
      .then((arriveInfo) => {
        spanElement.textContent = `Next stop ${arriveInfo.name}`;
      })
      .catch((err) => {
        spanElement.textContent = 'Error';
      });
  }

  function arrive() {
    //activate and deactivate buttons
    btnDepart.disabled = false;
    btnArrive.disabled = true;
    //creaete fetch,change spanElement and take next stop ID
    fetch(`${baseUrl}${id}`)
      .then((res) => res.json())
      .then((arriveInfo) => {
        id = arriveInfo.next;
        spanElement.textContent = `Arriving at ${arriveInfo.name}`;
      })
      .catch((err) => {
        spanElement.textContent = 'Error';
      });
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
