let buttonGetWeather = document.getElementById('submit');
buttonGetWeather.addEventListener('click', getWeather);

let symbolsObj = {
  Sunny: '☀',
  'Partly sunny': '⛅',
  Overcast: '☁',
  Rain: '☂',
  Degrees: '°',
};

async function getWeather() {
  let inputLocation = document.getElementById('location');
  let location = inputLocation.value;

  if (location.trim() === '') {
      throw new Error('Input cannot be EMPTY');
    return;
  }

  let url = 'http://localhost:3030/jsonstore/forecaster/locations';

  let response = await fetch(url);
  let data = await response.json();

  let city = data.find((x) => x.name == location);

  if (city !== undefined) {
    let today = await getToday(city);
    let upcoming = await getThreeDay(city);

    let divForecaster = document.getElementById('forecast');
    divForecaster.style.display = '';

    renderToday(today);
    renderUpcoming(upcoming);

  } else {
    throw new Error(`No data for that location:${location}`);
  }
}

async function getToday(city) {
  let urlToday = `http://localhost:3030/jsonstore/forecaster/today/${city.code}`;
  let todayRes = await fetch(urlToday);
  let todayData = await todayRes.json();

  return todayData;
}


function renderToday(todayData){

    let divCurrent = document.getElementById('current');
    divCurrent.querySelectorAll('.forecasts').forEach(x => x.remove());

    let divFore = createHtmlElement('div', {class: 'forecasts'},
        createHtmlElement('span', {class: 'condition symbol'}, symbolsObj[todayData.forecast.condition]),
        createHtmlElement('span', {class: 'condition'}, 
            createHtmlElement('span', {class: 'forecast-data'},todayData.name),
            createHtmlElement('span', {class: 'forecast-data'},`${todayData.forecast.low}°/${todayData.forecast.high}°`),
            createHtmlElement('span', {class: 'forecast-data'},todayData.forecast.condition)));
    
    divCurrent.appendChild(divFore);
}

function renderUpcoming(upcomingData){

    let divUpcoming = document.getElementById('upcoming');
    divUpcoming.querySelectorAll('.forecast-info').forEach(x => x.remove());
    let divUpco = createHtmlElement('span', {class: 'forecast-info'}, 
        createHtmlElement('span', {class: 'upcoming'}, 
            createHtmlElement('span', {class: 'symbol'},symbolsObj[upcomingData.forecast[0].condition]),
            createHtmlElement('span', {class: 'forecast-data'},`${upcomingData.forecast[0].low}°/${upcomingData.forecast[0].high}°`),
            createHtmlElement('span', {class: 'forecast-data'},upcomingData.forecast[0].condition)),
        createHtmlElement('span', {class: 'upcoming'}, 
            createHtmlElement('span', {class: 'symbol'},symbolsObj[upcomingData.forecast[1].condition]),
            createHtmlElement('span', {class: 'forecast-data'},`${upcomingData.forecast[1].low}°/${upcomingData.forecast[1].high}°`),
            createHtmlElement('span', {class: 'forecast-data'},upcomingData.forecast[1].condition)),
        createHtmlElement('span', {class: 'upcoming'}, 
            createHtmlElement('span', {class: 'symbol'},symbolsObj[upcomingData.forecast[2].condition]),
            createHtmlElement('span', {class: 'forecast-data'},`${upcomingData.forecast[2].low}°/${upcomingData.forecast[2].high}°`),
            createHtmlElement('span', {class: 'forecast-data'},upcomingData.forecast[2].condition)),
        )
        
    divUpcoming.appendChild(divUpco);
}

async function getThreeDay(city) {
  let urlThreeDay = `http://localhost:3030/jsonstore/forecaster/upcoming/${city.code}`;
  let threeDayRes = await fetch(urlThreeDay);
  let threeDayData = await threeDayRes.json();
  return threeDayData;
}

function createHtmlElement(tag, attributes, ...params) {
  let element = document.createElement(tag);
  let firstValue = params[0];

  if (params.length === 1 && typeof firstValue !== 'object') {
    if (['input', 'textarea'].includes(tag)) {
      element.value = firstValue;
    } else {
      element.textContent = firstValue;
    }
  } else {
    element.append(...params);
  }

  if (attributes !== undefined) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key]);
    });
  }

  return element;
}
