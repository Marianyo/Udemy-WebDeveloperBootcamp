var firstName = prompt("What is your first name");
var lastName = prompt("What is your last name");
var age = prompt("How old are you?");
var fullName = (firstName + " " + lastName);
console.log("Your full name is " + fullName + ".");
console.log("You are " + age + " years old.");

//Age Calculator

var days= age*365.25;
console.log("You are " + days + " days old.");

/* 
*
------EJERCICIOS--------*

var x=3;
var y=8;
!(x== "3" || x ===y) && !(y !=8 && x<=y); ----> FALSE


----------

var age = Number(prompt("What is your age?"));
if(age <= 0) {
    console.log("Error-You haven't been born yet");
}
if(age === 21) {
    console.log("Happy Birthdday!!");
}

if(age&2 !==0) {
    console.log("Your age is odd");
}

----------

if((Math.sqrt(age) + '').includes(".") === false) {
    console.log("Your age is a perfect square")
}

Different way of doing it (we force sqrt to be a string):

if(!String(Math.sqrt(age)).includes(".")) {
    console.log("Your age is a perfect square")
}

Other way of doing it (we force sqrt to be a string):

if(!(age % Math.sqrt (age))) {
    console.log("Your age is a perfect square")
}

------------






-----------
*/
