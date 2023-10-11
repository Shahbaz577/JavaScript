// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function calculateCartPrice(...num1){  //Rest Operator (...value)
    return num1
}
console.log( calculateCartPrice(2,3,4,1,2,3))


const user={
    username: "Shahbaz",
    price: 599
}
function flipkartUser(getuser){
    console.log(`Usernmae is ${getuser.username} and Price ${getuser.price}`);
}
// flipkartUser(user)

//Also pass Argument like this
flipkartUser({
    username: "Ali",
    price: 199
})


const cartArray = [10,20,30,40,50]

function returnThirdValue(getArray){
    return getArray[2]
}
console.log(returnThirdValue(cartArray))