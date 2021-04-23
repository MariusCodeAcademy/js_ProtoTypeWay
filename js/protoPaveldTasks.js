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
{
  function Person(name, email, birthYear) {
    LivingThing.call(this, birthYear);
    this.vardas = name;
    this.elPastas = email;
  }
  Person.prototype = Object.create(LivingThing.prototype);
  Person.prototype.amzius = function () {
    let now = new Date();
    let amzius = now.getFullYear() - this.birthYear;
    return amzius;
  };
  Person.prototype.personInfo = function () {
    console.log(`Vardas: ${this.vardas}, elPastas: ${this.elPastas}  amzius: ${this.amzius()} `);
  };
  Person.prototype.email = function () {
    console.log(`noredami siusti el pasta ${this.vardas} siuskite ${this.elPastas} adresu`);
  };
  console.groupCollapsed("Person");
  const per1 = new Person("James", "jj@j.com", 1980);
  per1.personInfo();
  per1.born();
  per1.email();
  console.groupEnd();
  console.log("");
}

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
Student.prototype.avg = function () {
  // pasiimam pazymiu masyva ir
  // apskaiciuojam vidurki
  let ilgis = this.grades.length;
  let avg = this.grades.reduce((totalAvg, num) => totalAvg + num / ilgis, 0);
  console.log("vidurkis", avg);
  return avg;
};
Student.prototype.personInfo = function () {
  console.log(`Studentas: ${this.vardas}, elPastas: ${this.elPastas}  
  amzius: ${this.amzius()} studijuoja ${this.uni} ir jo vidurkis yra ${this.avg().toFixed(2)}`);
};
console.groupCollapsed("Student");
let pazymiai = [6, 8, 8, 4, 6, 10, 9];
const st1 = new Student("Mike", "mike@tyson.com", 1965, "KTU", pazymiai);
console.log("st1", st1);
st1.email();
st1.personInfo();
// console.clear();
st1.avg();
console.groupEnd();
console.log("");

// 4. sukurti konstruktoriaus funkcija Zinduolis praplecia LivingThing
// pridedam savybe rusis
// metodas info atspaudina koks amziu ir kokios rusies zinduolis
function Zinduolis(rusis, ...args) {
  LivingThing.apply(this, args);
  this.rusis = rusis;
}
// const zin1 = new Zinduolis("Katinas", 2010);
// console.log("zin1", zin1);
console.groupCollapsed("Animals");
// 5 sukurti 2 LivingThingus, 3 Zinduolius, atspausdinti zinduoliu info
let lt1 = new LivingThing(1900);
let lt2 = new LivingThing(1950);
let ltArr = [1900, 1950, 1952].map((lt) => new LivingThing(lt));
console.log("ltArr", ltArr);

let zin1 = new Zinduolis("Briedis", 2000);
let zin2 = new Zinduolis("Stirna", 2001);
let zin3 = new Zinduolis("Sheep", 2010);
console.log(zin1, zin2, zin3);
console.groupEnd();
console.log("");

console.group("6 sukurti 2 Person, 4 Studentus masyve. atspausdinti personInfo Studentu ir Asmenu");
// 6 sukurti 2 Person, 4 Studentus masyve. atspausdinti personInfo Studentu ir Asmenu
const studentsArr = [
  new Student("Mike", "mike@tyson.com", 1965, "KTU", [5, 7, 6]),
  new Student("James", "James@Blue.com", 1995, "VGTU", [4, 10, 10]),
  new Student("Marry", "Marry@Blue.com", 2005, "VGTU", [10, 10, 10]),
  new Student("Bob", "Bob@Stone.com", 2010, "VGTU", [7, 8, 7]),
];
console.groupEnd();
console.log("");
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
