const mySym = Symbol();

const obj={
    name:"aman",
    "full name":"amna rama",
    [mySym]:"sushi",
    1:"one"
}

// console.log(obj.name);
// console.log(obj["full name"]);
// console.log("type: "+ typeof(mySym) +"-- "+obj[mySym]);
// console.log(obj[1]);

Object.freeze(obj);
obj.name="aman kumar";
// console.log(obj);

const obj2 = {
    name: "ramuu",
    age: 25,
    course:"btech"
}

const {course:temp} = obj2;

console.log("course: ",temp);