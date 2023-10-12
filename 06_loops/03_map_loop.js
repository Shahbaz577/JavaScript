// For Of :- The JavaScript for of statement loops through the values of an iterable object.

const arr = [1,2,3,4,5,6]
for (const x of arr) {
    // console.log(x);
}

/* Maps :- A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys. 

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map
*/

const map = new Map()
map.set('In',"India")
map.set('Plst',"Phelestin")
map.set('Arb',"Arab")
map.set('Dub',"Dubai")

// console.log(map);



const myNumber = [1,2,3,4,5,6,7,8,9]
const newNumber = myNumber.map((num) => num + 10)
// console.log(newNumber);



const myObject = {
    'Js': "JavaScript",
    'Ja': "Java",
    'Sql': "MySql",
    'Dsa': "Data Structure"
}
for (const key in myObject) {  // For In :- The JavaScript for in statement loops through the properties of an Object
    // console.log(myObject[key]);
    
}




let myArray = [2,3,4,5,6,7,8,9]
for (const key of myArray) {
    console.log(myArray);
}
