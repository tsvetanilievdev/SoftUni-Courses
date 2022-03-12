import { html } from '../../node_modules/lit-html/lit-html.js';
import { ifDefined } from '../../node_modules/lit-html/directives/if-defined.js';


export const navTemplate = (isLogged, pathname) => html`
  <h1><a href="/dashboard">Furniture Store</a></h1>
  <nav>
    <a href="/dashboard" class="${ifDefined(pathname.startsWith('/dashboard') ? 'active' : '')}">Dashboard</a>
    ${isLogged ? 
      html`<div id="user">
        <a href="/create" class="${ifDefined(pathname.startsWith('/create') ? 'active' : '')}">Create Furniture</a>
        <a href="/my-furniture" class="${ifDefined(pathname.startsWith('/my-furniture') ? 'active' : '')}">My Furniture</a>
        <a href="/logout" >Logout</a>
      </div>`
     
    : 
      html`<div id="guest">
        <a href="/login" class="${ifDefined(pathname.startsWith('/login') ? 'active' : '')}">Login</a>
        <a href="/register" class="${ifDefined(pathname.startsWith('/register') ? 'active' : '')}">Register</a>
      </div>`
    }
  </nav>
`;
