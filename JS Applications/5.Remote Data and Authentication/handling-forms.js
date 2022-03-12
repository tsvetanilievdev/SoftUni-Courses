// Handling Forms - Grouping Related Request Values

// HTML Form Standard
//  - The <form> element groups many <input> fields
//      - Attribute method specifies which HTTP method to use
//      - Attribute action specifies to which URL the requests is sent

/* <form method="POST" action="/articles">
  <input type="text" name="title" />
  <textarea name="content"></textarea>
  <input type="submit" value="Create Article" />
</form> */

//  - On submit, the browser sends all values to the server
//      - Every input is identified by its name attribute


// Handling Submit Request
//  - Browser form submission causes the page to reload
//      - Our application will be closed or restarted

const formElement = document.querySelector('form');
formElement.addEventListener('submit', event => {
  event.preventDefault();
  // collect values and send via fetch
});

//  - The submit event can be intercepted
//  - A fetch request can be made using the input values


// Working with FormData
//  - The FormData object automatically serializes all input values
//      - No need to select them manually

formElement.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(formElement);
    const email = data.get('email');     // Read single value of name='email'
    const entries = [...data.entries()]; // Get array of values
  });

  
  // Има два варианта след като е попълнена дадена Form:
  // 1. Данните да се изпратят на отдалеченч сървар, да ги обработи и той да се справи с тях
  // 2. JS да ги прихване 'submit'(form), и да ги изпрати по начин по който JS си решава