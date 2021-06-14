// ДА СЕ ПОМИСЛИ ДАННИТЕ В КОЯ СТРУКТУРА ТРЯБВА ДА СЕ ПАЗЯТ,
// КОЕ Е ДА СЕ ПАЗИ В ОБЕКТ(добавяне и презаписване на данни), КОЕ ДА СЕ ПАЗИ В МАСИВ(сортиране), или КОМБИНАЦИЯ ОТ ДВЕТЕ

function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        //select and get and parse input
        let input = document.querySelector('#inputs textarea').value;
        let inputArr = JSON.parse(input);
        let bestRestParagraph = document.querySelector('#bestRestaurant p');
        let workersParagraph = document.querySelector('#workers p')


        //create restaraunts object to store data
        let restaurants = {}

        inputArr.forEach(line => {
                const [name, workersString] = line.split(' - ');
                let workersArr = workersString.split(', ');
                let workers = [];

                //create workers arr within every worker as an object
                for (let worker of workersArr) {
                    let [name, salary] = worker.split(' ');
                    workers.push({ name, salary: Number(salary), })
                }

                //if there are more workers, concatenate it
                if (restaurants[name]) {
                    workers = restaurants[name].workers.concat(workers);
                }

                // sort workers arr in salary
                workers = workers.sort((a, b) => b.salary - a.salary);
                let bestSalary = workers[0].salary;
                let averageSalary = workers
                    .reduce((acc, x) => acc + x.salary, 0) / workers.length;

                //create the every restaurant as an object
                restaurants[name] = {
                    workers,
                    averageSalary: averageSalary.toFixed(2),
                    bestSalary: bestSalary.toFixed(2),
                }
            })
            // sort best restaurant
        let sortedRestaurants = Object.keys(restaurants).sort((a, b) => restaurants[b].averageSalary - restaurants[a].averageSalary);
        // display results in DOM
        bestRestParagraph.textContent = `Name: ${sortedRestaurants[0]} Average Salary: ${restaurants[sortedRestaurants[0]].averageSalary} Best Salary: ${restaurants[sortedRestaurants[0]].bestSalary}`;

        // parse best restaurant workers arr to array of strings
        let arr = restaurants[sortedRestaurants[0]].workers.map(worker => {
                return `Name: ${worker.name} With Salary: ${worker.salary}`;
            })
            //display results in DOM
        workersParagraph.textContent = `${arr.join(' ')}`;
    }
}