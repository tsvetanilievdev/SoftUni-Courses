function attachEvents() {
  let refreshBtn = document.getElementById('refresh');
  refreshBtn.addEventListener('click', getAllMesseges);

  let sendBtn = document.getElementById('submit');
  sendBtn.addEventListener('click', submitMessage);

  let textAreaMessages = document.getElementById('messages');

  let url = 'http://localhost:3030/jsonstore/messenger';

  async function getAllMesseges() {
    let response = await fetch(url);
    let data = await response.json();

    textAreaMessages.value = '';
    Object.values(data).forEach((x) => {
      textAreaMessages.value += `${x.author}: ${x.content}\n`;
    });
  }

  async function submitMessage() {
    let nameInput = document.querySelector('input[name="author"]');
    let contentInput = document.querySelector('input[name="content"]');

    if(nameInput.value.trim() == '' || contentInput.value.trim() == ''){
        throw new Error('All fields must be filled!');
    }

    let response = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            author: nameInput.value,
            content: contentInput.value
        })
    })

    await getAllMesseges()

  }
}

attachEvents();
