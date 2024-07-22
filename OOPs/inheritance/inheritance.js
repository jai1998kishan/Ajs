/*
Inheritance is the ability to create classes based on other classes. With inheritance, we can define a parent class (with certain properties and methods), and then children classes that will inherit from the parent class all the properties and methods that it has.

*/

// class Bug {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`i'm attacking with a power of ${this.power} !`);
// }

// class Robot {
//   constructor(name, phrase, power) {
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//     this.species = "robot";
//   }
//   transform = () => console.log("optimus prime!");
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with power of ${this.power}!`);
// }

// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 10);
// const Robot1 = new Robot("Tito", "I can cook, swin and dance!", 15);

// console.log(bug1.power);
// Robot1.attack();
// bug1.attack();

/* 
But you can see we're repeating code, and that's not optimal. A better way would be to declare a parent "Enemy" class which is then extended by all enemy species, like this:
*/

// class Enemy {
//   constructor(power) {
//     this.power = power;
//   }
//   attack = () => console.log(`I'm attacking with power of ${this.power}`);
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power) {
//     super(power);
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "alien";
//   }
//   fly = () => console.log("Zzzzzzzzzzzzziiiiiiiiigggg!!");
//   sayPhrase = () => console.log(this.phrase);
// }

/*
See that the enemy class looks just like any other. We use the constructor method to receive parameters and assign them as properties, and methods are declared like simple functions.

On the children class, we use the extends keyword to declare the parent class we want to inherit from. Then on the constructor method, we have to declare the "power" parameter and use the super function to indicate that property is declared on the parent class.
*/

// const alien1 = new Alien("Moto", "I'm Moto the alien", 10);
// const alien2 = new Alien("Rocky", "Run for your lives!", 15);

// alien1.attack();
// console.log(alien2.power);

/*
Now let's say we want to add a new parent class that groups all our characters (no matter if they're enemies or not), and we want to set a property of "speed" and a "move" method. We can do that like this:
*/

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//   constructor(power, speed) {
//     super(speed);
//     this.power = power;
//   }
//   attack = () => console.log(`I'm attacking with power of ${this.power}`);
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(power, speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.species = "alien";
//   }
//   fly = () => console.log("Zzzziiiinnnngggg!!!");
//   sayPhrase = () => console.log(this.phrase);
// }

// const alien1 = new Alien("moto", "I'm moto the alien", 10, 50);
// const alien2 = new Alien("rocky", "Run for your lives", 15, 60);

// alien1.move();
// console.log(alien2.speed);

//Now that we know more about inheritance, let's refactor our code so we avoid code repetition as much as possible:

// class Character {
//   constructor(speed) {
//     this.speed = speed;
//   }
//   move = () => console.log(`I'm moving at the speed of ${this.speed}`);
// }

// class Enemy extends Character {
//   constructor(name, phrase, power, speed) {
//     super(speed);
//     this.name = name;
//     this.phrase = phrase;
//     this.power = power;
//   }
//   sayPhrase = () => console.log(this.phrase);
//   attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "alien";
//   }
//   fly = () => console.log("ZZZZzzziiiinnnggg!!");
// }

// class Bug extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
// }

// class Robot extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "robot";
//   }
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);
// const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);
// const bug2 = new Bug("Erik", "I drink decaf!", 5, 120);
// const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30);
// const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40);

// alien1.move();
// console.log(alien2.speed);
// alien1.attack();
// console.log(alien2.power);
// console.log(bug1.power);
// Robot1.attack();
// bug1.attack();

//-------------------------------------------------------------

/*
Let's say we want the attack method to do a different thing in our Alien class. We can override it by declaring it again, like this:
 */

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

class Alien extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "alien";
  }
  fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
  attack = () => console.log("Now I'm doing a different thing, HA!"); // Override the parent method.
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
alien1.attack(); // output: "Now I'm doing a different thing, HA!"
