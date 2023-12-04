const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Why do we care about it?
// 1)  Help with inference when extracting values.
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) TS can prevent us from adding incompatiable values to the array.
carMakers.push(100);

// 3)Help with 'map','forEach','filter' functions "methods".

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// 4)Flexible-arrays can still contain multiple different types.

const importantDates: (Date | string)[] = [];

importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(10); => gives error 3shan msh same type as i defined

// AVOID ANY TYPE AS MUCH POSSIBLE!!!

// when to use this? any time we need to represent a collection of records with some aribtary sort order
