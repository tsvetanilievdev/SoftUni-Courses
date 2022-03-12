import { getAllFurniture } from "../../services/auth.js";
import { dashboardTemplate } from "./dashboardTemplate.js";

export async function dashboardPage(context){
    const data = await getAllFurniture();
    const result = dashboardTemplate(data)
    context.renderMain(result);
}