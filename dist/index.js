"use strict";
var _a;
let age = 5;
let course = 'Typescript';
let numbers = [];
let num = [];
let user = [1, 'A'];
user.push(2, 'B');
console.log(user);
let mySize = "m";
console.log(mySize);
function calculateTax(income, taxYear = 2025) {
    if (income < 0)
        return 0;
    return taxYear;
}
let employee = { id: 1, name: 'mosh' };
let std1 = {
    id: 1,
    name: 'mosh',
    randomFunction: (date) => {
        console.log(date);
    }
};
let quantity = 100;
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
