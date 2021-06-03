/* 2.	Construction Crew
Write a program that receives a worker object as a parameter and modifies its properties. Workers have the following structure:
{ weight: Number,
  experience: Number,
  levelOfHydrated: Number,
  dizziness: Boolean }
Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. If you receive a worker who’s dizziness property is set to true it means he needs to intake some water in order to be able to work correctly. The required amount is 0.1ml per kilogram per year of experience. The required amount must be added to the existing amount. Once the water is administered, change the dizziness property to false.
Workers who do not have dizziness should not be modified in any way. Return them as they were.
Input
Your function will receive a valid object as parameter.
Output
Return the same object that was passed in, modified as necessary.
 */
let test1 = { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true };
  let test2 = { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true };
  let test3 = { weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false };

//best solution:
function constructionCrew(obj){
    if(obj.dizziness === false){
      return obj;
    }
    
    function intakeWater(obj) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
      }
    intakeWater(obj);
    
    return obj;
  }
  console.log(constructionCrew(test1));


  //other solution:
  function solve1(obj){
    if(obj.dizziness === false){
      return obj;
    }
    
    obj.intakeWater = function() {
        this.levelOfHydrated += 0.1 * this.weight * this.experience;
        this.dizziness = false;
      }
    obj.intakeWater();
    
    return obj;
  }
  solve1(test2)

  //other solution: bad
  function solve2(obj){
    let newObj = {}
    for(let key in obj){
      newObj[key] = obj[key];
    }
    if(newObj.dizziness === false){
      return obj;
    }
    
    obj.intakeWater = function() {
        this.levelOfHydrated += 0.1 * this.weight * this.experience;
        this.dizziness = false;
      }
    obj.intakeWater();

    return obj;
  }
  solve2(test3);