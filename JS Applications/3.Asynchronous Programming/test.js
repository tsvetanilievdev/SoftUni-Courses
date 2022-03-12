function heloo(){
    return 'Heloooooooo'
}

function sommm(textFunc, name){

    setTimeout(() => {
        return textFunc() + ' ' + name; 
    },1000) 
}
let name = 'Johnn';

console.log(sommm(heloo,'peos'));
console.log('End');