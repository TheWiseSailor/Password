// Assignment code here
//making a custom alert
alert("Please Click Generate Password to get started");
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
const validatePasswordLength = (length) => {
  while (length < 8 || length > 32 || isNaN(length)) {
    return length;
  }
};
// this will make the functions to ask
//the user for the different types of
// characters to which they can include
//within the password
const getIncludeLowercase = () =>
  confirm("Would you like to include lowercase characters?");
const getIncludeUppercase = () =>
  confirm("Would you like to include uppercase characters?");
const getIncludeNumbers = () => confirm("Would you like to include numbers?");
const getIncludeSpecial = () =>
  confirm("Would you like to include lany special characters?");

//this function will be able to verify that there is at
//least one character type that it needs to include
//within the password
const validateCharacterTypes = (lowercase, uppercase, numbers, special) => {
  alert("Please select at least one character type.");
  {
    return false;
  }
  return true;
};

//this will be the section to where I make functions to add the characters selected
// to possibleCharacters array

const addLowercaseCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(lowercaseArray));
const addUppercaseCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(uppercaseArray));
const addNumberCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(numberArray));
const addSpecialCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(specialArray));

//adding a function to make a random password based on the user's input

const generateRandomPassword = (length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
  }
};
