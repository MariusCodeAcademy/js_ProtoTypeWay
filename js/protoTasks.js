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
Circle.prototype.perimetras = function () {
  return Math.PI * this.r * 2;
};
const aps1 = new Circle(5);
const aps2 = new Circle(10);
console.log("aps1", aps1);
console.log("aps1.plotas", aps1.plotas());
console.log("aps1.plotas", aps1.perimetras());

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

// 5. Sukurti konstruktoriaus klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina
// metodai :
// autoInfo()
// nustatytiKaina(400)
// padaryti didejanti Id => auto1, auto2 ir ttt
