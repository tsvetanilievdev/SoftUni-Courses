//creating object 
let obj = {} // with literal;

//adding(assigning) property(key:value pair)
let person = { // with literal
    firstName: 'Ivan',
    age: 25,
}
person.lastName = 'Ivanov'; // dot notation;
person['address'] = 'Levski 24'; // square brackets notation;
console.log(person);

//creating object using function:
console.log(createCity('Targovishte', 35000, 1000000));

function createCity(name, population, treasury) {
    const city = {
        name, // name: 'Targovishte'
        population, // population: 35000
        treasury // treasury: 1000000
    }
    return city;

    // we could return directly object:
    /* return { 
        name,
        population,
        treasury,
    } */
}

//ACCESSING properties
console.log(person.firstName); // Ivan
console.log(person['age']); // 25;

//Destructuring syntax:
let { age, firstName } = person; // creates variable with age and firstName value from the object
console.log(age);
console.log(firstName);
let { lastName: familyName } = person; // first access the real name, then using : change the name of the variable with desired name(familyName);
console.log(familyName) // the value of lastName is stored in familyName;

//objects are a REFERENCE data type;
console.log(person.firstName);
let otherPerson = person;
otherPerson.name = 'Tsvetan';
console.log(person.firstName)

//comparing objects:
let a = { name: 'John' };
let b = { name: 'John' };
console.log(a === b); // FALSE because each created object has different reference 

//deleting property
console.log(person.lastName);
delete person.lastName;
console.log(person.lastName); // undefined;

//Object as ASSOCIATIVE ARRAYS - the keys are string indexes; a value is associate to a key; all values should be of the same type;
let phonebook = {
    // key      -    value:
    'John Smith': 0888493939,
    'Lisa Smith': 0897632212,
    'Peter Pan': 9877600301
}

//ITERATE over objects:
// for-in - iterates over all ENUMERABLE properties:
let someObj = { a: 1, b: 2, c: 3 };
for (let key in someObj) {
    console.log(`${key}: ${someObj[key]}`); // -> a: 1, b: 2, c: 3;
}

// Obtain an ARRAY of all keys or values in an object: then use array methods like sort(), forEach()....!!!
const keys = Object.keys(someObj) // Object.keys() method returns an array with all keys;
console.log(keys); // (3) ['a', 'b', 'c']

const values = Object.values(someObj); // Object.values() method returns an array with all values;
console.log(values); //(3) [1, 2, 3]

const entries = Object.entries(someObj) // Object.entries() method returs an array of arrays(tuples - [key,value]);
console.log(entries); //(3) [Array(2), Array(2), Array(2)] - > (3) [['a', 1], ['b', 2], ['c', 3]];


//METHODS and CONTEXT - combine data with behavior:
//methods are ACTIONS that can be performed on objects;
// methods are stored in properties as function definition;
let newPerson = {
    firstName: 'Hristo',
    lastName: 'Kynev',
    age: function(myAge) {
        return `My age is ${myAge}!`;
    },
    fullName() {
        return `My name is ${this.firstName} ${this.lastName}` // You have to refer context to 'this' object;
    },
    sayHello: () => `Hello from me: ${firstName}`, //ARROW FUNCTIONS take context where is defined!!!
}
console.log(newPerson.age(44)); // My age is 44!
console.log(newPerson.fullName()); // My name is Hristo Kynev
console.log(newPerson.sayHello()); // Hello from me: Ivan

// Objects as FUNCTION LIBRARIES: 
// Related functions may be grouped in an object
// The object serves as a function library - like Math, Object, Number, etc
// This technique is often used to expose public API in a module
const compareNumber = { // creating sorting helper
    ascending: (a, b) => (a - b),
    descending: (a, b) => (b - a)
}
let numsArr = [44, 23, 1, 6002, 871, 10, 309];
numsArr.sort(compareNumber.ascending); // pass the reference of the function library into sort()
console.log(numsArr); // (7) [1, 10, 23, 44, 309, 871, 6002]
numsArr.sort(compareNumber.descending);
console.log(numsArr); // (7) [6002, 871, 309, 44, 23, 10, 1]
//Objects as SWITCH replacement:
// You will almost never see switch used in JS code:
// Named methods are used instead:
let count = 5;
let command = 'decrement'
switch (command) {
    case 'increment':
        count++;
        break;
    case 'decrement':
        count--;
        break;
    case 'reset':
        count = 0;
        break;
}
console.log(count); // 4
// SHORTER syntax for object methods:
let counter = 5;
const parser = {
    increment() { counter++ },
    decrement() { counter-- },
    reset() { counter = 0 }
}
command = 'reset'
parser[command](); // must me invoked with () after command!; 
console.log(counter); // 0

// FUNCTION CONTEXT
// Accesing Object Context:
// - function in JS have execution context:
// - accessed with keyword 'this'
// - when executed as an object method, the context is a reference to the parent object
const citizen = {
    firstName: 'Jonny',
    lastName: 'Bravo',
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(citizen.fullName()); // Jonny Bravo
// function EXECUTION CONTEXT: 
// - execution context can be CHANGED at run-time
// - if a function is executed OUTSIDE of its parent object, it will NO LONGER have access to the object's content
let getFullName = citizen.fullName;
console.log(getFullName()); // undefined undefined
let anotherCitizen = {
    firstName: 'Peter',
    lastName: 'Pan'
}
anotherCitizen.fullName = getFullName;
console.log(anotherCitizen.fullName()); // Peter Pan;