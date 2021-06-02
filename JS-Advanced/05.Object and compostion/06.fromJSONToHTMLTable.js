/* 6. From JSON to HTML Table
You’ re tasked with creating an HTML table of students and their scores.You will receive a single string representing an array of objects, the table’ s headings should be equal to the object’ s keys,
    while each object’ s values should be a new entry in the table.Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML.
            Input
The input comes a single string argument(the array of objects).
            Output
The output should be printed on the console–
for each entry row in the input print the object representing it.
Note: Object’ s keys will always be the same.Check more information or the HTML Entity here.
            HTML
You are provided with an HTML file to test your table in the browser. */
function jsonToHTML(arrOfObjects) {
    let data = JSON.parse(arrOfObjects);
    let headings = Object.keys(data[0]);
    let result = '<table>\n\t<tr>'
    headings.forEach(key => {
        result += `<th>${key}</th>`
    })
    result += '</tr>\n';
    for (let i = 0; i < data.length; i++) {
        result += '\t<tr>'
        let values = Object.values(data[i]);
        values.forEach(value => {
            result += `<td>${value}</td>`
        });
        result += '</tr>\n'
    }

    result += '</table>';
    console.log(result)
}
jsonToHTML('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');

function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(`<tr>${makeValueRow(obj)}</tr>`));

    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keys = Object.keys(arr[0]);
        let result = '<tr>'
        keys.forEach(key => result += `<th>${key}</th>`);
        result += '</tr>'
        return result;
    };

    function makeValueRow(obj) {
        let values = Object.values(obj);
        let result = ''
        values.forEach(value => result += `<td>${value}</td>`);
        return result;
    };

    function escapeHtml(value) {};
    console.log(outputArr.join('\n'));

}
JsonToHtmlTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');