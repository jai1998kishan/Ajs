/*
Object composition is a technique that works as an alternative to inheritance.

When we talked about inheritance we mentioned that child classes always inherit all parent methods and properties. Well, by using composition we can assign properties and methods to objects in a more flexible way than inheritance allows, so objects only get what they need and nothing else.
 */

/*
We can implement this quite simply, by using functions that receive the object as a parameter and assign it the desired property/method. Let's see it in an example.

Say now we want to add the flying ability to our bug characters. As we've seen in our code, only aliens have the fly method. So one option could be to duplicate the exact same method in the Bug class:
*/

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
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
// }

// class Bug extends Enemy {
//   constructor(name, phrase, power, speed) {
//     super(name, phrase, power, speed);
//     this.species = "bug";
//   }
//   hide = () => console.log("You can't catch me now!");
//   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!"); // We're duplicating code =(
// }

/*
Another option would be to move the fly method up to the Enemy class, so it can be inherited by both the Alien and Bug classes. But that also makes the method available to classes that don't need it, like Robot.
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
  //   fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!");
}

class Alien extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "alien";
  }
}

class Bug extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "bug";
  }
  hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
  constructor(name, phrase, power, speed) {
    super(name, phrase, power, speed);
    this.species = "robot";
  }
  transform = () => console.log("Optimus prime!");
  // I don't need the fly method =(
}

/*
As you can see, inheritance causes problems when the starting plan we had for our classes changes (which in the real world is pretty much always). Object composition proposes an approach in which objects get properties and methods assigned only as they need them.
 */

/*
In our example, we could create a function and its only responsibility would be to add the flying method to any object that receives as parameter:
 */

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);

const addFlyingAbility = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

addFlyingAbility(bug1);
bug1.fly(); // output: "Now Buggy can fly!"
console.log(bug1);

/*
And we could have very similar functions for each power or ability we may want our monsters to have.

As you can surely see, this approach is a lot more flexible than having parent classes with fixed properties and methods to inherit. Whenever an object needs a method, we just call the corresponding function and that's it.👌
 */
