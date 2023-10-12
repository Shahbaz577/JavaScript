//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.

const coding = ["html","java","Sql","DSA","ReactJs"]
coding.forEach(function(code){  //Use CallBack Function Then Didn't USe Function Name
    // console.log(code);
})

//These Code Write In another way Use of Arrow Function
const Important = ["html","java","Sql","DSA","ReactJs"]

Important.forEach( (helpful) => {
    // console.log(helpful);
})

    
//Use Object Under Array
const myCoding =[
    {
        langusageName : "Java",
        developerUse: "Html Css JavaScript",
        ImportantForJob: "Java Dsa Development"
    
        
    }
]
myCoding.forEach((useful) =>{
    console.log(useful);
})

//ForEach Value Doesn't Return Value