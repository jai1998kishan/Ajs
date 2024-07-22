// find()  => The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

// The find() method does not execute the function for empty elements.

// The find() method does not change the original array.

console.log("Kapil");

var a = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130, 140, 150, 160, 170, 180,
  190, 200,
];

// for (let item of a) {
//   if (item % 5 == 0) {
//     console.log(item);
//     break;
//   }
// }

// let result = a.find((x) => x % 500 == 0);
// console.log(result);

// Find an object in an array by one of its properties
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//   return fruit.name === "cherries";
// }

// console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }

// Using arrow function and destructuring
// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];

// const result = inventory.find(({ name }) => name === "cherries");

// console.log(result); // { name: 'cherries', quantity: 5 }
