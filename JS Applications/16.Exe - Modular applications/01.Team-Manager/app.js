import page from './node_modules/page/page.mjs';
import { decorateContext } from './src/contextDecorator/contextDecorator.js';
import { browsePage } from './src/pages/browseTeams/browsePage.js';
import { createTeamPage } from './src/pages/createTeam/createTeamPage.js';
import { editTeamPage } from './src/pages/editTeam/editTeamPage.js';
import { homePage } from './src/pages/home/homePage.js';
import { loginPage } from './src/pages/login/loginPage.js';
import { logoutHandler } from './src/pages/logoutAction/logoutHandler.js';
import { registerPage } from './src/pages/register/registerPage.js';
import { detailsPage } from './src/pages/teamDetails/detailsPage.js';

import api from './src/services/authService.js'
window.api = api;
//decorating context
page(decorateContext)

//page redirects
page.redirect('/', '/home');
page.redirect('/index.html', '/home');

//routes
page('/home', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/browse-teams', browsePage);
page('/details/:id', detailsPage);
page('/create-team', createTeamPage);
page('/logout', logoutHandler)
page('/edit/:id', editTeamPage)
//page.start()
page.start()


//TODO --> all TeamDetails Logig and requests