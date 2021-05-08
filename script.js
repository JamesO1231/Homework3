var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

var lowercase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`,];
var uppercase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`,];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var specialCharacters = [`!`, `"`, `#`, `$`, `%`, `&`, `*`, `(`, `)`, `'`, `+`, `,`, `-`, `.`, `/`, `:`,];

var passwordArray = []
var userChoice = []

function PasswordGenerator() {
  passwordArray = []
  userChoice = []

var characterNumber = window.prompt("Number of characters to include (At least 8 and maximum 128):");

  if (characterNumber >= 8 && characterNumber < 129) {
  password = CharacterSelection(); 
} else {
  alert("Incorrect number of characters, please try again.");
  PasswordGenerator();
  
}

function CharacterSelection() {
  var lowercaseBoolean = window.confirm("Would you like lowercase letters in your password?");
  if (lowercaseBoolean === true) {
    userChoice = userChoice.concat(lowercase);
    
  }

  var uppercaseBoolean = window.confirm("Would you like uppercase letters in your password?");
  if (uppercaseBoolean === true) {
    userChoice = userChoice.concat(uppercase);
   
  }

  var numbersBoolean = window.confirm("Would you like numbers in your password?");
  if (numbersBoolean === true) {
    userChoice = userChoice.concat(numbers);
   
  }

  var specialBoolean = window.confirm("Would you like special characters in your password?");
  if (specialBoolean === true) {
    userChoice = userChoice.concat(specialCharacters);
  
  }

  var finalPassword = ""
  for(f = 0; f < characterNumber; f++) {
    finalPassword = finalPassword + userChoice[Math.floor(Math.random() * userChoice.length)]
  
  }

  console.log(finalPassword);
  return finalPassword;

}
return password;

};

function writePassword() {
  var password = PasswordGenerator();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
