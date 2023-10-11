//If & Else Condition

let score = 400
if(score < 200){
    console.log("You are not eligible to take test");
}else if(score < 300){
    console.log("Now you are also not eligible to take test");
}else{
    console.log("You are eligible to take test");
}


let emailLogedIn = true
let purchesCoiurse = true
let googleLogedin = false
let userLogedIn = true
if(emailLogedIn && purchesCoiurse){
    console.log("You are eligible to visite our course");
}

if(googleLogedin || userLogedIn){  // Use (||) check for muliple condition
    console.log("User loged in");
}