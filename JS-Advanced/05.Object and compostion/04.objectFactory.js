/* 4.	Object Factory
Create a function that can compose objects by copying functions from a given library of functions. 
You will receive two parameters – a library of functions as an associative array (object) and an array of orders, represented as objects. 
You must return a new array – the fulfilled orders.

The first parameter will be an object where each property is a function. 
    You will use this library of functions to compose new objects.
The second parameter is an array of orders. Each order is an object with the following shape:
{
  template: [Object],
  parts: string[]
}
The template is an object that must be copied. The parts array contains the names of required functions as strings.
You must create and return a new array, by fulfilling all orders from the orders array. 
To fulfill an order, create a copy of the object’s template and then add to it all functions, 
listed in the parts array of the order, by taking them from the function library (first parameter to your solution).

        Input
You will receive two parameters:
•	library – an object
•	orders – an array of objects
        Output
Your solution must return an array of objects.
 */

//input 
const library = {
    print: function() {
        console.log(`${this.name} is printing a page`);
    },
    scan: function() {
        console.log(`${this.name} is scanning a document`);
    },
    play: function(artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [{
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];

function myFirstObjectFactory(library, orders) {
    let resultArr = [];
    for (const order of orders) {
        let obj = { name: order.template.name };
        let partArr = order.parts;
        partArr.forEach(part => {
            obj[part] = library[part];
        });

        resultArr.push(obj)
    }
    return resultArr;
}
const products = myFirstObjectFactory(library, orders);
console.log(products);