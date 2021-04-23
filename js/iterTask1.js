"use strict"; // here we go again

// console.table(peopleObjs);
console.log(peopleObjs);

{
  // console.log("pirmas objektas", peopleObjs[0]);
  // console.log("antras objektas", peopleObjs[1]);
  peopleObjs.forEach((personObj) => {
    //   console.log(personObj);
  });

  peopleObjs.forEach((personObj) => console.log(personObj.name, personObj.surname));

  // kmi
  peopleObjs.forEach((personObj) => {
    // svoris padalinti is
    // (ugis padalinti is 100 ir pakelti kvadratu)
    // skaiciuojam vietoj
    let kmi = personObj.weight / (personObj.height / 100) ** 2;
    // panaudojam pagalbine kmi funkija
    kmi = caclKmi(personObj.weight, personObj.height);
    console.log(personObj.name, "km is:", kmi);
  });
  //pagalbine kmi funkija
  function caclKmi(weight, height) {
    let kmiLong = weight / (height / 100) ** 2;
    return +kmiLong.toFixed(2);
  }
  //   console.clear();
  peopleObjs.forEach(printKmi);

  function printKmi(personObj) {
    let kmi = personObj.weight / (personObj.height / 100) ** 2;
    console.log(personObj.name, "km is:", kmi);
  }
}
console.clear();
console.group("Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:");

let filtered = peopleObjs.filter((personObj) => {
  // gauti varda
  let vardas = personObj.name;
  // patikrinti ar vardas yra daugiau nei 6 simboliai
  // explicit varijantas kai mes tiksliai ir smulkiai aprasom
  //   if (vardas.length > 6) {
  if (isStringMorethan6(vardas)) {
    // jei taip grazinti true
    return true;
  }
  //   return vardas.length > 6;
});

function isStringMorethan6(str) {
  return str.length > 6;
}
console.log('isStringMorethan6("dfdf")', isStringMorethan6("dfdf"));

console.log("filtered", filtered);

let over80 = peopleObjs.filter((personObj) => personObj.weight > 80);
console.log("over80", over80);

let skyTowwers = peopleObjs.filter((personObj) => {});
console.log("skyTowwers", skyTowwers);

console.groupEnd();
console.log("");

function test(val) {
  // bang bang
  // jei reiksme yra uzpildyta truthy grazinam true
  // jei falsy grazinma false
  return !!val;
}
