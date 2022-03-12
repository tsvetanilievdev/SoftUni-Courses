import { html } from '../../node_modules/lit-html/lit-html.js';

const userButtons = () => html`
  <a href="/my-teams" class="action">My Teams</a>
  <a id="logoutButton" href="/logout" class="action">Logout</a>
`;

const guestButtons = () => html`
  <a href="/login" class="action">Login</a>
  <a href="/register" class="action">Register</a>
`;

export const navigationTemplate = (isLogged) => html`<a href="/home" class="site-logo"
    >Team Manager</a
  >
  <nav>
    <a href="/browse-teams" class="action">Browse Teams</a>
    ${isLogged ? userButtons() : guestButtons()}
  </nav>`;
