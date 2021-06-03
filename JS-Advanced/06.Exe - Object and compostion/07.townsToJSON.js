/* 7.	Towns to JSON
You're tasked to create and print a JSON from a text table. 
You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. 
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. 
Check the examples to get a better understanding of your task.
            Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
            Output
•	The output should be an array of objects wrapped in JSON.stringify(). 
•	Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!
 */
let input = ['| Town | Latitude | Longitude |',
'| Sofia City | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];

function townToJson(data){
    let arr = [];
    let keys = data.shift().split('|').filter(x => x.length > 0).map(x => x.trim());

    for (let row of data) {
        row = row.split('|').filter(x => x.length > 0).map(x => x.trim());
        let newObj = createJson(keys,row); // create new object;
        arr.push(newObj);
    }
    
    function createJson (keys, array){
        let obj = {}
        for(let i = 0; i < array.length; i++){
            let key = keys[i];
            let value = array[i];
            if(i > 0){
                value = Number(value).toFixed(2);
                value = parseFloat(value); // remove zeroes  42.70 -> 42.7

            }
            obj[key] = value;
        }
        return obj;
    }

    return JSON.stringify(arr);
}
console.log(townToJson(input));