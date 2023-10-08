// DATES

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString()); // use String Method

// Note:- in this method always use parenthesis()

console.log(myDate.toDateString());

console.log(typeof myDate); // in this i know the datatype of (myDate)
// datatype is Object

// Now create date
let createdDate = new Date(2023,0,23)
console.log(createdDate.toDateString());

// now add time
let myCreatedDate = new Date(2023,0,23,5,6)
console.log(myCreatedDate.toLocaleString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());