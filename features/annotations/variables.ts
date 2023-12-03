// Annotations in genral,but we will focus in annotation variales "in depth" in this section

// let variableName : dataType = value
// ---> this is called Type annotations and there are different types of annotations;

let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;
// apples = 'haha' -> it will produce an error;

// Built in objects
let now: Date = new Date();

// now variable is a type(i mean data type) "Date" and assigned to instance of Date Object

// Array

let colors: string[] = ['red', 'green', 'blue'];

// colors is a variable, which is typed of string array and it will contain array values of string which are ['red','green','blue']

let myNumbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

//car is variable which is instance of Car object with Type Car

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//point is variable which has object and the key-value pairs (x&y) inside it are a number

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
//1- function type "void" as it returns nothing
// 2- type of argument is "number"

// -------------------------------------------------------
// When to use annotations//
//1) Function that returns the 'any'type
// IMPORTANT NOTE: TRY TO AVOID VARIABLES WITH 'ANY' AT ALL COSTS!

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x:10,y:20};

// 2) When we declare a variable on one line
// and initalize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean; //but this is bad practice , The good practice is -> let foundWord=false (to use inference) as we want to avoid annotations AS possible as we can.

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false; //this variable it's type going to be either: boolean OR number
// note: this is bad code for annotation but sometimes you are forced to do this in some scenarios

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
