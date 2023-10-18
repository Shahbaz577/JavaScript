//The Fetch API provides a JavaScript interface for accessing and manipulating
//parts of the protocol, such as requests and responses. It also provides a global fetch()
//method that provides an easy, logical way to fetch resources asynchronously across the network.

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(responce){
    return responce.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("Error:", error);
})