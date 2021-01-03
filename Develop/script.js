// Dom elements
const resultEl=document.ElementById('result')
const lengthEl=document.ElementById('length')
const uppercaseEl=document.ElementById('uppercase')
const lowercaseEl=document.ElementById('lowercase')
const numbersEl=document.ElementById('numbers')
const symbolsEl=document.ElementById('symbols')
const generateEl=document.ElementById('generate')
 
const randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generator functions  
// Generating random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
}
// Generating random upper case letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 65);
}
// Generating random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}
// Generationg random symbol
function getRandomSymbol() {
  const symbols= '!#$%&()*+,-./:;<=>?@\^_~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
