/* 5.	Road Radar
Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
•	On the motorway the limit is 130 km/h
•	On the interstate the limit is 90 km/h
•	In the city the limit is 50 km/h 
•	Within a residential area the limit is 20 km/h

If the driver is within the limits, there should be printed speed and the speed limit. 
`Driving {speed} km/h in a {speed limit} zone`
If the driver is over the limit, however, your function should print the severity of the infraction and the difference in speeds. 
`The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
For speeding up to 20 km/h over the limit, speeding should be printed 
For speeding up to 40 km/h over the limit, excessive speeding should be printed
For anything else, reckless driving should be printed
The input comes as 2 string parameters. The first element is the current speed (number), the second element is the area.
The output should be printed on the console.
 */
function roadRadar(speed, area) {
  let limit = 0;

  if (area == "motorway") {
    limit = 130;
  } else if (area == "interstate") {
    limit = 90;
  } else if (area == "city") {
    limit = 50;
  } else if (area == "residential") {
    limit = 20;
  }

  let difference = limit - speed;

  if (difference >= 0) {
    return `Driving ${speed} km/h in a ${limit} zone`;
  } else {
      difference = Math.abs(difference);
      let status = '';
      if(difference <= 20){
          status = 'speeding';
          return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
      }else if(difference <= 40){
        status = 'excessive speeding';
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
      }else {
        status = 'reckless driving';
        return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`;
      }
  }
}
console.log(roadRadar(40, "city"));
console.log(roadRadar(21, "residential"));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));
