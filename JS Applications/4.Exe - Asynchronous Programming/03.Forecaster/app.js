function attachEvents() {

  let symbolsObj = {
    'Sunny': '☀',
    'Partly sunny': '⛅',
    'Overcast': '☁',
    'Rain': '☂',
    'Degrees': '°',
  };

  //select inputCity and submitButton
  let inputCity = document.querySelector('#location');
  let submitInputBtn = document.querySelector('#submit');

  submitInputBtn.addEventListener('click', () => {
    let city = inputCity.value;

    //display hidden DIV
    let divElement = document.getElementById('forecast');
    divElement.style.display = 'block';

    fetch('http://localhost:3030/jsonstore/forecaster/locations')
      .then((body) => body.json())
      .then((allCitiesInfo) => {
        let cityInfo = allCitiesInfo.filter((x) => x.name == city)[0];
        if (!cityInfo) {
          //error TO DO.....
        }
        //get code of current city
        let code = cityInfo.code;

        //today request <----------------------------
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
          .then((body) => body.json())
          .then((currCityToday) => {
            //select today DIV
            let todayDivElement = document.getElementById('current');

            //create new '.condition symbol' span and take info
            let conditionSymbolSpanClass = document.createElement('span');
            conditionSymbolSpanClass.className = 'condition symbol';
            let condition = currCityToday.forecast.condition;
            let symbol = symbolsObj[condition];
            conditionSymbolSpanClass.textContent = symbol;
            todayDivElement.appendChild(conditionSymbolSpanClass);

            //create new '.condition' span and take info
            let conditionSpanClass = document.createElement('span');
            conditionSpanClass.className = 'condition';
                //create children spans
            let insideSpanName = document.createElement('span');
            insideSpanName.className = 'forecast-data';
            insideSpanName.textContent = currCityToday.name;
            let insideSpanTemp = document.createElement('span');
            insideSpanTemp.className = 'forecast-data';
            insideSpanTemp.textContent = `${currCityToday.forecast.low}/${currCityToday.forecast.high}`
            let insideSpanCondition = document.createElement('span');
            insideSpanCondition.className = 'forecast-data';
            insideSpanCondition.textContent = currCityToday.forecast.condition;
            //attach all spans
            conditionSpanClass.appendChild(insideSpanName);
            conditionSpanClass.appendChild(insideSpanTemp);
            conditionSpanClass.appendChild(insideSpanCondition);
            todayDivElement.appendChild(conditionSpanClass);
          })
          .catch(err => {
            divElement.style.display = 'block';
            divElement.textContent = 'Error'; 
          });

        //upcoming request <----------------------------
            //select upcoming DIV element
        let upcomingDivElement = document.getElementById('upcoming');

        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        .then(body => body.json())
        .then(upcomingForecastInfo => {
            let forecastArr = upcomingForecastInfo.forecast;
            //create DIV .forecast-info
            let forecastInfoDivElement = document.createElement('div');
            forecastInfoDivElement.className = 'forecast-info';

            //create SPAN for three days:
                //first day:
                let firstUpcomingSpan = document.createElement('span');
                firstUpcomingSpan.className = 'upcoming';
                    //create inside SPANS for first day
                    let firstSpanSymbol = document.createElement('span');
                    firstSpanSymbol.className = 'symbol';
                    let firstCondition = forecastArr[0].condition;
                    let firstSymbol = symbolsObj[firstCondition];
                    firstSpanSymbol.textContent = firstSymbol;
                    let firstSpanTemp = document.createElement('span');
                    firstSpanTemp.className = 'forecast-data';
                    firstSpanTemp.textContent = `${forecastArr[0].low}/${forecastArr[0].high}`;
                    let firstSpanCondition = document.createElement('span');
                    firstSpanCondition.className = 'forecast-data';
                    firstSpanCondition.textContent = firstCondition;

                    //attach
                    firstUpcomingSpan.appendChild(firstSpanSymbol);
                    firstUpcomingSpan.appendChild(firstSpanTemp);
                    firstUpcomingSpan.appendChild(firstSpanCondition);

                //second day:
                let secondUpcomingSpan = document.createElement('span');
                secondUpcomingSpan.className = 'upcoming';
                    //create inside SPANS for second day
                    let secondSpanSymbol = document.createElement('span');
                    secondSpanSymbol.className = 'symbol';
                    let secondCondition = forecastArr[1].condition;
                    let secondSymbol = symbolsObj[secondCondition];
                    secondSpanSymbol.textContent = secondSymbol;
                    let secondSpanTemp = document.createElement('span');
                    secondSpanTemp.className = 'forecast-data';
                    secondSpanTemp.textContent = `${forecastArr[1].low}/${forecastArr[1].high}`;
                    let secondSpanCondition = document.createElement('span');
                    secondSpanCondition.className = 'forecast-data';
                    secondSpanCondition.textContent = secondCondition;

                    //attach 
                    secondUpcomingSpan.appendChild(secondSpanSymbol);
                    secondUpcomingSpan.appendChild(secondSpanTemp);
                    secondUpcomingSpan.appendChild(secondSpanCondition);

                //third day:
                let thirdUpcomingSpan = document.createElement('span');
                thirdUpcomingSpan.className = 'upcoming';
                    //create inside SPANS for third day
                    let thirdSpanSymbol = document.createElement('span');
                    thirdSpanSymbol.className = 'symbol';
                    let thirdCondition = forecastArr[2].condition;
                    let thirdSymbol = symbolsObj[thirdCondition];
                    thirdSpanSymbol.textContent = thirdSymbol;
                    let thirdSpanTemp = document.createElement('span');
                    thirdSpanTemp.className = 'forecast-data';
                    thirdSpanTemp.textContent = `${forecastArr[2].low}/${forecastArr[2].high}`;
                    let thirdSpanCondition = document.createElement('span');
                    thirdSpanCondition.className = 'forecast-data';
                    thirdSpanCondition.textContent = thirdCondition;

                    //attach
                    thirdUpcomingSpan.appendChild(thirdSpanSymbol);
                    thirdUpcomingSpan.appendChild(thirdSpanTemp);
                    thirdUpcomingSpan.appendChild(thirdSpanCondition);


                //attach all days
                forecastInfoDivElement.appendChild(firstUpcomingSpan);
                forecastInfoDivElement.appendChild(secondUpcomingSpan);
                forecastInfoDivElement.appendChild(thirdUpcomingSpan);

                upcomingDivElement.appendChild(forecastInfoDivElement);
        })
        .catch(err => {
            divElement.style.display = 'block';
            divElement.textContent = 'Error'; 
        })
        

      });
  });
}

attachEvents();
