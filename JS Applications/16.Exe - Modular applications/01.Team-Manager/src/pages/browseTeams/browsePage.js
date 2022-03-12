import { getAllMembers, getAllTeams } from "../../services/authService.js";
import { browseTeamTemplate } from "./browseTeamTemplate.js";

export async function browsePage(ctx){
    const data = await getAllTeams();
    console.log(data);
    const members = await getAllMembers();
    console.log(members);
    ctx.renderNav(ctx.isAuth);
    ctx.render(browseTeamTemplate(data, ctx.isAuth));
}