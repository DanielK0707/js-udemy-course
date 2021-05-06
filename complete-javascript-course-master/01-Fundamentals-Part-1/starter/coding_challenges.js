/*
// Coding Challenge #1 & #2
// Data 1 
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Data 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})! 🔥`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})! 🔥`)
}

// Coding Challenge #3

// Data 1
// const averageDolphins = (96 + 108 + 89) / 3;
// const averageKoalas = (88 + 91 + 110) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas) {
//     console.log('The Dolphins are the winners!');
// } else if (averageKoalas > averageDolphins) {
//     console.log('The Koalas are the winners!'); 
// } else if (averageDolphins === averageKoalas) {
//     console.log('The match ends in a draw!');
// } 

// Data Bonus 1

// const averageDolphins = (97 + 112 + 101) / 3;
// const averageKoalas = (109 + 95 + 123) / 3;
// console.log(averageDolphins, averageKoalas);

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log('The Dolphins are the winners!');
// } else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//     console.log('The Koalas are the winners!'); 
// } else if (averageDolphins === averageKoalas && averageKoalas && averageDolphins >= 100) {
//     console.log('The match ends in a draw!');
// } else {
//     console.log('No one wins the trophy!')
// }

//Data Bonus 2
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);


if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log('The Dolphins win with an average over 100!')
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
    console.log('The Koalas win with an average over 100!');
} else if (averageDolphins === averageKoalas && averageKoalas & averageDolphins >= 100) {
    console.log('The match ends in a draw!');
} else {
    console.log('No one wins the trophy!')
}

// Coding Challenge #4
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${bill + tip}!`);
*/ 