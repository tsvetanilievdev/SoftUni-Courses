import { html, render } from "./node_modules/lit-html/lit-html.js";

let playerTemplate = (player) => html`
<div class="card player" style="width: 18rem;">
   <img src="${player.img}" class="card-img-top" alt="${player.name}'s photo">
   <div class="card-body">
       <h5 class="card-title">${player.name}</h5>
   </div>
   <ul class="list-group list-group-flush">
       <li class="list-group-item">Age: ${player.age}</li>
       <li class="list-group-item">Position: ${player.position}</li>
       <li class="list-group-item">Goals: ${player.goals}</li>
   </ul>
   <div class="card-body">
       <button type="button" ?disabled="${player.suspend}" class="btn btn-warning">Play it!</button>
   </div>
</div>
`;

export default playerTemplate;

