let a = 300 //Global Scopes

if(true){   //Block Scopes
    let a = 10  
    const b = 20
    var c = 30

    // console.log("INNER:", b);
}
// console.log(a);


if(true){
    const username = "Shahbaz"
    if(username == "Shahbaz"){
        const website = " YouTube"
        // console.log(username + website);
    }
    //console.log(website); // given Error because we run outside the Block Scope
}

console.log(addOne(5))
function addOne (num1){   // Normal function Declearation
    return num1 + 1
}



console.log(addTwo(5));
const addTwo = function(num2){  //Function Declearation on use Variable
    return num2 + 2
}
