let url = 'http://localhost:3030/jsonstore/collections/students';

let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  create();

  list();

  function create() {
    let firstName = document.querySelector('input[name="firstName"]');
    let lastName = document.querySelector('input[name="lastName"]');
    let facultyNumber = document.querySelector('input[name="facultyNumber"]');
    let grade = document.querySelector('input[name="grade"]');

    if (
      firstName.value.trim() == '' ||
      lastName.value.trim() == '' ||
      facultyNumber.value.trim() == '' ||
      grade.value.trim() == ''
    ) {
      return;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: Number(grade.value),
      }),
    });


    firstName.value = '';
    lastName.value = '';
    facultyNumber.value = '';
    grade.value = '';
  }

  async function list() {
      let tableBody = document.querySelector('tbody');
 

      while(tableBody.lastChild){
          tableBody.lastChild.remove();
      }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        Object.keys(data).forEach((key) => {
          let tableRow = document.createElement('tr');
          let person = data[key];

          let tdFirstName = document.createElement('td');
          tdFirstName.textContent = person.firstName;

          let tdLastName = document.createElement('td');
          tdLastName.textContent = person.lastName;

          let tdFacNumber = document.createElement('td');
          tdFacNumber.textContent = person.facultyNumber;

          let tdGrade = document.createElement('td');
          tdGrade.textContent = person.grade;

          tableRow.appendChild(tdFirstName);
          tableRow.appendChild(tdLastName);
          tableRow.appendChild(tdFacNumber);
          tableRow.appendChild(tdGrade);

          tableBody.appendChild(tableRow);
        });
      });
  }
});
