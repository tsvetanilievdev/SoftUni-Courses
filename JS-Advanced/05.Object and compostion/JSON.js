// JSON - JavaScript Object Notation
// - It's a data interchange format
// - It's language independent - syntax is like JavaScript object syntax, but the JSON format is text only
// - Is "self-describing" and easy to understand:
let jsonData = {
    "employees": [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
};
// SYNTAX RULES:
// - In JSON:
// - Data is in name/value pairs
// - Data is separated by commas
// - Curly braces hold objects
// - Square brackets hold arrays
// - JSON only takes double quotes ""
let otherJSONdata = {  
    "employees":  [{  "firstName":   "John",   "lastName":   "Doe"  }]
};

//Parsing FROM strings: JSON.parse() - from JSON to JS object
// - A common use of JSON is to read data from a web server, and display the data in a web page 
// - Use the JavaScript built-in function JSON.parse() to convert the JSON format into a JavaScript object:
let data = '{ "manager":{"firstName":"John","lastName":"Doe"} }';
let  obj  =  JSON.parse(data);
console.log(obj.manager.lastName) // Doe

// Converting TO String: JSON.stringify() - from JS object to JSON
// - Use JSON.stringify() to convert objects into a string
let  obj2  =   {  name:   "John",  age:  30,  city:   "New York"  };
let  myJSON  =  JSON.stringify(obj2);
console.log(myJSON); // {"name":"John","age":30,"city":"New York"}

// - You can do the same for arrays
let  arr  =   [ "John",  "Peter",  "Sally",  "Jane" ];
let  myJSON2  =  JSON.stringify(arr);
console.log(myJSON2); // ["John","Peter","Sally","Jane"]

// - Format the string with indentation for readability
let  myJSONformat  =  JSON.stringify(arr, null, 4);
console.log(myJSONformat)