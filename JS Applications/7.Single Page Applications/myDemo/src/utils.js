function sayHomeTeam(){
    for(let i = 0; i < 12; i++){
        if(i == 0){
            console.log(`Aaaaaaand noooooooooooow, the home teeeeeam line-ups:`);
            continue;
        }
        console.log(`The number ${i} is ...........`);
    }
}

export default sayHomeTeam; // ES6 modules

// module.exports = sayHomeTeam; // Common JS