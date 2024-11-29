//  NUmber -------
const score = 400;
// console.log(score);
// console.log(typeof(score)); 

let temp= new Number(200);
// console.log(temp);
// console.log(temp.toExponential(2));
// console.log(typeof(temp)); 

temp=10000000;
// console.log(temp.toLocaleString());
// console.log(typeof(temp)); 


// Math-----

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10+1));

const min=30;
const max=35;

for(let i=0;i<10;i++){
    const random = Math.floor(Math.random()*(max-min+1)+min);
    // console.log(random);

}

//// date

const mydate = new Date(2003,2,17);
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());