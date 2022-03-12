import * as api from './api/data.js';
import {page} from './lib.js'
window.api = api;

page('/', () => console.log('home'));
page('/create', () => console.log('create'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
page('/my-profile', () => console.log('my-profile'));
page('/details/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edit'));
page.start()
