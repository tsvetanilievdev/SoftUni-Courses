// SPA Approaches - Creating a Single Page Application

//SPA Implementation Requirements:
// - The application has MULTIPLE views !!!
// - All views share a common state
// - Modular code is used
// - The page is not reloaded when changing views
// - Content is loaded via AJAX
// - New content is created by JavaScript!!!


//Feasibility Disclaimer:
// - Contemporary single-page applications employ concepts like templates and routing:
// -     Usually with a front-end framework
// - These topics will be covered in upcoming lessons
// - The following approach aims to demonstrate the BASIC principles and is applicable only for small apps
// - Consider it for educational purposes only!


//Initial Static Content:
//  - The HTML template holds all views as hidden sections
//  - Modules are responsible for populating and displaying views
//  - Sections can be controlled by reference or by visibility
//  - Dynamic content is loaded via AJAX calls


//Modular Code:
//  - Each view is controlled by its own module
//  - Contains code for fetching and displaying related content
//  - A single script serves as the application entry point
//  - Imports and initializes the rest of the modules
//  - Holds and manages shared (global) state

//                  app.js
// import homePage from './home.js';
// import catalogPage from './catalog.js';
// Load and initialize all modules


//Capturing Navigation:
//  - Anchor tags instruct the browser to navigate to a new page
//      - This will restart our application
//  - A click handler can be used to prevent this:

/*  const navLink = document.getElementById('navLink');
    navLink.addEventLister('click', e => {
      e.preventDefault();
      // Load new content and switch the view
    });     */
//  - View changes can then be triggered from <a> elements


//Loading and Displaying Content:
//  - Use the Fetch API to bring new content from the server:

 /* async function getArticles() {
    const response = await fetch(apiUrl);
    const articles = await response.json();
    articles.forEach(displayArticle);
}   */

//  - Modify or create new HTML elements to display content:

 /* function displayArticle(article) {
    // Modify DOM tree
  }   */


//Group DOM Changes:
// - Manipulating the DOM tree is a performance-intensive process
// - When multiple elements must be created and populated, place them in a DocumentFragment:
/*
const fragment = document.createDocumentFragment();
// Create and populate new elements
fragment.appendChild( element reference );
document.body.appendChild(fragment); // Add to body
 */


// Summary:
// - A Web Application is a software accessibleusing a web browser
//  - NOT the same as a web site
// - Code can be split and reused with modules
// - A Single Page Application (SPA) operates WITHOUT reloading the page
