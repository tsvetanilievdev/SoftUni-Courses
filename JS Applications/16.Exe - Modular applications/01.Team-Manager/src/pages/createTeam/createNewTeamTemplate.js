import { html } from '../../../node_modules/lit-html/lit-html.js';

export const createNewTeamTemplate = (onSubmit, errorMessage) => html`
  <section id="create">
    <article class="narrow">
      <header class="pad-med">
        <h1>New Team</h1>
      </header>
      <form @submit=${onSubmit} id="create-form" class="main-form pad-large">
      ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
        <label>Team name: <input type="text" name="name" /></label>
        <label>Logo URL: <input type="text" name="logoUrl" /></label>
        <label>Description: <textarea name="description"></textarea></label>
        <input class="action cta" type="submit" value="Create Team" />
      </form>
    </article>
  </section>
`;
