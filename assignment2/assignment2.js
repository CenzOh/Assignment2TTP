//#1 ForEach

const array = ['a', 'b', 'c'];

function myEach (myArray, callback){

console.log(`${myArray}`) 
callback();
}

function finished() {
  console.log(`this is a callback`);
}

myEach(array, finished);

//#2 map()

const fruit = ['apple', 'banana', 'cherry'];

function myMap(myArray, callback) {

console.log(`${myArray}`)
callback();
}

function finishedFruit(){
 console.log(`Read the fruit array`)
}

myMap(fruit, finishedFruit);

//#3 filter()

const num = [4,6,7];
function myFilter(myArray, callback) {

  console.log(`${myArray}`)
  callback();
}

function nextNum() {
  console.log(`8 is next`);
}

myFilter(num, nextNum);

//#4 some() (aka any())
const anyArray = ['Number', 1, true];

function mySome(myArray, callback){
  console.log(`${myArray}`)
  callback();
}

function aCallback(){
  console.log(`the message is a success`);
}

mySome(anyArray, aCallback);

//#5 every()
const arr = [100,500,600]

function myEvery(myArray, callback) {
  console.log(`${myArray}`);
  callback();
}

function test(){
  console.log('test');
}

myEvery(arr,test);

//#6 reduce()
const array1 = [5,6,7]

function myReduce(myArray, callback) {
  console.log(`test1 ${myArray}`);
  callback(myArray);
}

function reduction(myArray) {
  console.log(`test2 ${myArray}`);
}

myReduce(array1,reduction);

//#7 includes()

const array2 = [3,6,9]
const target = 6;

function myIncludes(myArray, myTarget) {
  console.log(`array ${myArray} target ${myTarget}`);
  
  for (i = 0; i < myArray.length; i++) {
    if(target === myArray[i]){
      //console.log('true');
      return true;
    }
  }
  //console.log('false');
  return false;
}

myIncludes(array2, target);

//#8 indexOf()

const ourArray = ['a', 'bit', 'of', 'sample', 'text'];
const ourTarget = 'text';

function myIndexOf(myArray, myTarget){
  console.log(`array: ${myArray} target: ${myTarget}`);

  for(i = 0; i < myArray.length; i++){
    if(myTarget === myArray[i]){
      return i; //returns the index
    }
  }
  return -1;
}

myIndexOf(ourArray, ourTarget);

//#9 push()

const theArray = [true, false, 'true'];
const elementToAdd = 'false';

function myPush(myArray, addTo){
  console.log(`Before: ${myArray} Push this: ${addTo}`)

  myArray[array.length+1] = addTo;

  console.log(`After: ${myArray}`)
}

myPush(theArray, elementToAdd);

//#10 lastIndexOf()

arr1 = [10,20,30,40,20,50];
target1 = 20;

function myUnshift(myArray, myTarget){
  let lastIndex = -1;
  
  console.log(`Array: ${myArray} Target: ${myTarget}`);

  for(i = 0; i < myArray.length; i++){
    if(myTarget === myArray[i]){
      lastIndex = i;
    }
  }
  console.log(`${lastIndex}`);
  return lastIndex;
  
}

myUnshift(arr1,target1);

//#11 Object.keys()

let object = {one: 1, two: 2};
function grabKeys(obj){
  let array = [];
  for(const keys in obj){
    array.push(keys);
  }
  return array;

}
console.log(grabKeys(object));


//#12 Object.values()

let object1 = {one: 1, two: 2};

function grabValues(obj){
  let array1=[];
  for(const key in obj) {
    array1.push(obj[key]);

  }
  return array1;
}
console.log(grabValues(object1));