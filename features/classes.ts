//Definition: Classes are Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

/* access Modifiers:
1)Public: This method can be called any where, any time.
2)Private: this method can only be called by other methods in same class "and not even the inherited classes".
3)Protected: This method can be called by other methods in this class, or by other methods in child-classes ONLY ( NOT EVEN OUTSIDE OF THE PARENT CLASS OR THE CHILD CLASS).
*/

//superClass or parentClass
class Vehicle {
  // color: string;
  constructor(public color: string = 'green') {
    // this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
//subClass or childClass
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroooom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(2, 'purple');

console.log(car.color);
console.log(car.wheels);

// Why do we care about classes ?
//We are going to use it heavily(Everywhere), also the interfaces will work together with classes.
