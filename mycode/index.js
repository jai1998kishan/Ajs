function fun(fun1) {
  console.log(`im in fun function`);
  fun1();
  //   console.log(`a = ${a}`); //error a is not define
}

function test() {
  let a = 10;
  console.log(`im in test function`);
}

fun(test);
