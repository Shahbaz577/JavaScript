// A JavaScript Promise object contains both the producing code and calls to the consuming code:
new Promise(function(resolve,reject){ //// "Producing Code" (May take some time)
    setTimeout(function() {
        console.log("Shahbaz Ali");
        resolve()  // when successful
    }, 1000);
}).then(function(){  // "Consuming Code" (Must wait for a fulfilled Promise)
    console.log("I Love You Rooh");
})

// Data Consumption

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Shahbaz Ali",  emial:"Shahbazalirumi@gmail.com"}) // in this resolve i pass data but {object}
    }, 1000)
})
promiseThree.then(function(user){ // get data from resolve using (user)
    console.log(user);
})

//promise Four

const promisFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            console.log("I Love You Shahbaz Ali");
        }
        else{
            console.log("Error, I Hate You");
        }
    }, 1000)
})
promisFour.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>console.log("Chal BSDK"))

