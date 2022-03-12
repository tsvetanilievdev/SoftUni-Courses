function attachEvents() {
  let baseUri = 'http://localhost:3030/jsonstore/phonebook';

  //select buttons, attach event and handler
  let loadButton = document.getElementById('btnLoad');
  loadButton.addEventListener('click', loadAllPhones);

  let createButton = document.getElementById('btnCreate');
  createButton.addEventListener('click', createNewNumber);

  let ulElement = document.getElementById('phonebook');

  async function loadAllPhones() {
      
    while(ulElement.lastChild){
        ulElement.lastChild.remove()
    }
    await fetch(baseUri).then(res => res.json()).then(data => {

        Object.keys(data).forEach(x => {
            person = data[x];
            let newLi = document.createElement('li');
            newLi.textContent = `${person.person}: ${person.phone}`;

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', (e) => {
                e.currentTarget.previousElementSibling.remove();
                deleteButton.remove();

                fetch(`${baseUri}/${x}`,{
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json', 
                    }
                })
            });

            ulElement.appendChild(newLi);
            ulElement.appendChild(deleteButton);
        })
    })
  }

  async function createNewNumber(){
    let name = document.getElementById('person');
    let phone = document.getElementById('phone');
 
      await fetch(baseUri, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "person": name.value,
            "phone": phone.value
          }
          )
      })

    //   name.textContent = '';
    //   phone.textContent = '';
  }


}

attachEvents();
