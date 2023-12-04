/*
const variableName = (argument:type,argument:type):type of return => {
  return "code"
}

or 

function nameOfFunction (argument:type,argument:type):type of return {
  return "code"
}

*/
// RULE:Forget the inference here in functions, we will always and always use the ANNOTATIONS

// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// traditional function
function divide(a: number, b: number): number {
  return a / b;
}
// annonymous function assigned to a variable that will return a number
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

/* const throwError = (message: string): never => {

    throw new Error(message);
};
 */

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// const logWeather = (forecast: { date: object; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };

//es2015 destructuring

const logWeather = ({
  date,
  weather,
}: {
  date: object;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

// We will rely on annotaions here and avoid inference
