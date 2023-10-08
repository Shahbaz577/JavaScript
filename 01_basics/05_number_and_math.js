const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length);
//convert into String and also show the length of the Number

const payment = 500
console.log(payment.toFixed(2));
//Basically this method use when you create any E-commerce Website

const money = 2000.75475
console.log(money.toPrecision(5));

//++++++++++++++++++  MATH  ++++++++++++++++++++++++

/* console.log(Math);
console.log(Math.abs(-5)); //Absolute Value (-ve Value change on ++ve value)
console.log(Math.round(24.6)); 

console.log(Math.ceil(4.6)); // Always take maximum value

console.log(Math.floor(4.9)); // Always take minimum value

// if you create any array and find Min & Max Value then use this
console.log(Math.min(3,4,5,6,1,2,7)); 

console.log(Math.max(3,4,5,6,1,2,7));
*/

console.log(Math.random()); // random always gives the value between 0 and 1 
console.log((Math.random()*10) + 1); // in this section add +1 because i avoide (0)
console.log(Math.floor(((Math.random()*10) + 1))); // in this get always minimum value

const min = 5
const max = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
