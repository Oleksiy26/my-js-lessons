const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stoptMachine() {
    ship.stop();
    console.log(`${ship.name} lifting anchor down`);
  },
};
Object.setPrototypeOf(ship, vehicle);


