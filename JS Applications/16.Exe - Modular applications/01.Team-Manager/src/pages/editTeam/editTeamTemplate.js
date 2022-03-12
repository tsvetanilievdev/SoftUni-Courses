import { html } from '../../../node_modules/lit-html/lit-html.js';

export const editTeamTemplate = (team, onSubmit, errorMessage) => html`
  <section id="edit">
    <article class="narrow">
      <header class="pad-med">
        <h1>Edit Team</h1>
      </header>
      <form @submit="${onSubmit}" id="edit-form" class="main-form pad-large">
        ${errorMessage ? html`<div class="error">${errorMessage}</div>` : ''}
        <label
          >Team name: <input type="text" name="name" .value=${team.name}
        /></label>
        <label
          >Logo URL: <input type="text" name="logoUrl" .value=${team.logoUrl}
        /></label>
        <label
          >Description:
          <textarea name="description" .value=${team.description}></textarea>
        </label>
        <input class="action cta" type="submit" value="Save Changes" />
      </form>
    </article>
  </section>
`;
