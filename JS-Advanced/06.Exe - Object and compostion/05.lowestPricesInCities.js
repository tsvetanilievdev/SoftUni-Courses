/* 5.	Lowest Prices in Cities
You will be given several towns, with products and their price. You need to find the lowest price for every product and the town it is sold at for that price.
        Input
The input comes as array of strings. Each element will hold data about a town, product, and its price at that town. 
The town and product will be strings, the price will be a number. The input will come in the following format:
{townName} | {productName} | {productPrice}
If you receive the same town and product more than once, you should update the old value with the new one.
        Output
As output you must print each product with its lowest price and the town at which the product is sold at that price. If two towns share the same lowest price, print the one that was entered first. 
The output, for every product, should be in the following format:
{productName} -> {productLowestPrice} ({townName})

The order of output is - order of entrance. See the examples for more info.
 */
let input = [
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
];
let input2 = [
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "New York City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Mexico City | Audi | 100000",
  "Washington City | Mercedes | 1000",
];

function lowestPricesSOLVED(input) {
  
  let allProductsObj = addAllProducts(input); //1.
  
  let productsArray = sortedArr(allProductsObj);//2.
  
  print(allProductsObj, productsArray);//3.

  // 1. create new object with all products, towns and prices;
  function addAllProducts(data) {
    let obj = {};

    data.forEach((item) => {
      let [town, product, price] = item.split(" | ");
      price = Number(price);

      if (!obj[product]) {
        obj[product] = {};
      }
      obj[product][town] = price;
    });
    return obj;
  }

  //2. create array with towns where is cheapest price of the product; if the price is equal return first added town;
  function sortedArr(obj) {
    let arr = [];

    Object.keys(obj).forEach((town) => {
      let sorted = Object.entries(obj[town]).sort((a, b) => {
        let priceA = a[1];
        let priceB = b[1];

        return priceA - priceB;
      });
      arr.push(sorted[0]);
    });
    return arr;
  }

  //3. printing data from obj and sorted array;

  function print(object, arr) {
    let index = 0;
    for (const key in object) {
      console.log(`${key} -> ${arr[index][1]} (${arr[index][0]})`);
      index++;
    }
  }
}
lowestPricesSOLVED(input2);
