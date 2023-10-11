// A JavaScript function is a block of code designed to perform a particular task.

function myUser(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("H");
    console.log("B");
    console.log("A");
    console.log("Z");
}
// myUser()

// function addTwoNum (num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNum (num1, num2){
    const result = num1 + num2
    return result
    // After use return value you conn't print any value
}
const result=addTwoNum(5, 5)
// console.log("Result:", result);

function loginUserMessage(username){
    return `${username} just loggin in`
}
console.log(loginUserMessage("Shahbaz Ali"));