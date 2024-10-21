class Car {
  // declaring a private attribute. Only accesible within class
  #yearsOfWarranty
  #yearBuilt

  // declaring an general property that applies to all objects with a default value
  madeIn = 'Mexico'

  //define instance properties
  constructor(color, make, warranty, yearBuilt){
    this.color = color
    this.make = make
    this.#yearsOfWarranty = warranty
    this.#yearBuilt = yearBuilt
  }

  printPrivateProperties(){
    console.log('printing private properties...')
    console.log(`yearsOfWarranty: ${this.#yearsOfWarranty}`)
    console.log(`yearBuilt: ${this.#yearBuilt}`)
  }

  getReadOnlyProperty(){
    // this returns the value of a private property, however gettter method is preffered since it makes impossible to create a new public property with the same name of the private property
    return this.#yearBuilt
  }

  get yearBuilt(){
    // since yearBuilt is private, we can use this method to expose the value of yearBuilt
    // this getter method makes this property read-only (unless we provide a setter method)
    return this.#yearBuilt
  }

  get yearsOfWarranty(){
    // Without this getter method it's possible to create a public property with the same property name which would cause confusion
    throw new Error('private property');
  }

  startEngine(){
    return "RRR RRR RRRRRRRR"
  }
  changeColor(newColor){
    this.color = newColor
  }
  //returning the object
  something(){
    // does not include private attribute yearsOfWarranty
    return this
  }
  // private methods can only be called inside the class
  #privateMethod(){
    console.log('inside a private method')
    return 'this is a private method'
  }
  read
  callSomethingElse(){
    return this.#privateMethod()
  }

}

let c1 = new Car("red","honda", "2", 2010)
console.log(c1.make)
console.log(c1.color)
console.log(c1.startEngine())
c1.changeColor("blue")
console.log(c1.color)
// change object property directly
c1.color = 'pink'
console.log(c1.color)
console.log(c1.madeIn)
c1.madeIn = 'USA'
console.log(c1.madeIn)
c1.printPrivateProperties()
console.log(c1.something())

console.log(c1.getReadOnlyProperty()) // 2010
console.log(c1.yearBuilt)     // 2010
c1.yearBuilt = 1999           // does not have any effect since this is a private property with a getter method
console.log('after trying c1.yearBuilt = 1999')
console.log(c1.yearBuilt)     //  2010

c1.yearsOfWarranty = 100    //  does not have any effect since this is a private property with a getter method
//console.log(c1.yearsOfWarranty)   // results in error since there is a getter that makes this call unavailable

c1.printPrivateProperties()
console.log(c1.something())
console.log(c1.callSomethingElse())


class Point {
  // static property: property that related to the class 
  static piValue = Math.PI

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //Static method is a method that relates to the class (instance method in Ruby)
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

console.log(Point.distance(p1, p2)) // 7.0710678118654755
console.log(Point.piValue)



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