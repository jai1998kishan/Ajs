// class Test {
//   show() {
//     console.log("In show() of Test class");
//   }
//   display() {
//     console.log("In display() of Test class");
//   }
// }

// var obj1 = new Test();
// obj1.show();
// obj1.display();
// var obj2 = new Test();
// obj2.show();
// obj2.display();

//Question 1 - Adding two Number
class Add {
  setData(x, y) {
    this.a = x;
    this.b = y;
    this.sum = x + y;
  }
  display() {
    console.log(`${this.a} + ${this.b} = ${this.sum}`);
  }
}
var obj1 = new Add();
obj1.setData(1, 2);
obj1.display();
