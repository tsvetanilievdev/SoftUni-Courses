// Object COMPOSITION - Creating Complex Objects from Simple Pieces
// - Combining simple objects into more complex ones
let student = {
    firstName: 'Gratsiela',
    lastName: 'Stoyneva',
    age: 26,
    location: {
        lat: 42.444,
        lng: 32.122
    }
}
console.log(student);
console.log(student.location.lat);
// - composition is a powerful technique for CODE REUSE
// - it can be considered superior ot OPP inheritance

// object can be passed to variable to reference
let info = student.location;
info.lat = 55.500 // change the value
console.log(student.location.lat); // 55.500

//Composing objects
// - combine variables into object:
let name = "Sofia";
let population = 1325744;
let country = "Bulgaria";
let town = { name, population, country };
console.log(town.name); // Object {name: "Sofia", population: 1325744,country: "Bulgaria"}

//Nested destructuring can work BEYOND the TOP LEVEL
const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
};
const { data: { director } } = department;
console.log(director); // director is { name: 'John', position: 'Engineering Director'}
const { data: { director: { name: hisName /* we can change the name with key: newName */ } } } = department;
console.log(hisName); // John

//Object and Array Destructuring
const employees = [
    { name: 'John', position: 'worker' },   // first element
    { name: 'Jane', position: 'secretary' }
];
const [{ position }] = employees;  // position of first element is 'worker'

const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
};
const { employees: [empName] } = company;  // empName is 'John'

//Composing Objects with Behavior
// - We can compose behavior at run-time and re-use functionality
// - Describe objects in terms of what they do, not what they are
// - This solves a deeply rooted problem with OOP inheritance
function print() {
    console.log(`${this.name} is printing a page`);
}

function scan() {
    console.log(`${this.name} is scanning a document`);
}

let printer = {
    name: 'ACME Printer',
    print
}

let scanner = {
    name: 'Initech Scanner',
    scan
}

let coppier = {
    name: 'ComTron Copier',
    print,
    scan
}
printer.print();
scanner.scan();
coppier.print();
coppier.scan();

//Factory Functions 
// - Functions that compose and return objects
// - Creating objects with factory functions can avoid the pitfalls of using 'this'
function createRect(width, heigth) {
    const rect = { width, heigth }

    rect.getArea = () => { // create method - getArea with ARROW function! but we CREATW REFERENCE to this object, 
        return rect.width * rect.heigth; // if we pass it to other object, every invocation will return the result of this object
    }
    return rect;
}
let newRect = createRect(5, 13);
console.log(newRect);
console.log(newRect.getArea()); // 65
let otherRect = createRect(33, 10);
console.log(otherRect.getArea()) // 330

// Decorator Functions !!!
// - Functions that add new data and behavior to objects
function canPrint(device) {
    device.print = () => {
        console.log(`${device.name} is printing a page`)
    }
}
let newPrinter = { name: 'Brother 443-C' };
// - The object reference is embedded – using this is not required
canPrint(newPrinter);
newPrinter.print()