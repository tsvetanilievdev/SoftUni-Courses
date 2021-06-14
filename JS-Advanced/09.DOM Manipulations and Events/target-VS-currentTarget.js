/* EXPLANATION : JS Advanced - DOM Manipulations and Events - май 2021 - Ивайло Папазов 
    видео от 02:30  - https://youtu.be/vuABFmosKE0?t=8930  
    
 - Capture - тръгва отгоре->надолу; отвън->навътре 
 - Target - стигане до event
 - Bubbling - отдолу->нагоре; отвътре->навън;
 - by default -  


 - event.target
 - event.currentTarget    

 Event propagation:


 NEW OFF-TOPIC - WE CAN USE getElement or querySelector over ELEMENT!!!!
*/

let playersList = document.getElementById('players-list');

playersList.addEventListener('click', (e) => {
    console.log(e.currentTarget); // ВИНАГИ ще бъде <ul> (playersList), защото event-а е закачен за него
    console.log(e.target); // ако се цъкне ТОЧНО върху името на играч, target ще бъде <li> с името на играча. Ако не е точно върху имената target ще бъде <ul>;
    console.log(e.target.textContent);// принтира цъкнатия футболист, или всички имена

    if(e.target.tagName == 'LI'){ // спестяване слагането на event на всеки от <li> по отделно; проверяваме дали е <li>, ако е <li> event се изпълнява
        console.log(`event from UL -> ${e.target.tagName}`);
    }else {
        console.log('event from UL');
    }
}/* ,true */); // ако сложим true като трети аргумент, event ще се изпълни в capture фазата, тоест преди LI; capture -> true;


playersList.firstElementChild.addEventListener('click', (e) => { // добавяне на още един event, конкретно и само на първото име

    console.log(`event from LI -> ${e.target.tagName}`); // първо се изпълнява този ред, защото event най-дълбоко в <li>, а след това горния event закачен на <ul>
})