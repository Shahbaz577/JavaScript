//Object Singlton

const instaUser = {}
instaUser.name = "Shahbaz"
instaUser.id = "123rooh"
instaUser.email = "Shahbazalirumi@gmail.com"

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));


// console.log(instaUser);

const linkdlin = {
    email: "Shahbazalirumi@gmail.com",
    fullname: {
        userfullnname: {
            firstname: "Shahbaz",
            lastname: "Ali"
        }
    }
}

//console.log(linkdlin.fullname.userfullnname.firstname);


// Merge Object
const obj1 = {1: "Shahbaz", 2: "Ali"}
const obj2 = {3: "Hariom", 4: "Jha"}
const obj3 = {5: "Suraj", 6: "Kumar"}

const obj4 = {...obj1, ...obj2, ...obj3} //Spread Opreator
// console.log(obj4);

const course ={
    courseName: "JavaScript",
    coursePrice: "999",
    courseTeacher: "Chai Aur Code"
}

// Now Distructuring -> {} use this curlibreses
const {courseTeacher: Teacher} = course
console.log(Teacher);

