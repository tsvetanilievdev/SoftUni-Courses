function create(words) {
  //select main div
  let mainDivElement = document.getElementById("content");

  for (const word of words) {
    //create elements - div and p
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");
    //add content to p and hide it
    pElement.textContent = word;
    pElement.style.display = "none";

    // attach elements to DOM
    divElement.appendChild(pElement);
    mainDivElement.appendChild(divElement);

    //just add event to divElement
    divElement.addEventListener("click", (e) => {
       pElement.style.display = 'block';
      });
  }

  /* // OR add event PROPAGATION outside the loop to the main div, but have to create logic inside the event
  mainDivElement.addEventListener("click", (e) => {
    if (e.target.matches("#content div")) { // NEW METHOD
      let p = e.target.children[0];
      p.style.display = "block";
    }
  }); */
}
