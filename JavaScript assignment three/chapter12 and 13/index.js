// 1. Program to check whether a given character is a number, uppercase letter, or lowercase letter.

let cha = prompt("Enter a character:");

if (cha >= '0' && cha <= '9') {
    console.log("It's a number.");
} else if (cha >= 'A' && cha <= 'Z') {
    console.log("It's an uppercase letter.");
} else if (cha >= 'a' && cha <= 'z') {
    console.log("It's a lowercase letter.");
} else {
    console.log("It's neither a number nor a letter.");
}

// 2. JavaScript program to accept two integers and display the larger, or state if they are equal.

let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both numbers are equal.");
}

// 3. Program that checks if a number is positive, negative, or zero.

let number = parseInt(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 4. Program to check if a character is a vowel.

let char = prompt("Enter a character (length 1):").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(true);
} else {
    console.log(false);
}

// 5. Password validation program.

let correctPassword = "Daniyal ahmed";
let enteredPassword = prompt("Please enter your password \nHint (my full name)");

if (!enteredPassword) {
    console.log("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

// 6. Fixed if/else statement.

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

// 7. Program to convert 24-hour clock format to 12-hour clock format.

let time = parseInt(prompt("Enter time in 24-hour clock format (example: 1900):"));

if (time >= 0 && time < 1200) {
    console.log("It's morning.");
} else if (time >= 1200 && time < 1700) {
    console.log("It's afternoon.");
} else if (time >= 1700 && time < 2100) {
    console.log("It's evening.");
} else if (time >= 2100 && time <= 2359) {
    console.log("It's night.");
} else {
    console.log("Not a 24 hour time.");
}
