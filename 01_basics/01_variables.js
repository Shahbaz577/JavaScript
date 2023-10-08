const userId = 123456  //Const Not Change any condition
let userPassword = "126543"
let userEmail = "ali@gmail.com"
let userState = "Bihar"
let userDistrict = "Siwan"
/*
prefer not to use Var because of issue in block scope and functional scop 
*/
userPassword="Shahbaz" //let change through your conditions

console.table([userId, userPassword, userEmail, userState, userDistrict])