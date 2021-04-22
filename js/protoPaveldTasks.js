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
function Student(name, email, birthYear, university, grades) {
  Person.call(this, name, email, birthYear);
  this.uni = university;
  this.grades = grades;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.avg = (function () {
  // pasiimam pazymiu masyva ir
  // apskaiciuojam vidurki
  console.log("vidurkis");
})();
let pazymiai = [6, 8, 8, 4, 6, 10, 9];
const st1 = new Student("Mike", "mike@tyson.com", 1965, "KTU", pazymiai);
console.log("st1", st1);
st1.email();
st1.personInfo();
st1.avg;

// 4. sukurti konstruktoriaus funkcija Zinduolis praplecia LivingThing
// pridedam savybe rusis
// metodas info atspaudina koks amziu ir kokios rusies zinduolis
function Zinduolis(rusis, ...args) {
  LivingThing.apply(this, args);
  this.rusis = rusis;
}
const zin1 = new Zinduolis("Katinas", 2010);
console.log("zin1", zin1);

// 5 sukurti 2 LivingThingus, 3 Zinduolius, atspausdinti zinduoliu info
// 6 sukurti 2 Person, 4 Studentus masyve. atspausdinti personInfo Studentu ir Asmenu
// 7 sukurtiem Studentam iskviesti Email metoda ciklo budu
// 8 parasyti funkcija kuri pasiima studentu masyva ir grazina kiekvieno studento varda ir
// vidurki objektu masyvo pavidalu
// 9 sukurti gyvunus is masyvu
let zinduoliuMasyvas1 = [
  { kind: "katinas", yearB: 2010 },
  { kind: "suo", yearB: 2012 },
  { kind: "briedis", yearB: 2015 },
  { kind: "asilas", yearB: 2011 },
  { kind: "kengura", yearB: 2017 },
];

let zinduoliuMasyvas2 = [
  { katinas: 2010 },
  { suo: 2012 },
  { briedis: 2015 },
  { asilas: 2011 },
  { kengure: 2017 },
];
