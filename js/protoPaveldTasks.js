"use strict;";
console.log("paveld Proto Tasks");

// neaudoti CLASS zodelio
// 1. Sukurti LivingThing konstruktoriaus funkcija
// argumentu uzpildyti birthYear savybe
function LivingThing(birthYear) {
  this.birthYear = birthYear;
}
LivingThing.prototype.born = function () {
  console.log("I was born in ", this.birthYear);
};

// 2. sukurti Person konstruktoriaus funkcija kuri paveldi LivingThing
// argumentu paduosi vardas ir email
// metodas personInfo kuris atspausdina varda email ir kiek metu
// metodas email() kuris grazina "noredami siusti el pasta <vardas> siuskite <email> adresu"
function Person(name, email, birthYear) {
  LivingThing.call(this, birthYear);
  this.vardas = name;
  this.elPastas = email;
}
Person.prototype = Object.create(LivingThing.prototype);
Person.prototype.personInfo = function () {
  let now = new Date();
  let amzius = now.getFullYear() - this.birthYear;
  console.log(`Vardas: ${this.vardas}, elPastas: ${this.elPastas}  amzius: ${amzius} `);
};
Person.prototype.email = function () {
  console.log(`noredami siusti el pasta ${this.vardas} siuskite ${this.elPastas} adresu`);
};

const per1 = new Person("James", "jj@j.com", 1980);
per1.personInfo();
per1.born();
per1.email();

// 3. sukurti Student konstruktoriaus funkcija praplecia Person;
// papildomai prideam savybe Universitas.
// ir masyva pazymiai (sk masyvas apie 8 el ilgio)
// metodas paskaiciuoti vidurkui
// perrasyti personInfo kad prideti is kokio universiteto ir koks vidurkis

// 4. sukurti konstruktoriaus funkcija Zinduolis praplecia LivingThing
// pridedam savybe rusis
// metodas info atspaudina koks amziu ir kokios rusies zinduolis

// 5 sukurti 2 LivingThingus, 3 Zinduolius, atspausdinti zinduoliu info
// 6 sukurti 2 Person, 4 Studentus masyve. atspausdinti personInfo Studentu ir Asmenu
// 7 sukurtiem Studentam iskviesti Email metoda ciklo budu
// 8 parasyti funkcija kuri pasiima studentu masyva ir grazina kiekvieno studento varda ir
// vidurki objektu masyvo pavidalu
