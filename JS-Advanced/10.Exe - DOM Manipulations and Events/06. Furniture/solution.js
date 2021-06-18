function solve() {
  let generateButton = document.querySelectorAll("#exercise button")[0];
  let buyButton = document.querySelectorAll("#exercise button")[1];

  generateButton.addEventListener("click", () => {
    let furnitureList = JSON.parse(
      document.querySelector("#exercise textarea").value
    );

    //make able first checkbox 
    let firstCheckbox = document.querySelector('tbody input');
    firstCheckbox.disabled = false;

    // select parent tbody
    let parentDivElement = document.querySelector(".table tbody");

    // select and add new info from json
    for (const furniture of furnitureList) {
      let { name, img, price, decFactor } = furniture;

      //create elements and attach them to the DOM
      let tr = document.createElement("tr");

      let tdImg = document.createElement("td");
      let imgEl = document.createElement("img");
      imgEl.src = img;
      tdImg.appendChild(imgEl);
      tr.appendChild(tdImg);

      let tdName = document.createElement("td");
      let pName = document.createElement("p");
      pName.textContent = name;
      tdName.appendChild(pName);
      tr.appendChild(tdName);


      let tdPrice = document.createElement("td");
      let pPrice = document.createElement("p");
      pPrice.textContent = price;
      tdPrice.appendChild(pPrice);
      tr.appendChild(tdPrice);


      let tdDecFactor = document.createElement("td");
      let pDecFactor = document.createElement("p");
      pDecFactor.textContent = decFactor;
      tdDecFactor.appendChild(pDecFactor);
      tr.appendChild(tdDecFactor);


      let tdCheckbox = document.createElement("td");
      let inputCheckbox = document.createElement("input");
      inputCheckbox.type = "checkbox";
      tdCheckbox.appendChild(inputCheckbox);
      tr.appendChild(tdCheckbox);

      parentDivElement.appendChild(tr);
    }
  });

  buyButton.addEventListener("click", () => {
    // select all checked checkboxes
    let checkboxList = Array.from(document.querySelectorAll(".table input:checked"));
    let nameArr = []
    let sum = 0;
    let decFactorArr = [];
    let buyTextArea = document.querySelectorAll('textarea')[1];

    checkboxList.forEach(checkbox => {
      let name = checkbox.parentElement.parentElement.children[1].textContent.trim()
      nameArr.push(name);
      let price = Number(checkbox.parentElement.parentElement.children[2].textContent.trim());
      sum += price;
      let decFactor = Number(checkbox.parentElement.parentElement.children[3].textContent.trim());
      decFactorArr.push(decFactor);
    });
    buyTextArea.textContent = 'Bought furniture: ' + nameArr.join(', ') + '\n';
    buyTextArea.textContent += `Total price: ${sum.toFixed(2)}\n`;
    decFactorArr = decFactorArr.reduce((a,x) => a + x,0) / decFactorArr.length;
    buyTextArea.textContent += `Average decoration factor: ${decFactorArr}`;
  });
}
