import { createTeam } from "../../services/authService.js";
import { createNewTeamTemplate } from "./createNewTeamTemplate.js";
createTeam
export async function createTeamPage(context){
    const result = createNewTeamTemplate(onSubmit);
    context.renderNav(context.isAuth);
    context.render(result)

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        const name = formData.get('name');
        const logoUrl = formData.get('logoUrl');
        const description = formData.get('description');
    
        if(name.trim() == '' || description.trim() == '' || logoUrl == ''){
            return context.render(createNewTeamTemplate(onSubmit, 'All fields must be completed!'));
        }
    
        try {
          let result = await createTeam(name, logoUrl, description);
          console.log(result);
        //   context.page.redirect('/home');
        } catch (error) {
          return context.render(createNewTeamTemplate(onSubmit, error.message));
        }
      }
}