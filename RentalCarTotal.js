// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  let total = 40 * Number(d)
  return d >= 7 ? total -= 50 : d >= 3 ? total -= 20 : total 
}

function getGrade (s1, s2, s3) {
  let average = (Number(s1) + Number(s2) + Number(s3)) / 3
  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}

