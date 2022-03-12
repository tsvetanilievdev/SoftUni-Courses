let printer = {
    name: 'Brother 4444'
}

function canPrint(obj){
    obj.print = function(){

        return `${obj.name} can print!`;
    }
}

console.log(printer);

canPrint(printer); // DECORATE with print

console.log(printer.print());