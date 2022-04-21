let arr1 = [
    {  "id": 1, "name": "Ceco"}, 
    {  "id": 2, "name": "Meco"}, 
    {  "id": 3, "name": "Peco"}, 
    {  "id": 4, "name": "Keco"}, 
    {  "id": 5, "name": "Teco"}
]

let arr2 = [
    {  "id": 2, "name": "Meco"}, 
    {  "id": 3, "name": "Peco"}, 
    {  "id": 4, "name": "Keco"}, 
]


//return the objects in arr1 which are NOT included in arr2 --> id: 1... id:5...
const result = arr1.filter((x) => arr2.find(c => x.id == c.id) == undefined);

console.log(result); // [{id: 1, name: 'Ceco'},{id: 5, name: 'Teco'}]
