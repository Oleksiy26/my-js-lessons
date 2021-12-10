// const vehicle = {
//   name: 'Argo',
//   move() {
//     console.log(`${this.name} is moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   startMachine() {
//     console.log(`${this.name} lifting anchor up`);
//     ship.move();
//   },
//   stoptMachine() {
//     ship.stop();
//     console.log(`${ship.name} lifting anchor down`);
//   },
// };
// Object.setPrototypeOf(ship, vehicle);

class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Argo', false, 20);

ship1.move();
ship1.stop();
