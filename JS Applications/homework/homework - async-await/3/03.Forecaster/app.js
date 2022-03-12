function attachEvents() {
    
    let locationInput = document.getElementById("location");
    let submitButton = document.getElementById("submit");
    let forecastDiv = document.getElementById("forecast");
    let currentDiv = document.querySelector('#current');
    let upcomingDiv = document.querySelector('#upcoming');

    
    submitButton.addEventListener('click', GetWeatherHandler);
    
    function getConditionSymbol(condition){
        switch(condition){
            case 'Sunny':
                return '☀';
                case 'Partly sunny':
                    return '⛅';
                    case 'Overcast':
                        return '☁';
                        case 'Rain':
                            return '☂';
                            
                        }
                    }
                    

    function GetWeatherHandler() {

        submitButton.disabled = true;

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(body => body.json())
        .then(locations => {
            let currentLocation = locations.find(l => l.name === locationInput.value);
            let locationCode = currentLocation.code;
            let city = currentLocation.name;
            console.log(locationCode);

            fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`)
            .then(body => body.json())
            .then(todaysForecast => {
                let currForecast = todaysForecast.forecast;

                let currLow = currForecast.low;
                let currHigh = currForecast.high;
                let currCondition = currForecast.condition;

                forecastDiv.style.display = 'block';

                //Create HTML elements
                let createDiv = document.createElement('div');
                let createSpanConditionSymbol = document.createElement('span');
                let createSpanCondition = document.createElement('span');

                let createSpanCity = document.createElement('span');
                let createSpanDegrees = document.createElement('span');
                let createSpanConditionText = document.createElement('span');
                //Add HTML classes to elements
                createDiv.classList.add('forecasts');
                createSpanConditionSymbol.classList.add('condition', 'symbol');
                createSpanCondition.classList.add('condition');

                createSpanCity.classList.add('forecast-data');
                createSpanDegrees.classList.add('forecast-data');
                createSpanConditionText.classList.add('forecast-data');

                //Add data in Span elements
                createSpanConditionSymbol.textContent = getConditionSymbol(currCondition);
                createSpanCity.textContent = city;
                createSpanDegrees.textContent = `${currLow}°/${currHigh}°`;
                createSpanConditionText.textContent = currCondition;

                createSpanCondition.appendChild(createSpanCity);
                createSpanCondition.appendChild(createSpanDegrees);
                createSpanCondition.appendChild(createSpanConditionText);

                createDiv.appendChild(createSpanConditionSymbol);
                createDiv.appendChild(createSpanCondition);

                currentDiv.appendChild(createDiv);

            })

            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`)
            .then(body => body.json())
            .then(threeDayForecast => {                
                let array = threeDayForecast.forecast;

                //Create HTML elements
                let createDivForecastInfo = document.createElement('div');
                createDivForecastInfo.classList.add('forecast-info');

                for (const day of array) {
                    console.log(day);

                    //Create HTML elements
                    let createSpanUpcoming = document.createElement('span');
                    let createSpanSymbolUpcoming = document.createElement('span');
                    let createSpanDegreesUpcoming = document.createElement('span');
                    let createSpanConditionUpcoming = document.createElement('span');

                    //Add HTML classes to elements
                    createSpanUpcoming.classList.add('upcoming');
                    createSpanSymbolUpcoming.classList.add('symbol');
                    createSpanDegreesUpcoming.classList.add('forecast-data');
                    createSpanConditionUpcoming.classList.add('forecast-data');

                     //Add data in Span elements
                    createSpanSymbolUpcoming.textContent = getConditionSymbol(day.condition);
                    createSpanDegreesUpcoming.textContent = `${day.low}°/${day.high}°`;
                    createSpanConditionUpcoming.textContent = day.condition;

                    createSpanUpcoming.appendChild(createSpanSymbolUpcoming);
                    createSpanUpcoming.appendChild(createSpanDegreesUpcoming);
                    createSpanUpcoming.appendChild(createSpanConditionUpcoming);

                    createDivForecastInfo.appendChild(createSpanUpcoming);
                    upcomingDiv.appendChild(createDivForecastInfo);

                }

                document.getElementById("location").value = '';
            })
        })
        .catch(error => {

            let forecastSection = document.getElementById("forecast");
            forecastSection.style.display = 'block';
            forecastSection.textContent = '';
            forecastSection.textContent = "Error";
        })

    }

}

attachEvents();