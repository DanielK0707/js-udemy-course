'use strict';

// Challenge #1
//Test Data 1

// scoreDolphins1 = 44;
// scoreDolphins2 = 23;
// scoreDolphins3 = 71;

// scoreKoalas1 = 65;
// scoreKoalas2 = 54;
// scoreKoalas3 = 49;

// Test Data 2

// scoreDolphins1 = 85;
// scoreDolphins2 = 54;
// scoreDolphins3 = 41;

// scoreKoalas1 = 23;
// scoreKoalas2 = 34;
// scoreKoalas3 = 27;
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

const checkWinner =  function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('Nobody wins..');
    } return avgDolphins, avgKoalas
}

checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);

// Challenge #2

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

// Challenge #3

const mark = {
    fullName: 'Mark Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI()
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}
*/

// Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = (sum + arr[i]);
        sum += arr[i]; 
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));

