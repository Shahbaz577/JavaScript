//Object Literals

//Symbol Deceleare
const mySym = Symbol("key1")

const JsUser ={
    name :"Shahbaz",
    "full Name" :"Shahbaz Ali", //This code always accesss use of Big Square [] Notation
    age : 21,
    Email :"Shahbazalirumi@gmail.com",
    Address :"Vill+post-Saraiya",
    Branch :"IT",
    [mySym] :"myKey1",
}
console.log(JsUser.Email);
/*In this code all value access only use of (.) dot */

// console.log(JsUser["full Name"]);

// console.log(JsUser[mySym]);

//Change Email
JsUser.Email = "dukeofcode167@gmail.com"
// console.log(JsUser.Email);

/* Object.freeze(JsUser) // you can't change anything in this object */

JsUser.Email ="sali057720@gmail.com"
// console.log(JsUser.Email);

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`); //refrence the name then change String to Back-Tics(`...`), and write any value then use ${this.object Properties}
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());