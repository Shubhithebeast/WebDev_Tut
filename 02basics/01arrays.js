const arr =[1,2,3,4,5]
console.log(arr);

arr.push(6);
console.log("after push:", arr);
arr.pop();
console.log("after pop:",arr);


arr.unshift(8);
console.log("after unshift:", arr);
arr.shift();
console.log("after shift:",arr);

const arr2 = arr.slice(1,3);
console.log("after slice arr:", arr);
console.log("arr2:", arr2);

const arr1 = arr.splice(1,3);
console.log("after splice arr:", arr);
console.log("arr1:", arr1);



