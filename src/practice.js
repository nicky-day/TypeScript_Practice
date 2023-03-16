"use strict";
let count = 0;
count += 1;
// count = '문자열';
const message = 'Hello world';
const done = true;
const numbers = [1, 2, 3];
const messages = ['hello', 'world'];
// message.push(1);
let mightBeUndefined = undefined;
let nullableNumber = null;
// let color: 'red' | 'orange' | 'yellow' = 'red';
// color = 'green';
function sum(x, y) {
    return x + y;
}
const result = sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
function returnNothing() {
    console.log('어쩌구 저쩌고');
}
returnNothing();
function returnStringOrNumber() {
    return 4;
}
returnStringOrNumber();
