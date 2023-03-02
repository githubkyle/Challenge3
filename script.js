// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = "";
  var Numbers = "0123456789";
  var Special = "!@#$%^&*()";
  var Uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Lowers = "abcdefghijklmnopqrstuvwxyz";
  var FinalPass = "";

  var FirstPrompt = window.confirm(
    "Welcome to the Password Generator. Would you like this password to have lowercase letters?"
  );
  var SecondPrompt = window.confirm("Ok, what about uppercase letters?");
  var ThirdPrompt = window.confirm("Want numbers in your password?");
  var FourthPrompt = window.confirm("What about special characters?");
  var LengthPrompt = window.prompt(
    "How long do you want this password to be? Choose a number between 8-128"
  );
  var ConfirmPrompt = window.confirm(
    "Are you sure about all of those choices?"
  );
  LengthPrompt = Math.floor(LengthPrompt);

  if (LengthPrompt < 8) {
    window.alert("Error, you need to choose a larger number of inputs");
    writePassword();
  } else if (LengthPrompt > 128) {
    window.alert("Error, you need to choose a smaller number of inputs");
    writePassword();
  }
  if (!FirstPrompt && !SecondPrompt && !ThirdPrompt && !FourthPrompt) {
    window.alert(
      "Sorry, if you don't want any type of text we can't make a password for you. See ya"
    );
    return;
  }
  if (!ConfirmPrompt) {
    writePassword();
  } else if (FirstPrompt) {
    password += Lowers;
  }

  if (SecondPrompt) {
    password += Uppers;
  }
  if (ThirdPrompt) {
    password += Numbers;
  }
  if (FourthPrompt) {
    password += Special;
  }
  for (var i = 0; i <= LengthPrompt; i++) {
    var Randomer = Math.floor(Math.random() * password.length);
    FinalPass += password.substring(Randomer, Randomer + 1);
  }

  const passwordEl = document.querySelector("#password");
  passwordEl.value = FinalPass;
}

generateBtn.addEventListener("click", writePassword);
