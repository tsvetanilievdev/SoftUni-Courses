function solve() {

    function depart() {
        let nextStopId = 'depot';
        let stopInfoSpan = document.querySelector('#info .info');
        let baseURL = 'http://localhost:3030/jsonstore/bus/schedule/';
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');

        if (stopInfoSpan.getAttribute('data-next-stop-id') !== null) {
            nextStopId = stopInfoSpan.getAttribute('data-next-stop-id');
        }

        fetch(`${baseURL}${nextStopId}`)
        .then(body => body.json())
        .then(stopIdInfo => {
            stopInfoSpan.setAttribute('data-stop-name', stopIdInfo.name);
            stopInfoSpan.setAttribute('data-next-stop-id', stopIdInfo.next);
            stopInfoSpan.textContent = `Next stop ${stopIdInfo.name}`;
            departButton.disabled = true;
            arriveButton.disabled = false;
        })
        .catch(error => {
            stopInfoSpan.textContent = 'Error';
            departButton.disabled = true;
            arriveButton.disabled = true;
        })
        

    }

    function arrive() {
        let busInfoSpan = document.querySelector('#info .info');
        let departButton = document.getElementById('depart');
        let arriveButton = document.getElementById('arrive');
        busInfoSpan.textContent = `Arriving at ${busInfoSpan.getAttribute('data-stop-name')}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();