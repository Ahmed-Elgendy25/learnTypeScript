const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
// Type alias: is brand new type can be used anywhere in code instead of writing like this
//const pepsi: [string,boolean,number]=['brown','true,40];
//it's used for reusbility, when everytime you make a new drink tuple

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];

const sprite: Drink = ['clear', true, 40];

const tea: Drink = ['brown', false, 0];

// we are not going to use tuples very often "rarely"
//  it's not super useful in typescript

const carSpecs: [number, number] = [400, 3554];

const carStats: { horsePower: number; weight: number } = {
  horsePower: 400,
  weight: 3554,
};

// as you see object is more clearable to read if you read the object you will know what values is for
// ,unlike tuples you have to memorize the objectProperty

//So tubles are used in some applications, but rarely to use them.
// we know it because it's a feature in TS.
