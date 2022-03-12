function solve() {

    let infoSpan = document.querySelector('#info .info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    function depart() {
        let url = 'http://localhost:3030/jsonstore/bus/schedule/';
        let nextId = 'depot';

        if (infoSpan.nextId) {
            nextId = infoSpan.nextId;
        }

        fetch(url + nextId)
            .then(r => r.json())
            .then(json => {
                infoSpan.nextId = json.next;
                infoSpan.currentName = json.name;

                infoSpan.textContent = `Next stop ${json.name}`;

                departBtn.disabled = true;
                arriveBtn.disabled = false;
            });
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${infoSpan.currentName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();