//it stands for an object's capacity to "decide" which information it exposes to "the outside" and which it doesn't. Encapsulation is implemented through public and private properties and methods.

//In JavaScript, all objects' properties and methods are public by default.

class Character {
  constructor(speed) {
    this.speed = speed;
  }
  move = () => console.log(`I'm moving at the speed of ${this.speed}`);
}
class Enemy extends Character {
  constructor(name, phrase, power, speed) {
    super(speed);
    this.name = name;
    this.phrase = phrase;
    this.power = power;
  }
  sayPhrase = () => console.log(this.phrase);
  attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

// Here's our class
// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//   }
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
// }

// // Here's our object
// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);

// // Here we're accessing our public properties and methods
// console.log(alien1.name); // output: Ali
// alien1.sayPhrase(); // output: "I'm Ali the alien!"

//-------------------------------------------------------------
//How to make private

//To make this clearer, let's see how private properties and methods look like.

// Let's say we want our Alien class to have a birthYear property, and use that property to execute a howOld method, but we don't want that property to be accessible from anywhere else other than the object itself. We could implement that like this:

class Alien extends Enemy {
  #birthYear; // We first need to declare the private property, always using the '#' symbol as the start of its name.\

  constructor(name, phrase, power, speed, birthYear) {
    super(name, phrase, power, speed, birthYear);
    this.species = "alien";
    this.#birthYear = birthYear; // Then we assign its value within the constructor function
  }
  fly = () => console.log("ZZZZZzzzzziiiiinnnngggg!!!");
  howOld = () => console.log(`I was born in ${this.#birthYear}`); // and use it in the corresponding method.
}

//We instantiate the same way we always do
const alien1 = new Alien("mahi", "I'm mahi the alien", 10, 50, 10000);

//Then we can access the howOld method, like this:
alien1.howOld();

console.log(alien1);
// console.log(alien1.#birthYear);   //this throws an error
console.log(alien1.birthYear); //this will show undefined because we never defined birthYear

//Encapsulation is useful in cases where we need certain properties or methods for the inner working of the object, but we don't want to expose that to the exterior. Having private properties/methods ensures we don't "accidentally" expose information we don't want.
