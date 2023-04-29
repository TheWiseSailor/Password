// Assignment code here

//I will start by defining the character sets
//(rename it to lowersetChars because I
//was too lazy to write out the whole thing)
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//Converted the character sets into arrays
const lowercaseArray = lowercaseChars.split("");
const uppercaseArray = uppercaseChars.split("");
const numberArray = numberChars.split("");
const specialArray = specialChars.split("");
// Initializing an array for storage of
//characters for my password
let possibleCharacters = [];
// uncommenting the following lines below when needed
//var password = generatePassword();
//var generateBtn = document.querySelector("#generate");
//var passwordText = document.querySelector("#password");

//making a function to ask the user for a password length
const getPasswordLength = () => {
  let numberOfCharacters = ask(
    "How many characters pwould you like in your password? Choose between 8-32 chracters."
  );
  return numberOfCharacters;
};

//A function to validate user input for password length
const validatePasswordLength = Length;
