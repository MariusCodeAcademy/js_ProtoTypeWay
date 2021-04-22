"use strict";
console.log("protoTask");

//nekuriam nieko su zodeliu "class" !!!!!!

// 1. sukuri clase (construktoriau funkcijos budu) Darbuotojas
// sukuriant nauja objekta pagal sia klase mes uzpildom varda, pavarde
// priskiriam metodus
// grazinti pilnam vardui
// grazinti emailui vardas.pavarde@kompanija.com
function Darbuotojas(vard, pavard) {
  this.vardas = vard;
  this.pavarde = pavard;
}
Darbuotojas.prototype.fullName = function () {
  console.log(`${this.vardas} ${this.pavarde}`);
};
Darbuotojas.prototype.email = function () {
  console.log(`${this.vardas.toLowerCase()}.${this.pavarde.toLowerCase()}@kompanija.com`);
};

const d1 = new Darbuotojas("James", "Light");
console.log("d1", d1);
d1.fullName();
d1.email();

// sukurti keleta darbuotoju ir pasibandyti ar veikia

//2 kuriam Circle clase (construktoriau funkcijos budu)
// priima argumentru spinduli
// sukuriam metodus gauti plotui
// perimetrui 2 Pi r
// diametrui
function Circle(spindulys) {
  this.r = spindulys;
  this.diametras = spindulys * 2;
}
// prideam ploto apskaiciavima i Cirke prototipa
Circle.prototype.plotas = function () {
  return Math.PI * this.r ** 2;
};
Circle.prototype.perimetras = function () {
  return Math.PI * this.r * 2;
};
const aps1 = new Circle(5);
const aps2 = new Circle(10);
// console.log("aps1", aps1);
// console.log("aps1.plotas", aps1.plotas());
// console.log("aps1.plotas", aps1.perimetras());

// 3 sukuriam konstruktoriau funkcijos budu klase Knyga
// sukuriant objekta paduodam pavadinima ir autoriu
// sukurti 2 metodus
// koksAutorius() -> Atorius: Tolstojus
// kokiaKnyga() -> Knygos Pavadinimas: Karas ir taika

// 4 Sukurti konstruktoriaus funkcija Skaiciuotuvas
// priimti 3 reiksmes kaip savybes
// sukurti metodus kurie
// sudeda visas reiksmes ir grazina rez
// sudeda pirmas dvi ir atima paskutine ir grazina rez
// sudaugina visas reiksmes ir padalina is naujai argumentu paduotos reiksmes
// pvz sk1.divideBy(13)
// let sk1 = new Skaiciuotuvas(1, 3, 5)
// sk1.divideBy(10)
// sk1.divideBy(14)

function Skaiciuotuvas(n1, n2, n3) {
  this.num1 = n1;
  this.num2 = n2;
  this.num3 = n3;
}
Skaiciuotuvas.prototype.suma = function () {
  return this.num1 + this.num2 + this.num3;
};
Skaiciuotuvas.prototype.divideBy = function (isKiekPadalinti) {
  return (this.num1 * this.num2 * this.num3) / isKiekPadalinti;
};

// sukuriam objekta
const sk1 = new Skaiciuotuvas(1, 5, 10);

console.log("sk1.suma()", sk1.suma());
console.log("sk1.divideBy(25)", sk1.divideBy(25));

// 5. Sukurti konstruktoriaus klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina
// metodai :
// autoInfo()
// nustatytiKaina(400)
// padaryti didejanti Id => auto1, auto2 ir ttt

// 6 skukurti AutoParduotuves klase kaip ir darem pries tai tik padaryti
//konstruktoriaus funkcijos budu
//Sukurkite klase AutoParduotuve
// sukurimo metu sukurkite savybe parduodamiAutomobiliai tuscia masyva
// ir priima pavadinma argumentu new AutoParduotuve('bestCars')
// saskaitos funkcionalumo galime nekartoti
// let count = 0;
function Automob(make) {
  this.make = make;
  this.id = "auto_" + ++Automob.count;
  //   count++;
}
// sukuriam statine savybe
// galima ir statini metoda
Automob.count = 0;
const a1 = new Automob("Bm2");
const a2 = new Automob("MB3");
// console.log("a1", a1);
// console.dir(Automob);
