function lockedProfile() {
  let mainDiv = document.getElementById('main');
  fetch('http://localhost:3030/jsonstore/advanced/profiles')
    .then((res) => res.json())
    .then((data) => {
      console.log(Object.values(data));

      Object.values(data).forEach((p) => {
        let div = document.createElement('div');

        div.classList.add('profile');

        let imgEl = document.createElement('img');
        imgEl.src = './iconProfile2.png';
        imgEl.classList.add('userIcon');

        let labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';

        let inputLock = document.createElement('input');
        inputLock.type = 'radio';
        inputLock.name = `user${p._id}Locked`;
        inputLock.value = 'lock';
        inputLock.checked = true;

        let labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';

        let inputUnlock = document.createElement('input');
        inputUnlock.type = 'radio';
        inputUnlock.name = `user${p._id}Locked`;
        inputUnlock.value = 'Unlock';

        let hr = document.createElement('hr');

        let labelUsername = document.createElement('label');
        labelUsername.textContent = 'Username';

        let inputUsernmame = document.createElement('input');
        inputUsernmame.type = 'text';
        inputUsernmame.name = `user${p._id}Username`;
        inputUsernmame.value = p.username;
        inputUsernmame.disabled = true;
        inputUsernmame.readOnly = true;

        //to store all hidden info into that div....
        let divHidden = document.createElement('div');
        divHidden.style.display = 'none';
        divHidden.id = `user${p._id}HiddenFields`;

        let labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';

        let inputEmail = document.createElement('input');
        inputEmail.type = 'email';
        inputEmail.name = `user${p._id}Email`;
        inputEmail.value = p.email;
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        let labelAge = document.createElement('label');
        labelAge.textContent = 'Age:';

        let inputAge = document.createElement('input');
        inputAge.type = 'Age';
        inputAge.name = `user${p._id}Age`;
        inputAge.value = p.age;
        inputAge.disabled = true;
        inputAge.readOnly = true;

        let buttonElement = document.createElement('button');
        buttonElement.textContent = 'Show more';
        buttonElement.addEventListener('click', (event) => {
          let profile = event.target.parentElement;
          let checkedInput = profile.querySelector('input');

          if (checkedInput.checked == false) {
            buttonElement.textContent == 'Show more'
              ? (buttonElement.textContent = 'Hide')
              : (buttonElement.textContent = 'Show more');
            divHidden.style.display == 'none'
              ? (divHidden.style.display = 'block')
              : (divHidden.style.display = 'none');
          }
          console.log(checkedInput.checked);
        });

        divHidden.appendChild(labelEmail);
        divHidden.appendChild(inputEmail);
        divHidden.appendChild(labelAge);
        divHidden.appendChild(inputAge);

        div.appendChild(imgEl);
        div.appendChild(labelLock);
        div.appendChild(inputLock);
        div.appendChild(labelUnlock);
        div.appendChild(inputUnlock);
        div.appendChild(hr);
        div.appendChild(labelUsername);
        div.appendChild(inputUsernmame);

        div.appendChild(divHidden);
        div.appendChild(buttonElement);
        mainDiv.appendChild(div);
      });
    });
}
/* <div class="profile">
				<div id="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="" disabled readonly />
				</div>
				<button>Show more</button>
			</div> */
