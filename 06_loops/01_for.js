for (let i = 0; i <= 10; i++) {
    const element = [i];
    // console.log(element); 
}


for (let i = 1; i < 10; i++) {
    //console.log(`Inner loop print ${i}`);
    for (let j = 1; j < 10; j++) {
        // console.log(`outer looop print ${j} and inner loop ${i}`);
        //console.log(i + "*" + j + '=' + i * j);
        
    }
}

const myArray = ["Apple","Boy","Girl","MOnkey","Tiger"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


for (let i = 1 ; i < 50; i++) {
    if(i == 5){
        console.log(`${i} Detect 5 Value`);
        break   // Break Keyword is most important
    }
    console.log(i);
    
}