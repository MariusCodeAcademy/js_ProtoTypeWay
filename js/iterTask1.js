"use strict"; // here we go again

// console.table(peopleObjs);
console.log(peopleObjs);

//helper fns
//pagalbine kmi funkija
function calcKmi(weight, height) {
  let kmiLong = weight / (height / 100) ** 2;
  return +kmiLong.toFixed(2);
}

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
    kmi = calcKmi(personObj.weight, personObj.height);
    console.log(personObj.name, "km is:", kmi);
  });

  //   console.clear();
  peopleObjs.forEach(printKmi);

  function printKmi(personObj) {
    let kmi = personObj.weight / (personObj.height / 100) ** 2;
    console.log(personObj.name, "km is:", kmi);
  }
}
console.clear();
console.group("Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:");

{
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

  let skyTowwers = peopleObjs.filter((personObj) => personObj.height > 185);
  console.log("skyTowwers", skyTowwers);

  console.groupEnd();
  console.log("");

  function test(val) {
    // bang bang
    // jei reiksme yra uzpildyta truthy grazinam true
    // jei falsy grazinma false
    return !!val;
  }
}
{
  console.clear();

  console.group("map");
  let ugiai = peopleObjs.map((p) => p.height);
  console.log(ugiai);

  // [{height, weight, age}, ...]
  let hwa = peopleObjs.map(({ height, weight, age }) => {
    // let { height, weight, age } = p
    return {
      height,
      weight,
      age,
    };
  });
  // one line
  let hwaOneLine = peopleObjs.map(({ height, weight, age }) => ({ height, weight, age }));

  console.log("hwa", hwa);
  console.log("hwaOneLine", hwaOneLine);

  // KMI index
  let kmiIndex = peopleObjs.map((p) => calcKmi(p.weight, p.height));
  console.log("kmiIndex", kmiIndex);
  // object destruct
  kmiIndex = peopleObjs.map(({ age: a, weight: w, height: h }) => ({ age: a, kmi: calcKmi(w, h) }));

  console.log("kmiIndex amzius", kmiIndex);
  console.groupEnd();
  console.log("");
}

{
  // lets reduce
  console.table(peopleObjs);
  console.group("Reduce");
  // susumuoti visus amzius
  let amziai = peopleObjs.map(({ age }) => age);
  console.log("amziai", amziai);
  // amziai  [7, 17, 77, 27, 37, 39, 27, 17]
  let sum = amziai.reduce((total, sk) => total + sk, 0);
  console.log("sum", sum);

  // oneline
  let amziuSuma = peopleObjs.map(({ age }) => age).reduce((total, sk) => total + sk, 0);
  console.log("amziuSuma", amziuSuma);

  // one line no map
  amziuSuma = peopleObjs.reduce((total, obj) => total + obj.age, 0);
  console.log("amziuSuma no map", amziuSuma);

  //svoriu vidurkis
  // amziai  [7, 17, 77, 27, 37, 39, 27, 17] reduce vidrkis 7/8 + 17/8 + 77/8 ....
  // let svoriuVidurkis = peopleObjs.reduce((avg, pObj) => avg + pObj.weight / peopleObjs.length, 0);
  let svoriuSuma = peopleObjs.reduce((avg, pObj) => avg + pObj.weight, 0);
  let svoriuVidurkis = svoriuSuma / peopleObjs.length;
  console.log("svoriuVidurkis", svoriuVidurkis);

  // kiek amziu gyventu zmogus jei tai butu vienas zmogus
  // let kiekAmziu = amziuSuma / 100;
  let kiekAmziu = peopleObjs.reduce((total, obj, index, arr) => {
    // if (index === 2) return total;
    return total + obj.age / 100;
  }, 0);

  console.log("kiekAmziu", kiekAmziu);

  console.groupEnd();
  console.log("");
}
