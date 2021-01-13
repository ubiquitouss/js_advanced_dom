let c1 = {
  x: 5,
  y: 10,
};
let c2 = {
  x: 45,
  y: 235,
};

function printCoordinates() {
  console.log(this.x + ',' + this.y);
}

let c1func = printCoordinates(c1);

c1func();
