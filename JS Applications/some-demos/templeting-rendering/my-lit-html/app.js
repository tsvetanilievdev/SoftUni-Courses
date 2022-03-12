import { html, render } from "./node_modules/lit-html/lit-html.js";
import data from "./data.js";
import playerTemplate from "./playerTemp.js";

let rootEl = document.getElementById('root');


let template = (data) => html`
<article>
    ${data.map(x => html`<div>${playerTemplate(x)}</div>`)}
</article>
`

let result = template(data);
console.log(result)
render(result, rootEl)