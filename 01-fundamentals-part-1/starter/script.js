// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!
 
// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log(js);
 
// // console.log("=== Variables ===");
 
// // let firstName = "Jonas";
// // console.log(firstName);
 
// // let age = 30;
// // age = 31;
// // console.log(age);
 
// // const birthYear = 2002;
// // console.log(birthYear);
 
// // const PI = 3.1415;
// // console.log(PI);
 
// // var job = "programmer";
// // job = "teacher";
// // console.log(job);
 
// // const country = "Portugal";
// // const language = "Portuguese";
// // const population = 10;
 
// // console.log(country);
// // console.log(language);
// // console.log(population);
 
// // console.log("=== DATA TYPES ===");
 
// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);
 
// // let lastName = "Bautista";
// // console.log(lastName);
// // console.log(typeof lastName);
 
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);
 
// // let year;
// // console.log(year);
// // console.log(typeof year);
 
// // let dynamicVariable = 40;
// // console.log(dynamicVariable, typeof dynamicVariable);
 
// // dynamicVariable = "I Am Now A String";
// // console.log(dynamicVariable, typeof dynamicVariable);
 
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);
 
// // console.log("=== MATH OPERATORS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
 
// // console.log(ageJonas, ageSarah);
 
// // console.log(ageJonas*2, ageJonas/10, 2**3)
 
// // console.log("Math Operations");
// // console.log("Addition: ", 10 + 5);
// // console.log("Subtraction: ", 20 - 8);
// // console.log("Multiplication: ", 4 * 7);
// // console.log("Division: ", 15/3);
// // console.log("Exponent: ", 2 ** 3);
 
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);
// // console.log("Hello " + "World" + "!");
 
// // console.log("=== ASSIGNMENT OPERATORS ===");
// // let x = 10 + 5;
// // console.log("x starts as: ", x)
 
// // x += 10;
// // console.log(x);
 
// // x *= 4;
// // console.log(x);
 
// // x /= 2;
// // console.log(x);
 
// // x++;
// // console.log(x);
 
// // x--;
// // x--;
// // console.log(x)
 
// // console.log("=== COMPARISON ===");
 
// // console.log("Age Comparison")
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);
 
// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is an Adult: "+ isFullAge)
 
// // console.log("Complex Comparison")
// // console.log(now - 1991 > now -2018);
 
// // console.log("=== OPERATION PRECENDENCE ===");
 
// // let x, y;
// // x = y = 25 - 10 - 5;
// // console.log(x, y);
 
// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);
 
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;
 
// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / (johnHeight * johnHeight);
 
// let markHigherThanJohn = markBMI > johnBMI;
 
// console.log("Mark BMI: ", markBMI);
// console.log("John BMI: ", johnBMI);
// console.log("Mark BMI is higher than John BMI: ", markHigherThanJohn);
 
// markWeight = 95;
// markHeight = 1.88;
// johnWeight = 85;
// johnHeight = 1.76;
 
// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / (johnHeight * johnHeight);
 
// markHigherThanJohn = markBMI > johnBMI;
 
// console.log("Mark BMI: ", markBMI);
// console.log("John BMI: ", johnBMI);
// console.log("Mark BMI is higher than John BMI: ", markHigherThanJohn);
 
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew);
 
// const nameNew = `I'm ${2025 - 2002} years old!`;
// console.log(nameNew);
 
// const age = 18;
 
// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
 
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
 
let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);
let markHigherThanJohn = markBMI > johnBMI;
 
if (markHigherThanJohn) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's BMI (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's BMI (${markBMI.toFixed(1)})!`);
}