/* function lockedProfile() {
  //1. Select initial DOM Elements
  let buttons = document.querySelectorAll("#main>.profile>button"); // same syntax

  // Attach event listeners to all buttons
  for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    button.addEventListener("click", () => {
      //Get radio buttons
      let radioButton = document.querySelector(
        `input[name="user${index + 1}Locked"]:checked`
      );

      //Check if button is locked
      if (radioButton.value === "unlock") {
        //Get hidden fields
        let hiddenFieldElement = document.getElementById(
          `user${index + 1}HiddenFields`
        );

        //Toggle hidden field display
        hiddenFieldElement.style.display =
          hiddenFieldElement.style.display === "block" ? "none" : "block";

        button.textContent =
          button.textContent === "Show more" ? "Hide it" : "Show more";
      }
    });
  }
} */

// another solution:
function lockedProfile() {
  let buttonElements = Array.from(document.querySelectorAll('#main .profile button'));
  
  buttonElements.forEach(element => {
    element.addEventListener('click', toogleButton)
  });

  function toogleButton(e){
    //1. get button from event
    let button = e.target;
    //2. get profile from button's parent
    let profile = button.parentElement;
    //3. get radio button
    let radioButton = profile.querySelector('input:checked');
    //4.check if profice is unlock
    if(radioButton.value === 'unlock'){
      //5. get hidden field element
      let hiddenFieldElement = button.previousElementSibling;
      //6.display result in DOM
      hiddenFieldElement.style.display =
          hiddenFieldElement.style.display === "block" ? "none" : "block";

        button.textContent =
          button.textContent === "Show more" ? "Hide it" : "Show more";
    }
  }
}


/*  function lockedProfile() {
  //select elements
  let profilesDivElements = Array.from(document.querySelectorAll(".profile"));

  for (let index = 0; index < profilesDivElements.length; index++) {
    const profile = profilesDivElements[index];
    profile.addEventListener("click", (e) => {
      let result = isLocked(profile);
      let button = profile.querySelector("button");
      let hiddenDiv = profile.querySelector("div");

      button.addEventListener("click", (event) => {
        if (result === false) {
          if (hiddenDiv.style.display === 'block') {
            hiddenDiv.style.display = "none";
            button.textContent = "Show more";
          } else {
            hiddenDiv.style.display = "block";
            button.textContent = "Hide it";
          }
        }
      });
    });
  }

  function isLocked(profile) {
    let profileDiv = profile;
    let lockedInputElements = profileDiv.querySelectorAll("input[type=radio");

    let locked = lockedInputElements[0];

    if (locked.type == "radio") {
      if (locked.checked == true) {
        // is locked
        return true;
      } else {
        //is NOT locked
        return false;
      }
    }
  }
}  */
