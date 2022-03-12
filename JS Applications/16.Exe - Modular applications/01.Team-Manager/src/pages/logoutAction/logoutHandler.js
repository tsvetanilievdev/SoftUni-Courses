import { logout } from "../../services/authService.js";

export async function logoutHandler(context) {
      await logout();
      history.replaceState({}, '', '');
      context.page.redirect('/login');

}
