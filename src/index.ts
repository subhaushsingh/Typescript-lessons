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

//function
function calculateTax(income: number,taxYear=2025): number{
    if(income<0) return 0;
    return taxYear;
}


//Object
let employee:{
    readonly id:number,
    name:string
} = {id:1,name:'mosh'}

//employee.id = 2 shows error as the property is readonly

type Student={
    readonly id:number,
    name:string,
    randomFunction: (date:Date) => void
}

let std1 : Student = {
    id:1,
    name: 'mosh',
    randomFunction: (date:Date)=>{
        console.log(date);
    }

}


//Literal annotation
type Quantity = 50 | 100;
let quantity:Quantity = 100;


//Optional chaining

type Customer = {
    birthday?: Date
};

function getCustomer(id:number) : Customer | null | undefined{
    return id == 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
//Optional property access operator
console.log(customer?.birthday?.getFullYear());