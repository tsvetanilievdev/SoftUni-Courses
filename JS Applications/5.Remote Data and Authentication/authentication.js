// Authentication - Working with user Credentials

// Authentication and Authorization

// AUTHENTICATION - КОЙ СИ ТИ? КАК МОЖЕШ ДА ГО ДОКАЖЕШ?
//  - The process of verifying the identity of a user or computer
//  - Questions: "Who are you?", "How you prove it? "
//  - Credentials can be password, smart card, external token, etc.

// AUTHORIZATION - КАКВО МОЖЕШ ДА ПРАВИШ/ВИЖДАШ?
//  - The process of determining what a user is permitted to do on a computer or network
//  - Questions: " What are you allowed to do?", "Can you see this page?"


// Common Authentication Techniques
//  - HTTP Basic Authentication – credentials with every request
//      - Username and password sent in a request header:
/* Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=  */

//  - Cookie – upon login, server returns authentication cookie
//  - Token-based – upon login, server returns signed token
//      - Usually sent in a request header (name varies):
/* Auth-Token: d50d5f194848683ec68d2d0c4595128b146551249… */

//  - Other methods: One Time passwords, Oauth, OpenID, etc.

// REGISTRATION Request
/* <form method="POST" action="/users/register">
  <input type="text" name="email" />
  <input type="password" name="password" />
  <input type="password" name="repass" />
  <input type="submit" value="Register" />
</form>

async function onRegister(ev) {
    const response = await fetch('/users/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ev.formData);
  }
   */

// LOGIN Request
/* 
<form method="POST" action="/users/register">
  <input type="text" name="email" />
  <input type="password" name="password" />
  <input type="submit" value="Register" />
</form>

async function onLogin(ev) {
    const response = await fetch('/users/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ev.formData);
    };
    // handle authentication token
  } */
  

//   Handling Authentication Token
// Upon successful login, the server returns authentication token
//  - This token must be attached to every subsequent request
/* const authToken = response.authToken;
sessionStorage.setItem('authToken', authToken); */

// Save it using sessionStorage:
// Send it in a request header:
/* fetch('/articles', {
    method: 'get',
    headers: { 'X-Authorization': authToken }
};*/

// Data Ownership and Authorization

// Most APIs will RECORD the data's AUTHOR
// - Stored as ownerId, creator or similarly named property
// - Can be used to e.g., identify an article's or comment's author
// Depending on the service's access rules, only the author (and possibly administrators) can modify their records
// Display edit controls for records owned by the current user
// - Note that visibility does not provide security – this is done on the server, using access rules


// Summary
// Data can be sent to the server
// Databases store records with unique keys
// HTML forms group input values
//  - Have submit and formdata events
// Users can be authenticated with the service
//  - Tokens are a common method
