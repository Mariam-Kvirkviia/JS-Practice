// let obj = {
//   mari: "persone",
//   dfd: "fd",
//   koka: "persone",
//   dfrd: "dfd",
// };
// let personne = Object.entries(obj)
//   .filter((item) => item[1] === "personne")
//   .map((item) => item[0]);
// console.log(personne);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let me = new User("mashsa", 23);
// console.log(me);

// var numbers = {
//   array: [3, 5, 10],
//   getNumbers: function () {
//     return this.array;
//   },
// };
// // Create a bound function
// var boundGetNumbers = numbers.getNumbers.bind(numbers);
// console.log(boundGetNumbers()); // => [3, 5, 10]
// // Extract method from object
// console.log(numbers.getNumbers());//=> [3, 5, 10]
// var simpleGetNumbers = numbers.getNumbers;

// console.log(simpleGetNumbers());//=>undefined

//RegExp
//let ans = prompt("your name");
let reg = /\D/g;
//console.log(ans.search(reg));
//console.log(ans.match(reg));

//console.log("09-12-22".replace(/-/g, ":"));
//console.log(ans.match(reg));