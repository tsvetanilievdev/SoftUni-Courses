//Write a function that converts British pounds to dollars formatted to 3th decimal point. 
//1 British Pound = 1.31 Dollars

function moneyExchange(gbp){
    let usd = gbp * 1.31;
    console.log(usd.toFixed(3));
}
moneyExchange(80);
moneyExchange(39)