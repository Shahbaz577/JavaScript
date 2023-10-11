// Immediately Invoked Function Expressions (IIFE)
//IFFI aims to remove pollution with a global scope.

(function userId(){   //Named IIFE
    console.log("Shahbaz Ali");
})();  // always use semicolon ; to end of the code



( () => {   //Normal IIFE
    console.log("Ali");
})();


( (name)=> {  //Pass Parameter In IFFE
    console.log(`Shahbaz ali love ${name}`);
})("Rooh")

