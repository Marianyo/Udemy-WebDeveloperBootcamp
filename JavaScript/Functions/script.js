// function isEven(i){
//     //return true if even
//     if(i%2===0){
//         return true;
//     }
//     //otherwise return false
//     else{
//         return false;
//     }
// }


function isEven(i){
    return i % 2===0;
}

console.log("Ejercisio 2")
function factorial(num){
//define a result variable
var result = 1;
//Calculate factorial and store value in result
for (var i=2  ; i<=num; i++){
    result*= i;
}
//return the resutl variable
    //factorial(4) 4x3x2x1
return result;
}


function factorialMe(num){
var result=1;
for(var i=1;i<=num;i++){
result=result*i;
}
return result;
}