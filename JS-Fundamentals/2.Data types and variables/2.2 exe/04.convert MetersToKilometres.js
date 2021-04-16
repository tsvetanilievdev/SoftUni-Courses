//You will be given a number that will be distance in meters. Write a program that converts meters to kilometers formatted to the second decimal point.

function convertMtoKM(meters){
    let km = meters / 1000;
    console.log(km.toFixed(2));
}
convertMtoKM(1852)