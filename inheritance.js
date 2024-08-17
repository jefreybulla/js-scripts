class Rectangle {
  constructor(length,width){
    this.length = length;
    this.width = width;
  }
  area(){
    return this.length*this.width;
  }
}

const a = new Rectangle(3,4);
console.log(a.width);
console.log(a.area());

//class that inherits from another class

class Square extends Rectangle {
  constructor(length){
    super(length,length);
  }
}

const b = new Square(5);
console.log(b.width);
console.log(b.area());
