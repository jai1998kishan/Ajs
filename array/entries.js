//entries => generate an iterator which contains keys and value of itens

var a = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 110, 120, 130, 140, 150, 160, 170, 180,
  190, 200,
];

// for (let i of a.keys()) {
//   console.log(i);
// }

// for (let i of a.values()) {
//   console.log(i);
// }

for (let i of a.entries()) {
  console.log(i);
}
