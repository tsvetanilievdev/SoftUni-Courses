import data from './data.js';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { playerTemplete } from './playerTemplete.js';
import page from './node_modules/page/page.mjs'



const body = document.body;
const container = document.getElementById('container');

let result = [];
let uniqueClubNamesArr = Array.from(new Set(data.map(x => x.club)));

const navTemp = (allData) => html`<nav>${allData.map(x => html`<a href="${textFormetter(x)}">${x}</a>`)}</nav>`;
result.push(navTemp(uniqueClubNamesArr));

const templete = (allData) => html`
  <div>
    <h2>All players in you club</h2>
    ${allData.map((x) => html`<div class="player">${playerTemplete(x)}</div>`)}
  </div>
`;

result.push(templete(data));
render(result, body);

function textFormetter(title){
  return title.replace(/ /g, '-').toLowerCase();
}

function displayPlayersByClub(ctx){
  console.log(ctx.params.club)
  let club = ctx.params.club.replace(/-/g, ' ');
  let arr = data.filter(x => x.club.toLocaleLowerCase() === club.toLocaleLowerCase());
  let result = html`<ul>
    ${arr.map(p => html`<li>${p.name}</li>`)}
  </ul>`
  render(result, document.body)
}

page('/:club', displayPlayersByClub);
page.start()