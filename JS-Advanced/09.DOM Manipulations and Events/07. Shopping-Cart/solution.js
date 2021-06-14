function solve() {
  let addButtons = document.querySelectorAll(".add-product");
  let textAreaElement = document.querySelector("textarea");
  let checkoutBtnElement = document.querySelector(".checkout");

  let orderedProducts = {};
  for (const button of addButtons) {
    button.addEventListener("click", (e) => {
      let product = e.target.parentNode.parentNode; // take grandparent which is every product div

      //my variat to select name and price
      let name = product.children[1].firstElementChild.textContent;
      let price = Number(product.lastElementChild.textContent);
      textAreaElement.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      if (!orderedProducts[name]) {
        orderedProducts[name] = price;
      } else {
        orderedProducts[name] += price;
      }

      // other variant using !!!getElement or querySelector only over ELEMENT!!!!
      /* let name2 = product.querySelector('.product-title').textContent;
            let price2 = product.querySelector('.product-line-price').textContent;
            console.log(name2, price2) */
    });
  }

  //add event to checkout button
  checkoutBtnElement.addEventListener("click", (e) => {
    let productsNameArr = Object.keys(orderedProducts);
    let totalPrice = Object.values(orderedProducts)
      .reduce((total, price) => total + price, 0)
      .toFixed(2);
    textAreaElement.textContent += `You bought ${productsNameArr.join(
      ", "
    )} for ${totalPrice}.`;

    //disable all buttons after checkout
    let allButtons = document.getElementsByTagName('button');
    for (const button of allButtons) {
        button.disabled = 'true';
    }
  });
}
