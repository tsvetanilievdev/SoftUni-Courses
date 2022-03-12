function attachEvents() {
  showAllMessage();

  //refresh
  let refreshBtn = document.getElementById('refresh');
  refreshBtn.addEventListener('click', showAllMessage);

  let submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', sendMessage);
}

attachEvents();

async function showAllMessage() {
  let textArea = document.getElementById('messages');

  const response = await fetch('http://localhost:3030/jsonstore/messenger');
  const data = await response.json();
  let messages = Object.values(data)
    .map((m) => `${m.author}: ${m.content}`)
    .join('\n');
  textArea.value = messages;
}

async function sendMessage() {
  let author = document.getElementById('author').value;
  let content = document.getElementById('content').value;

  let obj = { author, content };

  let response = await fetch('http://localhost:3030/jsonstore/messenger', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });

  if (response.ok) {
    showAllMessage();
    document.getElementById('author').value = '';
    document.getElementById('content').value = '';
  }
}
