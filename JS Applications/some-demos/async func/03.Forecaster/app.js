let symbols = {
  Sunny: '☀',
  'Partly sunny': '⛅',
  Overcast: '☁',
  Rain: '☂',
  Degrees: '°',
};

let button = document.getElementById('submit');
let inputElement = document.getElementById('location');
let currConditionDiv = document.getElementById('current');
let upcConditionDiv = document.getElementById('upcoming');

button.addEventListener('click', () => {
  fetch('http://localhost:3030/jsonstore/forecaster/locations')
    .then((res) => res.json())
    .then((data) => {
      let cityObj = data.find(
        (city) => city.name.toLowerCase() == inputElement.value.toLowerCase()
      );

      if (cityObj == undefined) {
        throw new Error(alert('Error!'));
      }

      console.log(cityObj);
      //clear old data:
      currConditionDiv.querySelectorAll('span').forEach((x) => x.remove());
      upcConditionDiv
        .querySelectorAll('.forecast-info')
        .forEach((x) => x.remove());
      //show forecastDiv:
      document.getElementById('forecast').style.display = 'block';

      // 1. create fetch curr forecast
      fetch('http://localhost:3030/jsonstore/forecaster/today/' + cityObj.code)
        .then((res) => res.json())
        .then((data) => {
          let spanSymbol = document.createElement('span');
          spanSymbol.classList.add('condition', 'symbol');
          spanSymbol.textContent = symbols[data.forecast.condition];

          let spanCurr = document.createElement('span');
          spanCurr.classList.add('condition');
          let spanName = document.createElement('span');
          spanName.textContent = data.name;
          let spanDegrees = document.createElement('span');
          spanDegrees.classList.add('forecast-data');
          spanDegrees.textContent = `${data.forecast.low}°/${data.forecast.high}°`;
          let spanCond = document.createElement('span');
          spanCond.classList.add('forecast-data');
          spanCond.textContent = data.forecast.condition;

          spanCurr.appendChild(spanName);
          spanCurr.appendChild(spanDegrees);
          spanCurr.appendChild(spanCond);

          currConditionDiv.appendChild(spanSymbol);
          currConditionDiv.appendChild(spanCurr);
        inputElement.value = '';

        });

      // 2. create fetch upcoming forecasts
      fetch(
        'http://localhost:3030/jsonstore/forecaster/upcoming/' + cityObj.code
      )
        .then((res) => res.json())
        .then((data) => {
          let divForecastInfo = document.createElement('div');
          divForecastInfo.classList.add('forecast-info');

          data.forecast.forEach((day) => {
            console.log(day);
            let mainUpcomingDiv = document.createElement('div');
            mainUpcomingDiv.classList.add('upcoming');

            let spanSymbol = document.createElement('span');
            spanSymbol.classList.add('symbol');
            spanSymbol.textContent = symbols[day.condition];

            let spanDegrees = document.createElement('span');
            spanDegrees.classList.add('forecast-data');
            spanDegrees.textContent = `${day.low}°/${day.high}°`;

            let spanCond = document.createElement('span');
            spanCond.classList.add('forecast-data');
            spanCond.textContent = day.condition;

            mainUpcomingDiv.appendChild(spanSymbol);
            mainUpcomingDiv.appendChild(spanDegrees);
            mainUpcomingDiv.appendChild(spanCond);

            divForecastInfo.appendChild(mainUpcomingDiv);
            upcConditionDiv.appendChild(divForecastInfo);
          });
          inputElement.value = '';
        });

    })
    .catch((err) => {
      currConditionDiv.querySelectorAll('span').forEach((x) => x.remove());
      upcConditionDiv
        .querySelectorAll('.forecast-info')
        .forEach((x) => x.remove());

        inputElement.value = '';
    });
});
