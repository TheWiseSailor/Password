alert("Please Click Generate Password to get started");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const lowercaseArray = lowercaseChars.split("");
const uppercaseArray = uppercaseChars.split("");
const numberArray = numberChars.split("");
const specialArray = specialChars.split("");
let possibleCharacters = [];
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
const getPasswordLength = () => {
  let numberOfCharacters = prompt(
    "How many characters do you want in your password? Choose between 8-32 characters."
  );
  return numberOfCharacters;
};
const validatePasswordLength = (length) => {
  while (length < 8 || length > 32 || isNaN(length)) {
    length = prompt("Please enter a valid number between 8 and 32.");
  }
  return length;
};
const getIncludeLowercase = () => confirm("Do you want lowercase characters?");
const getIncludeUppercase = () => confirm("Do you want uppercase characters?");
const getIncludeNumbers = () => confirm("Do you want to use numbers?");
const getIncludeSpecial = () => confirm("Do you want special characters?");
const validateCharacterTypes = (lowercase, uppercase, numbers, special) => {
  if (!lowercase && !uppercase && !numbers && !special) {
    alert("Please select at least one character type.");
    return false;
  }
  return true;
};
const addLowercaseCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(lowercaseArray));
const addUppercaseCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(uppercaseArray));
const addNumberCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(numberArray));
const addSpecialCharacters = () =>
  (possibleCharacters = possibleCharacters.concat(specialArray));
const generateRandomPassword = (length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }
  return password;
};
const generatePassword = () => {
  let numberOfCharacters = getPasswordLength();
  numberOfCharacters = validatePasswordLength(numberOfCharacters);

  //to where it asks the user for which types of chracters to include, in the password
  const hasLowercase = getIncludeLowercase();
  const hasUppercase = getIncludeUppercase();
  const hasNumbers = getIncludeNumbers();
  const hasSpecial = getIncludeSpecial();
  const isValidCharacterTypes = validateCharacterTypes(
    hasLowercase,
    hasUppercase,
    hasNumbers,
    hasSpecial
  );
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
  let password = generateRandomPassword(numberOfCharacters);
  possibleCharacters = [];

  return password;
};
const writePassword = () => {
  const password = generatePassword();
  if (password) {
    passwordText.value = password;
  }
};

generateBtn.addEventListener("click", writePassword);
