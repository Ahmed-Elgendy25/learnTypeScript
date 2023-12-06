//interfaces: creating new type, that describing the property names and type of values of an OBJECT!!!//
//Interfaces and classes make your code reuseable, also it makes you great at designing applications

interface Reportable {
  // name: string;
  // year: Date;
  // broken: boolean;
  summary(): string;
}
// oldCivic is a type of reportable, because it meets the specifications of interface Reportable.
// That it has summary function returns string in oldCivic and also it meets the same in reportable interface
const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar `;
  },
};

// drink is a type of reportable, because it meets the specifications of interface Reportable.
// That it has summary function returns string in drink and also it meets the same in reportable interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
