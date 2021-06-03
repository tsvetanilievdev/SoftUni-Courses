/* 3.	Car Factory
Write a program that assembles a car by given requirements out of existing components. The client will place an order in the form of an object describing the car. You need to determine which parts to use to fulfil the client’s order. You have the following parts in storage:
An engine has power (given in horsepower) and volume (given in cubic centimeters). Both of these values are numbers. When selecting an engine, pick the smallest possible that still meets the requirements.
Small engine: { power: 90, volume: 1800 }
Normal engine: { power: 120, volume: 2400 }
Monster engine: { power: 200, volume: 3500 }
A carriage has a type and color. Both of these values are strings. You have two types of carriages in storage and can paint it any color.
Hatchback: { type: 'hatchback', color: <as required> }
Coupe: { type: 'coupe', color: <as required> }
The wheels will be represented by an array of 4 numbers, each number represents the diameter of the wheel in inches. The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 
Input
You will receive an object as an argument to your function. The format will be as follows:
{ model: <model name>,
  power: <minimum power>,
  color: <color>,
  carriage: <carriage type>,
  wheelsize: <size> }
Output
Return the resulting car object as a result of your function. See the examples for details.
 */
let input1 = {
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
};

let input2 = {
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
};

function carFactory(carOrder) {
  let deliveredCar = {};

  let storage = {
    model,
    power,
    color,
    carriage,
    wheelsize,
  };

  //iterate over carOrder
  for (let requirement in carOrder) {
    storage[requirement](deliveredCar, carOrder);
  }

  /* OR, manual testing
  storage.model(deliveredCar, carOrder);
  console.log(deliveredCar);
  storage.power(deliveredCar, carOrder);
  console.log(deliveredCar);
  storage.color(deliveredCar, carOrder);
  console.log(deliveredCar);
  storage.carriage(deliveredCar, carOrder);
  console.log(deliveredCar);
  storage.wheelsize(deliveredCar,carOrder);
  console.log(deliveredCar) */

  function model(car, order) {
    car.model = order.model;
  }

  function power(car, order) {
    let pow = order.power;
    if (pow <= 90) {
      car.engine = { power: 90, volume: 1800 };
    } else if (pow <= 120) {
      car.engine = { power: 120, volume: 2400 };
    } else {
      car.engine = { power: 200, volume: 3500 };
    }
  }
  function color(car, order) {
    if (!car.carriage) {
      car.carriage = {};
    }
    car.carriage.color = order.color;
  }

  function carriage(car, order) {
    if (!car.carriage) {
      car.carriage = {};
    }
    car.carriage.type = order.carriage;
  }

  function wheelsize(car, order) {
    let size = order.wheelsize;
    if (size % 2 === 0) {
      size -= 1;
    }
    car.wheels = [size, size, size, size];
  }

  return deliveredCar;
}
console.log(carFactory(input1));
