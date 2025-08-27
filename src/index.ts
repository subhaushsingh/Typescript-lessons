let age: number = 5;    
let course = 'Typescript';

//course = 12; cause error --- Type 'number' is not assignable to type 'string'.

//Array
let numbers : number[] = [];
let num = []; // any 


//Tuple
let user: [number,string] = [1,'A'];
//user[0].valueOf() 
// user[1].toLowerCase();

user.push(2,'B');

console.log(user);



// enum
const enum Size{Small='s',Medium='m',Large='l'}
let mySize : Size = Size.Medium;
console.log(mySize);