import { createPost } from '../api/data.js';
import { input } from '../common/input.js';
import { html } from '../lib.js';
import { createSubmtiHandler } from '../util.js';

const CreateTemplate = (onSubmit, errMsg, errors, values) => html` <section
  id="create"
>
  <div class="">
    <header><h1>Create New Topic</h1></header>
    <form @submit=${onSubmit}>
      ${errMsg ? html`<p class="error-msg">${errMsg}</p>` : null}
      ${input('Topic Title', 'text', 'title', values.title, errors.title)}
      ${input(
        'Topic Title',
        'textarea',
        'content',
        values.content,
        errors.content
      )}
      <div class="center">
        <input class="action" type="submit" value="Publish topic" />
      </div>
    </form>
  </div>
</section>`;

export function CreatePage(context) {
  update();

  function update(errMsg = '', errors = {}, values = {}) {
    context.render(
      CreateTemplate(
        createSubmtiHandler(onSubmit, 'title', 'content'),
        errMsg,
        errors,
        values
      )
    );
  }

  async function onSubmit(data) {
    try {
      const missing = Object.entries(data).filter(([k,v]) => v == '');
      if(missing.length > 0){
        const errors = missing.reduce((a, [k,v]) => Object.assign(a,{[k]: true}), {});
        throw {
          error: new Error('All fields are required!'),
          errors
        }
      }

      const result = await createPost(data);
      console.log(result);
      context.page.redirect('/topics/' + result._id);
    } catch (error) {
      const message = error.message || error.error.message;
        update(message,error.errors, data)
    }

    
  }
}
