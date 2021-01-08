//Assignment we had yesterday, we didnt have to use the high order function, now do the opposite and use the high order function and do what they are supposed to do. Now implement it into a code. NOW DO THE EASY WAY!

//#1

const array = ['a','b','c'];
array.forEach(element => console.log(element));

//#2 

const array0 = [1,2,3,4];

const map = array0.map(x => x*2);

console.log(map);

//#3

const words = ['hello', 'this', 'ear', 'world'];

const result = words.filter(word => word.length < 5);

console.log(result);

//#4

const array1 = [1,3,4,5,7]

const even = (element) => element % 2 === 0;

console.log(array1.some(even)); //will print true if there are even values

//#5

const lessThan = (currentValue) => currentValue < 5;

const array2 = [1,10,5,3]

console.log(array2.every(lessThan)); //is NOT below threshold because 10 is present

//#6

const array3 = [2,4,6,8];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array3.reduce(reducer)); //20

console.log(array3.reduce(reducer, 5)); //25


//#7

const array4 = [1,3,5]

console.log(array4.includes(3)); //true
console.log(array4.includes(4));//false

//#8

const animals = ['dog', 'cat', 'bird', 'fish']

console.log(animals.indexOf('bird')); //2 since we start at 0!!

//#9

//using animals array
const count = animals.push('sheep');
console.log(count); //5
console.log(animals); //sheep at the end

//#10
//using animals array
console.log(animals.lastIndexOf('cat'));//1

//#11

const stuff = {
  a: 'text',
  b: false,
  c: 128
};

console.log(Object.keys(stuff));//a.b.c

//#12
//using the stuff array

console.log(Object.values(stuff));//text, false, 128