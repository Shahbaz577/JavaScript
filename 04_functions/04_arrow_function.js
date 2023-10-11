// this -> Refer Current Context

const user = {
    username: "Shahbaz Ali",
    price: 999,
    password: "abc@123",

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to my Website`);
    }

}
user.welcomeMessage()

//Arrow functions allow us to write shorter function syntax

//Explicit Return
const twoSum = (num1 , num2) =>{
    return num1 + num2
}   // If you use curly Brecket {} then use Return KeyWord
console.log(twoSum(2,4));


//Implicit Return
const ThreeSum = (num5, num7,num9) => (num5 + num7 + num9)
console.log(ThreeSum(3, 4, 6));