const arr1=['a','b','c'];
const arr2=['1','2','3'];
// arr1.push(arr2)
// console.log(arr1);

arr1.concat(arr2);
// console.log("arr1: "+arr1);
const newArr = [...arr1,...arr2]
// console.log(newArr)

const arr3 = newArr
// console.log(arr3) 
const arr4 = [...newArr]
// console.log(arr4)

const new_arr = [1,2,3,[4,5,6],[7,8,[9,10]]]

const new_arr2 = new_arr.flat(1);
// console.log(new_arr2)    

console.log(Array.isArray("Amana"));
console.log(Array.from("Amana"));
console.log(Array.from({name:"Amana"}));