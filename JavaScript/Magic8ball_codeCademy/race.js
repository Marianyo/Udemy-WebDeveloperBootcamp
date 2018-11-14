let raceNumber = Math.floor(Math.random() * 1000);

var earlyRegister=true;
var runnersAge=18;
console.log(raceNumber);

if (runnersAge>18 && earlyRegister===true){
  raceNumber+=1000;
}

console.log(raceNumber);

if(runnersAge>18 && earlyRegister===true){
  console.log(raceNumber + " runner: you run at 9:30am.");
} else if(runnersAge>18 && earlyRegister===false){
  console.log(raceNumber + " runner: you run at 11:00am.");
}
else if(runnersAge=18){
  console.log("Please see the registration desk.");
}
else{
  console.log(raceNumber + " runner: you run at 12:30pm.");
}
