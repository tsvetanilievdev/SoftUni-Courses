function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        //select and get and parse input
        let input = document.querySelector('#inputs textarea').value;
        let inputArr = JSON.parse(input);
        let bestRest = document.querySelector('#bestRestaurant p');
        let workers = document.querySelector('#workers p')


        //create restaraunts object to store data
        let restaraunts = {}
            //parse data into object
        inputArr.forEach(restaraunt => {
            let [restName, workers] = restaraunt.split(' - ');
            restaraunts[restName] = {};
            let workerInfo = workers.split(', ');
            workerInfo.forEach(info => {
                let [name, salary] = info.split(' ');
                restaraunts[restName][name] = Number(salary);
            });

            //creating averageSalary propery:
            let values = Object.values(restaraunts[restName]);
            values = values.filter(x => typeof x == 'number');
            let average = values.reduce((acc, x) => (acc + x))
            average = (average / values.length).toFixed(2);
            restaraunts[restName].averageSalary = average;

            //creating sorted salary array
            let keysWorkers = Object.keys(restaraunts[restName]).filter(x => x !== 'averageSalary');
            let sortedWorkers = keysWorkers.sort((a, b) => {
                let salA = restaraunts[restName][a];
                let salB = restaraunts[restName][b];
                return salB - salA;
            })
            restaraunts[restName].bestPaid = sortedWorkers;
        })

        //sort by averageSalary
        let keys = Object.keys(restaraunts)
            .sort((a, b) => {
                let aveA = restaraunts[a].averageSalary;
                let aveB = restaraunts[b].averageSalary;

                return aveB - aveA;
            })


        //return id="best-restaurants" p -> bestRest:
        let bestRestName = keys[0];
        let bestRestAverage = restaraunts[bestRestName].averageSalary;
        let bestPaidWorkerName = restaraunts[bestRestName].bestPaid[0];
        let bestPaidWorkerSalary = restaraunts[bestRestName][bestPaidWorkerName].toFixed(2);
        //display best-resaurant in DOM
        bestRest.textContent = `Name: ${bestRestName} Average Salary: ${bestRestAverage} Best Salary: ${bestPaidWorkerSalary}`;

        //return id="workers" p ->
        //manipulate sorted bestPaid array;
        let workersArr = restaraunts[bestRestName].bestPaid.map(name => {
                return `Name: ${name} With Salary: ${restaraunts[bestRestName][name]}`;
            })
            //display workers in DOM
        workers.textContent = workersArr.join(' ');
    }
}
//the ERROR is that you cannot add more workers!