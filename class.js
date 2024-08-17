class Car {
  //define instance properties
  constructor(color, make){
    this.color = color;
    this.make = make;
  }

  startEngine(){
    return "RRR RRR RRRRRRRR";
  }
  changeColor(newColor){
    this.color = newColor;
  }
  //returning the object
  something(){
    return this;
  }
}

let c1 = new Car("red","honda");
console.log(c1.make);
console.log(c1.color);
console.log(c1.startEngine())
c1.changeColor("blue");
console.log(c1.color);
console.log(c1.something());


//####Static method (instance method in Ruby)######
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);  //Pythagoras theorem : https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance; //undefined
p2.distance; //undefined

console.log(Point.distance(p1, p2)); // 7.0710678118654755



//####Getter method####
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter -call without parenthesis '()': object.area.
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area)  ; // 100


console.log('Container class ->')

/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
class Container {
  constructor() {
    this.storage = []
  }

  /**
   * Adds the specified value to the container
   *
   * @param {number} value
   */
  add(value) {
    // TODO: implement this method
    //this.container = this.container.push(value)
    console.log(value)
    this.storage.push(value)
  }

  /**
   * Attempts to delete one item of the specified value from the container
   *
   * @param {number} value
   * @return {boolean} true, if the value has been deleted, or
   *                   false, otherwise.
   */
  delete(value) {
    // TODO: implement this method
    
    const index = this.storage.findIndex(n => n == value)
    if(index){
      this.storage.splice(index, 1)
      return true
    }
    else{
      return false;
    }
  }
}

container = new Container();
container.add(2)
container.add(3)
container.add(4)

container.delete(3)

console.log(container)