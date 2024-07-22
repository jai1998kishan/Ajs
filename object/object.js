// var age = 12;
// let obj = {
//   name: "rocky",
//   "full name": "jai kishan",
//   age: 24 + 2,
//   test() {
//     let result = this.age * 10;
//     this.newResult = result;
//     console.log("in test function");
//     console.log("result", result);
//   },
// };
// obj.test();
// console.log(obj.test);
// console.log(obj);
// console.log(obj["full name"]);

let object = {
  name: "moto",
  class: 15,
  fun1: () => {
    console.log("im in arrow fun1 function");
    function test() {
      console.log("im in test function");
      // console.log(this); //global object
      console.log(this.name); //undefine
      console.log(object.name); // moto
    }
    test();
  },
};
console.log(this);

console.log("hello");
object.fun1();
