/* 4.	
    Time to Walk
Write a function that calculates how long it takes a student to get to university. 

The function takes three numbers:
•	The first is the number of steps the student takes from their home to the university
•	Тhe second number is the length of the student's footprint in meters
•	Тhe third number is the student speed in km/h

Every 500 meters the student rests and takes a 1 minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
The input comes as three numbers.
The output should be printed on the console.
 */
function timeToWalk(steps, footprint, speedKMperH){

    let metersWalked = steps * footprint / 1000; // how many meters are walked, converted to KM
    let restInMin = Math.floor(metersWalked * 1000 / 500); // how many minutes is the rest
    let totalSeconds = Math.ceil(3600 * (metersWalked / speedKMperH)) + 60 * restInMin; // found total seconds needed for the walk

    let hours = Math.floor(totalSeconds / 3600); // take the hours
    let minutes = Math.floor((totalSeconds % 3600) / 60); // take the minutes
    let seconds = Math.floor(totalSeconds % 60); // take the seconds

    let result = '';
    
    //instead of if-else construnction
    hours < 10 ? result += `0${hours}:` : result += `${hours}:`;
    minutes < 10 ? result += `0${minutes}:` : result += `${minutes}:`;
    seconds < 10 ? result += `0${seconds}:` : result += `${seconds}`; 
   
    /*  if(hours < 10){
        result += `0${hours}:`;
    }else {
        result += `${hours}:`;
    }

    if(minutes < 10){
        result += `0${minutes}:`;
    }else {
        result += `${minutes}:`;
    }

    if(seconds < 10){
        result += `0${seconds}`;
    }else {
        result += `${seconds}`;
    } */

    return result;
}
console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));