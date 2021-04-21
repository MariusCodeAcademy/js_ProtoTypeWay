"use strict";
console.log("protoTask");

//nekuriam nieko su zodeliu "class" !!!!!!

// 1. sukuri clase (construktoriau funkcijos budu) Darbuotojas
// sukuriant nauja objekta pagal sia klase mes uzpildom varda, pavarde
// priskiriam metodus
// grazinti pilnam vardui
// grazinti emailui vardas.pavarde@kompanija.com

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
const aps1 = new Circle(5);
const aps2 = new Circle(10);
console.log("aps1", aps1);
console.log("aps1.plotas", aps1.plotas());

// 3 sukuriam konstruktoriau funkcijos budu klase Knyga
// sukuriant objekta paduodam pavadinima ir autoriu
// sukurti 2 metodus
// koksAutorius() -> Atorius: Tolstojus
// kokiaKnyga() -> Knygos Pavadinimas: Karas ir taika
