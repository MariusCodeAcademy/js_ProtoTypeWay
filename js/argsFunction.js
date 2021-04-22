"use strict;";
console.log("Args");

function addNums(divideBy, ...args) {
  // args yra masyvas kuriam yra visi musu paduoti argumentai
  console.log("args", args);
  //   console.log(arguments); old way
  console.log("divideBy", divideBy);

  let res = args.reduce((total, num) => total + num);
  res = res / divideBy;
  console.log("suma", res);
}

addNums(10, 1, 2);

// norim kad musu funkcija sumuotu tiek argumentu kiek mes jai paduosim,
// bet nesvargu kiek
addNums(10, 1, 2, 5);
addNums(7, 1, 2, 5, 10);
