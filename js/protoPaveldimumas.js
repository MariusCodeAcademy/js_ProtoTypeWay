"use strict;";
console.log("Proto paveldimumas");

// class budu
// 1 sukurti klase User
// uzpildyti name ir email sukurimo metu inicijuoti savybe online lygia false
//
// prideti metoda login ir logout
// metodas pakeicia savybe online i atitinkama ir iskonsole loginam
// email@emai.lt prisijunge
// email@emai.lt atsijunge

// 2 sukuriam klase Admin
// Admin praplecia User, turi papildoma savybe sritis pvz 'Web', 'Network'
// papidoma metoda delete user gauna useri ir atspasdina kad "email@emai.lt buvo istrintas"

// =====================================================
// Class budu ===================================================
//===================================================
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.online = false;
//   }

//   logIn() {
//     this.online = true;
//     console.log(`${this.email} prisijunge`);
//   }

//   logOut() {
//     this.online = false;
//     console.log(`${this.email} atsijunge`);
//   }
// }

// class Admin extends User {
//   constructor(name, email, sritis) {
//     super(name, email);
//     this.sritis = sritis;
//   }

//   deleteUser(user) {
//     if (user instanceof User) {
//       console.log(`Vartotojas ${user.email} buvo istrintas.`);
//     } else {
//       throw new Error("Tokio userio nera");
//     }
//   }
// }

// const admin1 = new Admin("Admin", "admin@admin.com", "Network");
// admin1.logIn();
// console.log("admin1", admin1);
// admin1.deleteUser(u1);

// 1K perrasyti Useri su konstruktoriaus funkcija
// =====================================================
// Prototype budu konstruktoriau funkcijos ===================================================
//===================================================

function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.logIn = function () {
  this.online = true;
  console.log(`${this.email} prisijunge`);
};
User.prototype.logOut = function () {
  this.online = false;
  console.log(`${this.email} atsijunge`);
};

const u1 = new User("Jane", "Jane@gmail.com");
const u2 = new User("Mark", "Bob@gmail.com");
console.log(u1, u2);
u1.logIn();

function Admin(sritis, ...args) {
  // iskviesti tevines funkcijos konstruktorius
  User.apply(this, args);
  //   User.call(this, name, email); // super(name, email)
  this.sritis = sritis;
}
// DRY - Dont repeat yourself
// KISS - Keep it Simple Stupid
// Object.create(blueprint) - sukuriam nauja objekta pagal argumetu gauta objekta
Admin.prototype = Object.create(User.prototype); // extends User Metodus

Admin.prototype.deleteUser = function (user) {
  if (user instanceof User) {
    console.log(`Vartotojas ${user.email} buvo istrintas.`);
  } else {
    throw new Error("Tokio userio nera");
  }
};

const admin1 = new Admin("Network", "Admin", "admin@admin.com");

admin1.logIn();
console.log("admin1", admin1);
admin1.deleteUser(u1);
// u1.deleteUser(u2);
