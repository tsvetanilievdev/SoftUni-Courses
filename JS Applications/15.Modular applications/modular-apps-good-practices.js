// Modular Applications
// Common Scenarios and Best Practices

//COMPONENT APPROACH  
//  - Components are a common theme among contemporary frameworks and libraires
//  - Focused on separation of concerns and composability: - да се концентрираме върху разделението на отговорностите и ние да ги композираме, като едно цяло
//      - Combine presentation, style and business logic in a single unit 
//      - Encapsulate state and control - енкапсулиране-да ги саберем на едно място и да ги изолираме от външния свят; състояние - нещата, които подлежат на промяна по време на изпълнение приложението
// (като цяло и обектите в реалния живот,те имат property-свойства-които НЕ се променят и state-състояние-нещата които СЕ променят)
// Напр. СВОЙТСТВАТА на един HTML са неговата структура(<article><header><a></a></header></article>), стил, а СЪСТОЯНИЕ e <button>Show More</button>, който включва и изключва нещо да се вижда
//      - Expose only necessary interfaces - правим видими  само нужните методи, променливи
//      - Decoupled from the environment (via dependency injection) -  компонента да не зависи и от състоянието на цялостното приложение и от външни ресурси
//          - dependency injection - вместо директно за импортваме нещо, чакаме то да дойде като променлива; този който вика компонента му подава тази променлива, дефакто горния компонент контролира долният!!!!
//          - пример от Furniture Store: всяко от нашите view-та приемаше една променлива context, която съдържаше render и setUserNav; context-а компонента не го импортира самичък, а чака да му бъде подаден;
//      - Highly composable with other components - може да композира с други компоненти(модули)
// Обикновено имаме една папка с един js файл, един css файл и няколко други(js, html, json), които основният файл импортва
// Цялото нещо го консумираме като ОТДЕЛНА библиотека
// Идеята, че когато искаме да променяме нещо, ще се наложи да пипаме и по трите неща - стил, html, бизнес логика


// ПРИМЕР
import { login } from '../api/data.js';
import { html } from './../../node_modules/lit-html/lit-html.js';
/* 1. Презентационен слой(presentation layer или view layer или НЕГОВИЯТ HTML) */
const loginTemplate = (onSubmit, errorMessage) => html`<div class="row space-top">
<div class="col-md-12">
    <h1>Login User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmit}>
<div class="row space-top">
    ${errorMessage ? html`<div class="col-md-4"><p>${errorMessage}</p></div>` : ''}

    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
    </div>
</div>
</form>`/* 1 */

/* 2 - Логиката(бизнес логика, модел-защого работи с някакви данни, имаме управлението на презентационния слой) */
export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
    
        const email = form.get('email');
        const password = form.get('password');
    
        if (email.trim() == '' || password.trim() == '') {
          return ctx.render(loginTemplate(onSubmit,'All fields must be filled in!',email.trim() == '',password.trim() == ''));
        }
    
        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
      }
}
/* 2 */

// 1 и 2 са едно място, и ако има някаква промяна ще се осъществи доста по бързо!
// В целият файл експортваме само едно нещо function loginPage(ctx)
// В случая ctx e DEPENDENCY INJECTION, вместо този компонент за си импортва от някъде рутера, за използва redirect и да си импортва от някъде render или onSubmit
// му ги подаваме отвън, което означава че бихме го използва ли и на друго място с малки адаптации!


// // APPLICATION STATE - цялостно състояние на приложението
// Avoid storing state in the DOM - ЛОША ПРАКТИКА! избягване съхранение на състоянието в DOM елементите, 
// напр. if(style.diplay == 'block) {style.display = 'none'} контролиране на видимостта на елемент -  да НЕ разчитаме, че style.display ще ни пази информацита, защото може да бъде премахното като атрибут и нашите проверки ще изгърмят - това е пример за измаждане на състояние от DOM
// Така че подобно състояние трябва да се пази в променлива дали в closure или global state
// Avoid attempting to infer state from the DOM - бизнес логиката да не разчита на данни за състоянието съхранени в DOM 
//  - E.g., using the text content of an HTML element to reconstruct what a database record looked like - ЛОША ПРАКТИКА - но <input type="hidden" id="...."> или data-id --> element.dataset.id, това е ОК
// напр. като се цъкне бутон Edit,  ние да се опитаме от textContent на страницата да реконстроираме обекта който е дошъл от базата;
// Ако искаме да си спестим втората заявка, просто ще го пазим в cache или в closure
// Try to write DECLARATIVE DOM logic:
//  - Describe what the DOM should look like for a given state - описваме как трябва да изглежда DOM за различните състояния; render DOM спрямо STATE на приложението!
//  - When the state CHANGES, the DOM FOLLOWS - в момента в който състоянието се промени, изграждаме целия DOM отново!
//  - Rendering libraries allow for efficient DOM redraws - библиотеките го правят много ефективно



// ROUTING
// Attempt to couple application content with the URL route - да обвържем съдържанието на приложението с нашия url, при copy-paste на линк да се отваря едно и също съдържание
//  - This allows more efficient use of browser history and sharing links to specific parts of the application
//  - Can be done with paths, query parameters or fragments
// Examples:
//  - Search terms should be included as query parameters
//  - If a catalog is paginated, include the current page in the URL
//  - Toggleable content or sub-navigation can also be included


// ACTION FEEDBACK
// Provide INSTANT acknowledgement for user actions:
//  - Change appearance when links and buttons are clicked
//  - Clear the view on navigation
//  - Show loading indicators during network requests
//  - Disable input during requests, to PREVENT double submission
// Don't overdo feedback:
//  - Don't attempt to validate input before the user has finished
//  - There's no need to show notifications for everything


// User Input
// Always sanitize user input:
//  - Remove leading and trailing whitespace
//  - Do not automatically include all form data in the request – only pick the properties that are part of the collection
//  - Prevent insertion of HTML anywhere in your code
//  - Never use eval where user input is involved
// Remember that the front-end application does not provide security – the server must double check all user actions



// Error Handling
// Always anticipate errors from network requests and user input
// Errors that can be resolved automatically can be handled behind the scenes
//  - You can catch them where they occur
//  - E.g., data parsing errors, empty server responses, etc.
// Errors that concern user action must be propagated to the presentation layer of the app (rethrow, or don't catch)
//  - E.g., validation errors
