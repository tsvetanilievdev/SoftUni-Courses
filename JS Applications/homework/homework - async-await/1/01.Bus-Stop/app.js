function getInfo() {
    let busIdInput = document.getElementById('stopId');
    let stopNameDiv = document.getElementById('stopName');
    let busesList = document.getElementById('buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busIdInput.value}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            deleteChildren(busesList);
            stopNameDiv.textContent = json.name;
            busIdInput.value = '';

            for (const key in json.buses) {
                let li = document.createElement('li');
                li.textContent = `Bus ${key} arrives in ${json.buses[key]} minutes`;
                busesList.appendChild(li);
            }
        })
        .catch(() => {
            deleteChildren(busesList);
            stopNameDiv.textContent = 'Error';
            busIdInput.value = '';
        });
}

function deleteChildren(element) {
    Array.from(element.childNodes)
        .forEach(x => x.remove());
}