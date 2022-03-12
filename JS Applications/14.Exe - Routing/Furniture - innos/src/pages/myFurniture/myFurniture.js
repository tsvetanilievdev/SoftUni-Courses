import { getMyFurniture } from "../../services/auth.js";
import { myFurnitureTemplate } from "./myFurnitureTemplate.js";

export async function myFurniturePage(context){
    const userId = sessionStorage.getItem('userId');
    const myFurniture = await getMyFurniture(userId);
    const result = myFurnitureTemplate(myFurniture);
    context.renderMain(result);
}