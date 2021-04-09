/* Write program to receive a number of centuries and convert it to years, days, hours and minutes. */
function centuriesToMins(){
    let days = Math.floor(years * yearToDays);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}
centuriesToMins(1);
centuriesToMins(5);