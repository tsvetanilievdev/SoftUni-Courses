function getInfo() {
    let stopIdInput = document.getElementById('stopId');
    let stopId = stopIdInput.value;
    let baseURL = 'http://localhost:3030/jsonstore/bus/businfo/';

    fetch(`${baseURL}${stopId}`) 
        .then(body => body.json())
        .then(stopInfo => {
            let stopNameDiv = document.getElementById('stopName');
            stopNameDiv.textContent = stopInfo.name;
            console.log(stopInfo);

            let busesUL = document.getElementById('buses');
            busesUL.textContent = '';
            
            Object.keys(stopInfo.buses).forEach(key => {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${key} arrives in ${stopInfo.buses[key]}`;
                busesUL.appendChild(newLi);
            })

        }
            )
        .catch('error');

}