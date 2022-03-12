import { getTeamById } from "../../services/authService.js";
import { teamDetailsTemplate } from "./teamDetailsTemplate.js";
import { until } from "../../../node_modules/lit-html/directives/until.js";
import { loaderTemplate } from "../common/loader.js";


export async function detailsPage(ctx){
    
    async function populate(){
        const data = await getTeamById(ctx.params.id);
        return teamDetailsTemplate(data);
    }
    
    ctx.renderNav(ctx.isAuth)
    ctx.render(until(populate(), loaderTemplate()))
}