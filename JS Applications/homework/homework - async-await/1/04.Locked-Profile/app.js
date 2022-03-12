function lockedProfile() {
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';
    let mainDiv = document.getElementById('main');
    deleteChildren(mainDiv); //delete the empty profile

    fetch(url)
        .then(r => r.json())
        .then(json => {
            let i = 1;
            for (const key in json) {
                let profileDiv = createProfile(json[key], i);
                i++;

                mainDiv.appendChild(profileDiv);
            }
        })
        .then(() => {
            let buttons = Array.from(document.querySelectorAll('button'));
            for (const button of buttons) {
                button.addEventListener('click', switchState);
            }
        });

    function switchState(event) {
        let profile = event.target.parentNode;
        let state = profile.querySelector(`input[name=user${profile.number}Locked]:checked`).value;
        let hidableDiv = profile.querySelector('div');

        if (state === 'lock') {
            return;
        }

        if (event.currentTarget.textContent === 'Show more') {
            event.currentTarget.textContent = 'Hide it';
            hidableDiv.style.display = 'inline-block';
        }
        else {
            event.currentTarget.textContent = 'Show more';
            hidableDiv.style.display = 'none';
        }
    }

    function createProfile(profile, num) {
        let div = document.createElement('div');
        div.classList.add('profile');

        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');

        let label1 = document.createElement('label');
        label1.textContent = 'Lock';

        let input1 = document.createElement('input');
        input1.type = 'radio';
        input1.name = `user${num}Locked`;
        input1.value = 'lock';
        input1.checked = true;

        let label2 = document.createElement('label');
        label2.textContent = 'Unlock';

        let input2 = document.createElement('input');
        input2.type = 'radio';
        input2.name = `user${num}Locked`;
        input2.value = 'unlock';

        let hr = document.createElement('hr');

        let label3 = document.createElement('label');
        label3.textContent = 'Username';

        let input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = `user${num}Username`;
        input3.value = profile.username;
        input3.disabled = true;
        input3.readOnly = true;

        let innerDiv = document.createElement('div');
        innerDiv.id = `user${num}HiddenFields`;

        let hr2 = document.createElement('hr');

        let innerLabel1 = document.createElement('label');
        innerLabel1.textContent = 'Email: ';

        let innerInput1 = document.createElement('input');
        innerInput1.type = 'email';
        innerInput1.name = `user${num}Email`;
        innerInput1.value = profile.email;
        innerInput1.disabled = true;
        innerInput1.readOnly = true;

        let innerLabel2 = document.createElement('label');
        innerLabel2.textContent = 'Age: ';

        let innerInput2 = document.createElement('input');
        innerInput2.type = 'email';
        innerInput2.name = `user${num}Age`;
        innerInput2.value = profile.age;
        innerInput2.disabled = true;
        innerInput2.readOnly = true;

        let button = document.createElement('button');
        button.textContent = 'Show more';

        div.appendChild(img);
        div.appendChild(label1);
        div.appendChild(input1);
        div.appendChild(label2);
        div.appendChild(input2);
        div.appendChild(hr);
        div.appendChild(label3);
        div.appendChild(input3);
        div.appendChild(innerDiv);

        innerDiv.appendChild(hr2);
        innerDiv.appendChild(innerLabel1);
        innerDiv.appendChild(innerInput1);
        innerDiv.appendChild(innerLabel2);
        innerDiv.appendChild(innerInput2);

        div.appendChild(button);

        div.number = num; //for eeasier radio button querying

        return div;
    }

    function deleteChildren(element) {
        Array.from(element.childNodes)
            .forEach(x => x.remove());
    }
}