'use strict';
/*
function describeCountry(country, population, capitalCity) {
    const descriptionCountry = `${country} has ${population} million people and it's capital is Helsinki.`;
    return descriptionCountry;
}

const descriptionFinland = describeCountry('Finland', 6, 'Helsinki');
console.log(descriptionFinland);

const descriptionGermany = describeCountry('Germany', 84, 'Berlin');
console.log(descriptionGermany);

const descriptionPoland = describeCountry('Poland', 38, 'Warsaw');
console.log(descriptionPoland);


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populationPercentageG = percentageOfWorld1(84);
console.log(populationPercentageG);

const populationPercentageF = percentageOfWorld1(6);
console.log(populationPercentageF);

const populationPercentageP = percentageOfWorld1(38);
console.log(populationPercentageP);

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

const populationPercentageG2 = percentageOfWorld2(84);
console.log(populationPercentageG2);

const populationPercentageF2 = percentageOfWorld2(6);
console.log(populationPercentageF2);

const populationPercentageP2 = percentageOfWorld2(38);
console.log(populationPercentageP2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percGermany = percentageOfWorld3(84);
const percFinland = percentageOfWorld3(6);
const percPoland = percentageOfWorld3(38);

console.log(percGermany, percFinland, percPoland);

function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const populationDescription = `${country} has ${population} million people, which is about ${percentage}% of the world!`;
    console.log(populationDescription);
}

describePopulation('Germany', 84);
describePopulation('China', 1441);
describePopulation('Poland', 38);

const population = [84, 1441, 38, 6];
console.log(population.length === 4);

const percentages = [percentageOfWorld1(84), percentageOfWorld1(1441), percentageOfWorld1(38), percentageOfWorld1(6)];
console.log(percentages);


const neighbors = ['Ecuador', 'Peru', 'Brazil', 'Venezuela'];
console.log(neighbors);

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central european country :D');
}

neighbors[neighbors.indexOf('Brazil')] = 'Brazilia';
console.log(neighbors);


const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'german',
    population: 84,
    neighbors: ['Belgium', 'Netherlands', 'France', 'Luxembourg', 'Switzerland', 'Austria', 'Czechia', 'Poland']
}
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbors and a capital called ${myCountry.capital}.`);

// Increase population
myCountry.population += 2;
console.log(myCountry.population);

// Decrease population
myCountry['population'] -= 2;
console.log(myCountry.population);


const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'german',
    population: 84,
    neighbors: ['Belgium', 'Netherlands', 'France', 'Luxembourg', 'Switzerland', 'Austria', 'Czechia', 'Poland'],

    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbors and a capital called ${this.capital}.`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


for(let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting!`);
}


const population = [84, 1441, 38, 6];
const percentages2 = [];

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

for (let i = 0; i < population.length; i++) {
    const perc = percentageOfWorld1(population[i]);
    percentages2.push(perc);
}
console.log(percentages2);


const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for(let i = 0; i < listOfNeighbors.length; i++) {
    for (let y = 0; y < listOfNeighbors[i].length; y++){
        console.log(`Neighbor: ${listOfNeighbors[i][y]}`);
    }
}
*/