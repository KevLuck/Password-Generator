// Get references to the #generate element
var characterLenght = 128;
var makePasswordArr =[]

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);  

// Write password to the #password input
function writePassword() {
  var userCorrect = generate();
  
   
  if (userCorrect) {
   var newPassword = generatePassword();
   var passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
  }else {
      passwordText.value="";
    }
}

function generatePassword() {
  var password ="";
  for (var i = 0; i < characterLenght; i++) {
    var random = Math.floor(Math.random() * makePasswordArr.length);
    password = password + makePasswordArr[random];
  }
  return password;
}

function generate() {

characterLenght = (prompt ("Welcome to Passoword Generator! Password length requirements are 8 to 128 characters."));

if (isNaN (characterLenght) || characterLenght < 7 || characterLenght > 129) {
  alert("A password must be between 8 and 128 characters long. Try again. TIP: Enter numbers only");
  return false;
  } 

if (confirm ("Would you prefer numbers in your password?")) {
  makePasswordArr = makePasswordArr.concat(number);
}
if (confirm ("Would you prefer special characters in your password")) {
  makePasswordArr = makePasswordArr.concat(specialChar);
}
if (confirm ("Would you prefer lower case letters in your password")) {
  makePasswordArr = makePasswordArr.concat(alphaLower);
}
if (confirm ("Would you prefer uppercase letters in your password")) {
  makePasswordArr = makePasswordArr.concat(alphaUpper);
}
return true;




}