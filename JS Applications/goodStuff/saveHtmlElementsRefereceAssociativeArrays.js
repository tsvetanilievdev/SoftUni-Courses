//transforming object, using associative arrays
let players = [
    {name: 'Tsvetan Iliev', position: 'midfielder', appearences: 21},
    {name: 'Vladislav Mirchev', position: 'striker', appearences: 44},
    {name: 'Nikolay Ivanov', position: 'midfielder', appearences: 11},
    {name: 'Genadi Lugo', position: 'defender', appearences: 2},
]



let playersObj = players.reduce((acc, c) => {
    //fill acc object with key-> name of curr, and value the objects itself;
    acc[c.name] = c;
    return acc;
}, {}/* <--- acc is empty {} */)

console.log(playersObj);
console.log('here')
// could be use for save reference and delete html elements