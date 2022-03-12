function attachEvents() {
  let uri = 'http://localhost:3030/jsonstore/messenger';

  //select buttons, attach event and handler
  let submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', sendData);

  let refreshButton = document.getElementById('refresh');
  refreshButton.addEventListener('click', showAllMesseges);
  
  let textareaElement = document.getElementById('messages');
  
  function sendData() {
    //select input elements and get data
    let inputAuthor = document.querySelector('input[name="author"]');
    let inputContent = document.querySelector('input[name="content"]');

    fetch(uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author: inputAuthor.value,
        content: inputContent.value,
      }),
    }).then(res => res.json()).then( message => {
        textareaElement.value += `${message.author}: ${message.content}\n`
    })

    //reset input fields
    inputAuthor.value = '';
    inputContent.value = '';
  }

  function showAllMesseges() {
    //reset data
    textareaElement.textContent = '';
    fetch(uri)
      .then((res) => res.json())
      .then((allMesseges) => {
        Object.keys(allMesseges).forEach((key) => {
          let newLineText = `${allMesseges[key].author}: ${allMesseges[key].content}\n`;
          textareaElement.value += newLineText;
        });
      });
  }
}

attachEvents();
