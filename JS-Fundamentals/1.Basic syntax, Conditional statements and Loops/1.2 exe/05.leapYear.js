/* Write a JS function to check whether a year is leap. 
Leap years are either divisible by 4 but not by 100 or are divisible by 400. Return the result like examples below: */

function leapYear(year){

    if(year % 4 === 0 && year % 100 !== 0){
        console.log('yes');
    }else if(year % 400 === 0){
        console.log('yes');
    }else {
        console.log('no');
    }
}
leapYear(1984);
leapYear(2003);
leapYear(4);
