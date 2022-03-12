function attachEvents() {
    document.getElementById('submit').addEventListener('click', onSubmit);

    let input = document.getElementById('location');
    let forecastDiv = document.getElementById('forecast');
    let symbols = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'
    }

    function onSubmit() {
        let locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';

        fetch(locationsUrl)
            .then(r => r.json())
            .then(json => {
                let code = json.find(e => e.name === input.value).code;

                let todayUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
                return fetch(todayUrl + code)
                    .then(response => response.json())
                    .then(json2 => ({ code, json2 }));
            })
            .then(({ code, json2 }) => {
                let div = createCurrentWeatherDiv(json2.name, json2.forecast.low, json2.forecast.high, json2.forecast.condition);
                let currentDiv = document.getElementById('current');
                currentDiv.lastChild.remove();
                currentDiv.appendChild(div);
                forecastDiv.style.display = 'block';
                return code;
            })
            .then(code => {
                let upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
                return fetch(upcomingUrl + code);
            })
            .then(response => response.json())
            .then(json => {
                let upcomingDiv = document.getElementById('upcoming');
                let info = createUpcommingWeatherDiv(json.forecast);

                upcomingDiv.lastChild.remove();
                upcomingDiv.appendChild(info);
            })
            .catch(() => {
                forecastDiv.textContent = 'Error';
            })
    }

    function createCurrentWeatherDiv(location, minTemp, maxTemp, condition) {
        let div = document.createElement('div');
        div.classList.add('forecasts');

        let span1 = document.createElement('span');
        span1.classList.add('condition');
        span1.classList.add('symbol');
        span1.textContent = symbols[condition];

        let span2 = document.createElement('span');
        span2.classList.add('condition');

        let innerSpan1 = document.createElement('span');
        innerSpan1.classList.add('forecast-data');
        innerSpan1.textContent = location;

        let innerSpan2 = document.createElement('span');
        innerSpan2.classList.add('forecast-data');
        innerSpan2.textContent = `${minTemp}°/${maxTemp}°`;

        let innerSpan3 = document.createElement('span');
        innerSpan3.classList.add('forecast-data');
        innerSpan3.textContent = condition;

        div.appendChild(span1);
        div.appendChild(span2);

        span2.appendChild(innerSpan1);
        span2.appendChild(innerSpan2);
        span2.appendChild(innerSpan3);

        return div;
    }

    function createUpcommingWeatherDiv(array) {
        let div = document.createElement('div');
        div.classList.add('forecast');

        for (const element of array) {
            let mainSpan = document.createElement('span');
            mainSpan.classList.add('upcoming');

            let span1 = document.createElement('span');
            span1.classList.add('symbol');
            span1.textContent = symbols[element.condition];

            let span2 = document.createElement('span');
            span2.classList.add('forecast-data');
            span2.textContent = `${element.low}°/${element.high}°`;

            let span3 = document.createElement('span');
            span3.classList.add('forecast-data');
            span3.textContent = element.condition;

            mainSpan.appendChild(span1);
            mainSpan.appendChild(span2);
            mainSpan.appendChild(span3);

            div.appendChild(mainSpan);
        }

        return div;
    }
}

attachEvents();