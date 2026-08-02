// 1. Grade function
function gradeFor(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Test gradeFor()
console.log("Grade Tests:");
console.log(gradeFor(95)); // A
console.log(gradeFor(84)); // B
console.log(gradeFor(72)); // C
console.log(gradeFor(61)); // D
console.log(gradeFor(45)); // F

// 2. Kenyan seasons function
function seasonFor(month) {
  if (month >= 3 && month <= 5) {
    return "Long rains";
  } else if (month >= 6 && month <= 9) {
    return "Cool dry";
  } else if (month >= 10 && month <= 12) {
    return "Short rains";
  } else if (month >= 1 && month <= 2) {
    return "Hot dry";
  } else {
    return "Invalid month";
  }
}

// Test seasonFor()
console.log("\nSeason Tests:");
console.log(seasonFor(4));  // Long rains
console.log(seasonFor(7));  // Cool dry
console.log(seasonFor(11)); // Short rains
console.log(seasonFor(2));  // Hot dry

// 3. Voting eligibility function
function canVote(age, citizenship) {
  if (age >= 18 && citizenship === "Kenyan") {
    return true;
  } else {
    return false;
  }
}

// Test canVote()
console.log("\nVoting Tests:");
console.log(canVote(20, "Kenyan"));   // true
console.log(canVote(17, "Kenyan"));   // false
console.log(canVote(25, "Ugandan"));  // false

// Day of the week using switch
function dayOfWeek(num) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

// Test the switch version
console.log("Switch Version:");
console.log(dayOfWeek(1)); // Monday
console.log(dayOfWeek(5)); // Friday
console.log(dayOfWeek(7)); // Sunday
console.log(dayOfWeek(9)); // Invalid day


// Day of the week using if/else if
function dayOfWeekIf(num) {
  if (num === 1) {
    return "Monday";
  } else if (num === 2) {
    return "Tuesday";
  } else if (num === 3) {
    return "Wednesday";
  } else if (num === 4) {
    return "Thursday";
  } else if (num === 5) {
    return "Friday";
  } else if (num === 6) {
    return "Saturday";
  } else if (num === 7) {
    return "Sunday";
  } else {
    return "Invalid day";
  }
}

// Test the if/else if version
console.log("\nIf/Else Version:");
console.log(dayOfWeekIf(1)); // Monday
console.log(dayOfWeekIf(5)); // Friday
console.log(dayOfWeekIf(7)); // Sunday
console.log(dayOfWeekIf(9)); // Invalid day


// I prefer the switch version for this case because it is cleaner,
// easier to read, and is designed for checking one variable
// against multiple fixed values.