//return a list of items from position to position
var a = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130, 140, 150, 160, 170, 180,
  190, 200,
];

console.log(a.slice(5, 15)); //it return the value from 5 positon which is included to the 15 position which is excluded
console.log(a.slice(15)); //it return all the element from the 15 position
console.log(a.slice(-15)); //it return last 15 element
