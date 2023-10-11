//truthy value is a value that is considered true when encountered in a Boolean context
const userEmail = "Shahbazalirumi@gmail.com"

if(userEmail){
    console.log("Got User email");
}else{
    console.log("Don't have user email");
}

//All values are truthy unless they are defined as falsy. 
//That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.


// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = null ?? 10

console.log(val1);