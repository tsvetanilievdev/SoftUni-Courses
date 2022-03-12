import { getTeamById, updateTeamById } from '../../services/authService.js';
import { editTeamTemplate } from './editTeamTemplate.js';


export async function editTeamPage(context) {
  const data = await getTeamById(context.params.id);
  const result = editTeamTemplate(data, onSubmit);
  context.renderNav(context.isAuth);
  context.render(result);

  async function onSubmit(event){
      event.preventDefault();
      const formData = new FormData(event.target);

      const name = formData.get('name');
      const logoUrl = formData.get('logoUrl');
      const description = formData.get('description');

      if(name.trim() == '' || logoUrl.trim() == '' || description.trim() == ''){
          return context.render(editTeamTemplate(data, onSubmit, 'All fields must be completed!'))
      }
    
      [...document.querySelectorAll('input')].forEach(x => x.disabled = true);
        try {
            await updateTeamById(context.params.id, {name, logoUrl, description});
            context.page.redirect('/details/' + context.params.id);
        } catch (error) {
            context.render(editTeamTemplate(data, onSubmit, error.message))
        }finally{
            [...document.querySelectorAll('input')].forEach(x => x.disabled = false);
        }

  }
}
