const alphabets =[`a`,`b`,`c`]
const nums = [0,1,2]
// console.log(alphabets +  nums);
// alphabets.push(nums)
const new1  =  alphabets.concat(nums)
// console.log(new1);
const new2=[...alphabets,...nums]
// console.log(new2); // same as concat method.

const another_array = [1,2,3,[4,5,6],7,[8,9,[9,10]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// create Array
const name = "PRATHMESH"
console.log(Array.from(name));