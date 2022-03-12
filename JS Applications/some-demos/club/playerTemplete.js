import { html } from "./node_modules/lit-html/lit-html.js"

export const playerTemplete = (player) => html`
<img src="${player.img}">
<h4 class="${player.suspend ? 'sus' : ''}">Player's name: ${player.name}</h4>
<p>He is ${player.age} years old. Playing as ${player.position} at ${player.club}. Scored at least ${player.goals} per season.</p>
<button ?disabled=${player.suspend}>Play it!</button>`


/*  {
      name: 'Tsvetan Iliev',
      age: 31,
      position: 'midfielder',
      goals: 22,
      suspend: false,
      img: 'https://scontent.fsof10-1.fna.fbcdn.net/v/t1.6435-9/221408643_10217295341129517_3226428516961071333_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=OUg_H24tuLAAX8ysRGL&_nc_oc=AQnvWZ2_KPIsdti75SV7zTvtk2hrRDaPFsD-KetlQpC_LCxCMfwQEyEOVYuxY5rbB8M&_nc_ht=scontent.fsof10-1.fna&oh=f8a02e0b0a47bf871d913b292bd5fe1f&oe=61271DB5',
    }, */