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
  firstName: 'Adel',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop();
    console.log(`${ship.name} lifting anchor down`);
  },
};
Object.setPrototypeOf(ship, vehicle);

function getOwnProps(obj) {
  const arrOwnProp = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      console.log(prop);
      arrOwnProp.push(prop);
    }
  }
  return arrOwnProp;
}

console.log(getOwnProps(ship));
