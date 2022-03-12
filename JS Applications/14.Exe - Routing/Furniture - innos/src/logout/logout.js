import { logout } from "../services/auth.js";

export async function logoutAction(context){
    await logout();
    history.replaceState({}, '' , '');
    context.page.redirect('/login');
}