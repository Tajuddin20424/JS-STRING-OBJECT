const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places':['bandorban', 'saintmartin', 'kuakata'],

}

// console.log(person);
// dot notation
// dot symbol diye object er value access kora
// console.log(person.profession);
const incomes = person.salary;
// console.log(incomes);

// bracket Notation
// third bracket diye access kora
console.log(person['age']);

// error
// console.log('fav places');
console.log(person['fav places']);

const keyName = 'profession';
console.log(person[keyName]);