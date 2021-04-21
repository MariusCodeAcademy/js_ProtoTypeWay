"use strict";
console.log("Prototype");
// kaip atrodo objektai ir su kokiai prototipais jie yra sujungti
let simple = {
  kind: "Bluebry",
  color: "green",
  greet: function () {
    console.log("Hi my color is", this.color);
  },
};

console.log("simpleObject", simple);
// simple.greet();
simple.toString();

let outArr = [1, 3, 3];
// Array.prototype.map()
// console.log("outArr", outArr);

// Paprastas klases pavyzdys ES6 versijos
// syntactic sugar - sintakses pagrazinimas arba supaprastinimas
// class Person {
//   name = "Jason";
//   constructor() {
//     this.age = "41";
//   }
//   greet() {
//     console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
//   }
// }

// Prototio budas kurti objektus su konstruktoriaus funkcija
// konstruktoriaus funcija
function Person() {
  // this = {}
  this.name = "Jason";
  this.age = 41;
  // cia issaugotas metodas butu perkialiamas i kiekviena sukurtas nauja objekta
  // kas yra skaitoma bloga praktika.
  this.greet = function () {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  };
  //   return this;
}

// Irasom greet metoda i kiekvina naujai sukurta objekta pagal contruktoriau funckija
// priskiriam Person prototipio greet metoda
// budas priskirti metodus construktoriaus funcijos objektam.
Person.prototype.printAge = function () {
  console.log(this.age);
};

// Array.prototype.clone = function () {
//   console.log("clonas sukurtas sekmingai");
// };

const p1 = new Person();
console.log("p1", p1);
p1.greet();
p1.printAge();
