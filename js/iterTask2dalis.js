"use strict"; // here we go again

console.log("Iter 2 ");

class Person {
  constructor({ name, surname, age, height, weight, sex }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }
  //vidinis kmi metodas
  get kmi() {
    let kmiLong = this.weight / (this.height / 100) ** 2;
    return +kmiLong.toFixed(2);
  }
  toString() {
    let text = `
      Vardas: ${this.name}, 
      Pavarde: ${this.surname}, 
      Amzius: ${this.age}, 
      Ugis: ${this.height}, 
      Svoris: ${this.weight}, 
      Lytis: ${this.sex},
      `;
    console.log(text);
  }
}

// let testObj = {
//   name: "Arananas",
//   surname: "Baras",
//   age: 7,
//   height: 110,
//   weight: 40,
//   sex: "male",
// };

const personsArr = peopleObjs.map((perObj) => new Person(perObj));
// let pers1 = new Person(testObj);
console.table(personsArr);
console.groupCollapsed(
  "0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:"
);

let pirmas = personsArr[0];

console.log(pirmas.toString());
console.groupEnd();
console.log("");

console.groupCollapsed(
  "1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg "
);
// separate steps filter
let moterys = personsArr.filter((persObj) => persObj.sex === "female");
console.table(moterys);
let jaunesnes = moterys.filter((p) => p.age < 20);
console.table(jaunesnes);
let svor70 = jaunesnes.filter((p) => p.weight > 70);
console.log("svor70");

// filter chain ========
svor70 = personsArr
  .filter((p) => p.sex === "female")
  .filter((p) => p.age < 20)
  .filter((p) => p.weight > 70);
console.table(svor70);

console.groupEnd();
console.log("");

console.group("2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5");

let atrinktiVyrai = personsArr
  .filter((p) => p.sex === "male")
  .filter((p) => p.age > 25)
  .filter((p) => p.kmi < 18.5);
console.log("atrinktiVyrai");
console.table(atrinktiVyrai);

console.groupEnd();
console.log("");
