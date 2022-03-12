//Combining simple objects into more complex ones 
//combining objects:
let student = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 21,
    location: {lat: 42.332, lng: 23.223}
}

//Nested destructuring:
const department = {
    name: 'Automobile',
    data: {
        director: {
            name: 'Jonh Jogneer',
            position: 'CEO'

        },
        employess:[],
        company: 'KIA Motors'
    }
}

const {data: {director}} = department;
console.log(director);


//Composing object with Behaviour
function print(){

    return `${this.brand} can print!`
}

function scan(){

    return `${this.brand} can scan!`
}

const printer = {
    brand: 'Brother 4830S',
    print,
}
const scanner = {
    brand: 'LG Scan Pro 1',
    scan
}

const coppier = {
    brand: 'Apple Coppier 13',
    print,
    scan
}



//Factory Functions - functions that compose and return objects
// creating object with factory functions can AVOID the pitfalls of using this
function createRect(width, height){
    const rect = {width, height};
    rect.getArea = () => {
        return rect.width * rect.height
    }

    return rect;
}

let rectOne = createRect(5,8);
let rectTwo = createRect(3,4);

console.log(rectOne.getArea());
console.log(rectTwo.getArea());

let rectOneArea = rectOne.getArea();
console.log(rectOneArea);

// Decorator Functions - functions that add new data and behaviour to objects
let printerDecor = {
    name: 'Brother 4444'
}

function canPrint(obj){
    obj.print = function(){

        return `${obj.name} can print!`;
    }
}
console.log(printerDecor);
canPrint(printerDecor); // DECORATE with print
console.log(printerDecor.print());
// The object reference is EMBEDDED using this is not required