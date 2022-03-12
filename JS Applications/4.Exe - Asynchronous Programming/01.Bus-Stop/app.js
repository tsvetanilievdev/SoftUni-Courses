function getInfo() {
    //create and get links
    let baseUrlBus = 'http://localhost:3030/jsonstore/bus/businfo/'
    let inputStopIdElement = document.querySelector('#stopId');
    let busNumber = inputStopIdElement.value

    let divStopNameElement = document.getElementById('stopName');

    //select ul element
    let ulBusesElement = document.getElementById('buses');

    //clear all elements which are children to ulBusesElement, if there are
    while (ulBusesElement.firstChild) {
        ulBusesElement.firstChild.remove()
    }

    //other way to clear all li elements in ulBusesElement
    // Array.from(ulBusesElement.querySelectorAll('li').forEach(li => li.remove()));

    //create get request
    fetch(`${baseUrlBus}${busNumber}`)
        .then(response => response.json())
        .then(data => {
            //adding name to div #stopName
            divStopNameElement.textContent = data.name;

            //get info about each bus number and minutes before arrival;
            let busNumber = Object.entries(data.buses); //return array of arrays [[busNumber, arrivalTime],[busNumber, arrivalTime]...]

            busNumber.forEach(kvp => {
                //create new li element, adding info and attach it to the ul element
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${kvp[0]} arrives in ${kvp[1]}`
                ulBusesElement.appendChild(liElement);
            })
        })
        .catch(error => {
            divStopNameElement.textContent = 'Error';
        })
}