// Dom elements
const resultEl=document.getElementById('result')
const lengthEl=document.getElementById('length')
const uppercaseEl=document.getElementById('uppercase')
const lowercaseEl=document.getElementById('lowercase')
const numbersEl=document.getElementById('numbers')
const symbolsEl=document.getElementById('symbols')
const generateEl=document.getElementById('generate')
 
const randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Generate event listen
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
 
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate passwordd function
function generatePassword(lower, upper, number, symbol, length) {
  // 1.Initialize a password variable
  // 2.Filter out unchecked types
  // 3.loop over the length call a generator function for each type
  // 4. add the final password to the password var and return

  let generatedPassword = '';

  const typesCount=lower + upper + number +symbol;
  console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  console.log(typesArr);

  if(typesCount === 0) {
    alert('Please select at least one option!');
}
// Assignment Code
// var generateBtn = document.querySelector("#generate");

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
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
