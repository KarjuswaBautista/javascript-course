// // console.log("===FUNCTIONS===");
 
// // function logger() {
// //     console.log("My name is Karl!");
// // }
 
// // logger();
// // logger();
// // logger();
 
// // console.log("Part 2: Fuctions ready!");
 
// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }
 
// // const appleJuice = fruitProcessor(6, 0);
// // console.log(appleJuice);
 
// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);
 
// // const calcAge = function (birthYear) {
// //     return 2025 - birthYear;
// // }
 
// // const age1 = calcAge(2000);
// // console.log(age1);
 
// // console.log(calcAge(2002))
 
// // function greetStudent(studentName) {
// //     const greetName = `Hello ${studentName}, welcome to JavaScript!`;
// //     return greetName;
// // }
 
// // const greetings = greetStudent("Karl Joshua");
// // console.log(greetings);
 
// // function addNumbers(a, b) {
// //     const addNum = a + b;
// //     return addNum;
// // }
 
// // function introduction(fName, lName, agee) {
// //     const introduction = `Hi I'm ${fName} ${lName}, and I'm ${agee} years old!`
// //     return introduction;
// // }
 
// // console.log(introduction("Karl", "Bautista", 23));
 
// // const addTest = addNumbers(3, 3);
// // console.log(addTest);
 
// // function multiplyNumbers(a, b) {
// //     const addNum = a * b;
// //     return addNum;
// // }
 
// // const multiplyTest = multiplyNumbers(3, 3);
// // console.log(multiplyTest);
 
// // console.log(multiplyNumbers(3, 1));
 
// // const addNumbers2 = function (a, b) {
// //     return a + b;
// // }
 
// // console.log(addNumbers(5, 5));
 
// // function yearsUntilRetirement(birthYear, firstName) {
// //     const age = calcAge(birthYear);
// //     const retirement = 65 - age;
// //     if (retirement > 0) {
// //         return `${firstName} retires in ${retirement} years.`
// //     } else {
// //         return `${firstName} has already retired.`
// //     }
// // }
 
// // console.log(yearsUntilRetirement(2002, "Karl"));
 
// // // function scope
// // // const globalVar = "I am global!"
 
// // // function testScope() {
// // //     const localVar = "I am local!";
// // //     console.log(localVar);
// // //     console.log(globalVar);
// // // }
 
// // // testScope();
// // // console.log(globalVar);
// // // console.log(localVar):
 
// // function calcAverage(score1, score2, score3) {
// //     const calcAverage = (score1 + score2 + score3)/3;
// //     return calcAverage;
// // }
 
// // function checkWinner(dolphinAverage, koalaAverage) {
// // if (dolphinAverage >= (koalaAverage * 2)) {
// //     return `Dolphins win! (${dolphinAverage} vs. ${koalaAverage})`;
// // } else if (koalaAverage >= (dolphinAverage * 2)){
// //     return `Koalas win! (${koalaAverage} vs. ${dolphinAverage})`;
// // } else {
// //     return `No team wins! Dolphins: ${dolphinAverage}, Koalas: ${koalaAverage}`;
// // }
// // }
 
// // let scoreDolphins = calcAverage(200, 100, 100);
// // let scoreKoalas = calcAverage(65, 54, 49);
// // console.log(checkWinner(scoreDolphins, scoreKoalas));
 
 
// const grades = [85, 92, 78, 96, 88];
// console.log(grades);
 
// const friends = ["Michael", "Steve", "Peter"];
// console.log(friends);
 
// const mixed = ["Jonas", 40, false, friends];
 
// console.log(mixed);
 
// const years = new Array(2001, 2002, 2003, 2004);
 
// console.log(years);
 
// //Accessing array elements
 
// console.log(friends[0]);
// console.log(friends[2]);
 
// //access the lenk
// console.log(friends.length);
// friends[0] = "Jay";
// console.log(friends[0]);
// console.log(friends);
 
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }
 
// const ages = [calcAge(2001), calcAge(2002), calcAge(2003)]
// console.log(ages);
 
// friends.push("Mark");
 
// console.log(friends);
 
// friends.shift([0]);
 
// console.log(friends);
 
// const fruitBasket = ["apple", "bananna"];
 
// fruitBasket.push("orange");
// fruitBasket.unshift("grape");
// console.log(fruitBasket);
// fruitBasket.pop();
// console.log(fruitBasket);
// console.log(fruitBasket.includes("bananna"));
// console.log(fruitBasket.indexOf("grape"));
// console.log(fruitBasket);
 
// const nums = [1,2,3,4,5,6,7,8,9];
 
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
// }
 
// const yearz = [2002, 2003, 2004, 2005, 2006];
// const agez = [];
 
// for (let i = 0; i < yearz.length; i++) {
//     agez.push(2025 - yearz[i]);
// }
 
// console.log(agez);
 
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });
 
 
// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;
 
// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }
 
const studentGrades = [78, 85, 92, 67, 88, 95, 73, 82];
let total = 0;
let highestGrade = [0];
 
for (let i = 0; i < studentGrades.length; i++) {
    total += studentGrades[i];
}
 
function calculateAverage(grades) {
    return grades/studentGrades.length;
}
 
 
for (let i = 1; i < studentGrades.length; i++) {
    if (studentGrades[i] > highestGrade) {
        highestGrade = studentGrades[i];
    }
}