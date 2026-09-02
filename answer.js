// Question No.1

function describeValue(value) {
  const val = typeof value;
  const bool = value ? "truthy" : "falsy";
  return `${val} | ${bool}`;
}

// Question No.2

function getDayType(day) {
  const days = day.toLowerCase();

  switch (days) {
    case "friday":
    case "saturday":
      return "weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "working Day";
  }
  return "Invalid Day";
}

// Question No.3

function validateUsername(username) {
  if (username.length < 4) {
    return "Too short";
  } else if (username.includes(" ")) {
    return "No Space Allowed";
  } else if (username.toLowerCase().includes("admin")) {
    return "Reserved word";
  } else {
    return "Available";
  }
}

// Question No.4

function getCngFare(distance , isNight = false, waitingMinuties =0){
  let fare = 50;
  if (distance>2){
    fare = fare +(distance -2)*15;

  }

  const waitingCharge = waitingMinuties *2 ;
  fare =fare + waitingCharge;
if (isNight){
  fare = fare +1.20;
  
}
return fare;
}



// Question No.5
const getChaseVerdict = (target, scored,ballsLeft) =>{
  const runsNeeded = target - scored;

  if(runsNeeded<=0){
    return "won";
  }
else if (ballsLeft<= 0){
  return "Lost";

}


  const requiredRate = (runsNeeded /ballsLeft)* 6;
  let verdict;

  if (requiredRate <=6){
    verdict = "Comfortable";
  }
  else if  (requiredRate<=12)
    verdict ="Tough"
 
 return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}` 
}






