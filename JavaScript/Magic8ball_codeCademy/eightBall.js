var userName="Mariangel";

/* Ternary 
userName?console.log(`Hello ${userName}`):console.log("hello");*/

/* Short Circuit*/

userName=userName || "Hello";
console.log(`Hello ${userName}`);

var userQuestion=prompt("What is your question?");
console.log(userName + " your question is: " + userQuestion+ ".");

randomNumber=Math.floor(Math.random() * 4);
var eightBall="";

switch (randomNumber){
  case 0:eigthBall='It is certain';
    break;
  case 1:eigthBall='It is decidedly so';
    break;
  case 2:eigthBall='Reply hazy try again';
    break;
  default:eigthBall="User doesn't want to know his future"
}
console.log(eigthBall);
