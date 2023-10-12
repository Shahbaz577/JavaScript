//The filter() method creates a new array filled with elements that pass a test provided by a function.

const myNums = [2,3,4,5,6,7,8,9,]
const newNums = myNums.filter( (num) => num > 4) // not use Scope {} the doesn't use Return Keyword But Get Correct Output
// console.log(newNums);

const myMarks = [34,49,45,67,56,78,57]
const newMarks = myMarks.filter((marks) => {
    return marks > 50   //If use Scope {} the complusory to use (Return Keyword) 
})
// console.log(newMarks);


// Real world problem use in database
const dataSet = [
    {first_name:"Tom",	   last_name:"Page", salary:5974.41},
    {first_name:'Claudia', last_name:'Conte',	salary:714.12},   	
    {first_name:"Luca", last_name:"Pavarotti",salary:4123.45},        
];

const myDataSet = dataSet.filter((set) => set.last_name == "Conte")
console.log(myDataSet);

//CHAINING 

