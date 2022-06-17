/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a = 0, b = 0) {
  return a + b;
}

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name = "Stranger") {
  // console.log("Greetings " + name); //if this line is uncommented it will make the admit function buggy(prints multiple greetings)
  return "Greetings " + name;
}

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age) {
  if (isAnAdult(age)) {
    return 0;
  } else {
    return 18 - age;
  }
}

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(person) {
  if (isAnAdult(person.age)) {
    console.log(greet(person.name));
    return greet(person.name);
  } else {
    console.log(
      "Please come back in " + yearsToAdulthood(person.age) + " years"
    );
    return "Please come back in " + yearsToAdulthood(person.age) + " years";
  }
}
