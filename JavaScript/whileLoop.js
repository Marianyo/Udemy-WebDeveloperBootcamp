
console.log("Exercise 1");
var count = -10;
while (count <= 19) {
    console.log(count);
    count++;
}

console.log("Exercise 2");
var count = 10;
while (count <= 40) {
    console.log(count);
    count += 2;
}


/* 
Other option-------
var count=10;
while(count<=40) {
if(count % 2 ==0){ 
    console.log(count);
}
    count++;
}

*/

console.log("Exercise 3");
var count = 301;
while (count <= 333) {
    console.log(count);
    count += 2;
}

/*
Other option-------
var count=300;
while(count<=333) {
if(count % 2 !==0){
    console.log(count);
}
    count++;
}
*/

console.log("Exercise 4: Numbers divisible by 5 & 3 between 5 & 50");
var count = 5;
while(count <= 50) {
    if(count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
        count++;
    
}

