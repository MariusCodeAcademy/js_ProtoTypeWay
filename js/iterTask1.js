"use strict"; // here we go again

// console.table(peopleObjs);
console.log(peopleObjs);

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
  return weight / (height / 100) ** 2;
}
console.clear();
peopleObjs.forEach(printKmi);

function printKmi(personObj) {
  let kmi = personObj.weight / (personObj.height / 100) ** 2;
  console.log(personObj.name, "km is:", kmi);
}
