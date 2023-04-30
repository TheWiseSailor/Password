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
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
const getPasswordLength = () => {
  let numberOfCharacters = prompt(
    "How many characters do you want in your password? Choose between 8-32 characters."
  );
  return numberOfCharacters;
};
//A function to validate user input for password length

const validatePasswordLength = (length) => {
  while (length < 8 || length > 32 || isNaN(length)) {
    length = prompt("Please enter a valid number between 8 and 128.");
  }
  return length;
};
// this will make the functions to ask
//the user for the different types of
// characters to which they can include
//within the password

const getIncludeLowercase = () => confirm("Do you want lowercase characters?");
const getIncludeUppercase = () => confirm("Do you want uppercase characters?");
const getIncludeNumbers = () => confirm("Do you want to use numbers?");
const getIncludeSpecial = () => confirm("Do you want special characters?");
//this function will be able to verify that there is at
//least one character type that it needs to include
//within the password

const validateCharacterTypes = (lowercase, uppercase, numbers, special) => {
  if (!lowercase && !uppercase && !numbers && !special) {
    alert("Please select at least one character type.");
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
    password += possibleCharacters[randomIndex];
  }
  return password;
};
//creating a function to where it generates a password

const generatePassword = () => {
  let numberOfCharacters = getPasswordLength();
  numberOfCharacters = validatePasswordLength(numberOfCharacters);
  // I FORGOT TO ADD THIS
  //to where it asks the user for which types of chracters to include, in the password
  const hasLowercase = getIncludeLowercase();
  const hasUppercase = getIncludeUppercase();
  const hasNumbers = getIncludeNumbers();
  const hasSpecial = getIncludeSpecial();
  //the console asks the user what type of characters to include in the password

  const isValidCharacterTypes = validateCharacterTypes(
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSpecial
  );
  //I added selected characters to possibleCharacters array
  if (!isValidCharacterTypes) {
    return;
  }
  if (hasLowercase) {
    addLowercaseCharacters();
  }
  if (hasUppercase) {
    addUppercaseCharacters();
  }
  if (hasNumbers) {
    addNumberCharacters();
  }
  if (hasSpecial) {
    addSpecialCharacters();
  }
  //This below will generate a password by picking
  //random characters from the possibleCharacters array

  let password = generateRandomPassword(numberOfCharacters);
  possibleCharacters = [];
  // this makes it to where it clears it for
  // security reasons and etc

  return password;
};
//write the password to the DOM

const writePassword = () => {
  const password = generatePassword();
  if (password) {
    passwordText.value = password;
  }
};

generateBtn.addEventListener("click", writePassword);
