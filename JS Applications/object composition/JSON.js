// JSON = JavaScript Object Notation
// It's a data interchange format
// It's language independent - syntax is like JavaScript object syntax, but the JSON format is text only
// Is "self-describing" and easy to understand: 

{
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}


46

// In JSON:
//  - Data is in name/value pairs
//  - Data is separated by commas
//  - Curly braces hold objects
//  - Square brackets hold arrays
//  - JSON only takes double quotes ""

// Syntax Rules
{

  "employees": [{ "firstName": "John", "lastName": "Doe" }]

}

// A common use of JSON is to read data from a web server, and display the data in a web page 
// Use the JavaScript built-in function JSON.parse() to convert the JSON format into a JavaScript object:
// Parsing from Strings

let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }'; 
let obj = JSON.parse(data);
console.log(obj.manager.lastName) // Doe 


48

// Use JSON.stringify() to convert objects into a string:
//  - You can do the same for arrays
//  - Format the string with indentation for readability
//  - Converting to String

let obj = { name: "John", age: 30, city: "New York" };

let myJSON = JSON.stringify(obj);

console.log(myJSON);// {"name":"John","age":30,"city":"New York"}

let arr = [ "John", "Peter", "Sally", "Jane" ];

let myJSON = JSON.stringify(arr);

console.log(myJSON); // ["John","Peter","Sally","Jane"]

let myJSON = JSON.stringify(arr, null, 2);






