// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = "";
  var Numbers = "0123456789";
  var Special = "!@#$%^&*()";
  var Uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var Lowers = "abcdefghijklmnopqrstuvwxyz";

  var NumbersS = "0123456789!@#$%^&*()";
  var NumbersSU = "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NumbersSUL =
    "0123456789!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var NumbersL = "0123456789!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
  var NumbersSL = "0123456789abcdefghijklmnopqrstuvwxyz";
  var NumbersU = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var NumbersLU =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  var SpecialU = "!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var SpecialL = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz";
  var SpecialLU =
    "!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var UpperL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  /*var passwordText = document.querySelector("#password");
    passwordText.value = password;*/

  var FirstPrompt = window.confirm(
    "Welcome to the Password Generator. Would you like this password to have lowercase letters?"
  );
  var SecondPrompt = window.confirm("Ok, what about uppercase letters?");
  var ThirdPrompt = window.confirm("Want numbers in your password?");
  var FourthPrompt = window.confirm("What about special characters?");
  var LengthPrompt = window.prompt(
    "How long do you want this password to be? Choose a number between 8-128"
  );

  if (!FirstPrompt && !SecondPrompt && !ThirdPrompt && !FourthPrompt) {
    window.alert(
      "Sorry, if you don't want any type of text we can't make a password for you. See ya"
    );
    return;
  }

  if (FirstPrompt && SecondPrompt && ThirdPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer = Math.floor(Math.random() * NumbersSUL.length);
      password += NumbersSUL.substring(Randomer, Randomer + 1);
    }
  } else if (FirstPrompt && SecondPrompt && ThirdPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer2 = Math.floor(Math.random() * NumbersLU.length);
      password += NumbersLU.substring(Randomer2, Randomer2 + 1);
    }
  } else if (FirstPrompt && SecondPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer3 = Math.floor(Math.random() * UpperL.length);
      password += UpperL.substring(Randomer3, Randomer3 + 1);
    }
  } else if (FirstPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer4 = Math.floor(Math.random() * UpperL.length);
      password += UpperL.substring(Randomer4, Randomer4 + 1);
    }
  } else if (SecondPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer5 = Math.floor(Math.random() * Uppers.length);
      password += Uppers.substring(Randomer5, Randomer5 + 1);
    }
  } else if (ThirdPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer6 = Math.floor(Math.random() * Numbers.length);
      password += Numbers.substring(Randomer6, Randomer6 + 1);
    }
  } else if (FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer7 = Math.floor(Math.random() * Special.length);
      password += Special.substring(Randomer7, Randomer7 + 1);
    }
  } else if (FirstPrompt && ThirdPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer8 = Math.floor(Math.random() * NumbersL.length);
      password += NumbersL.substring(Randomer8, Randomer8 + 1);
    }
  } else if (FirstPrompt && SecondPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer99 = Math.floor(Math.random() * SpecialLU.length);
      password += SpecialLU.substring(Randomer99, Randomer99 + 1);
    }
  } else if (FirstPrompt && ThirdPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer9 = Math.floor(Math.random() * NumbersSL.length);
      password += NumbersSL.substring(Randomer9, Randomer9 + 1);
    }
  } else if (SecondPrompt && ThirdPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer10 = Math.floor(Math.random() * NumbersSU.length);
      password += NumbersSU.substring(Randomer10, Randomer10 + 1);
    }
  } else if (ThirdPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer11 = Math.floor(Math.random() * NumbersS.length);
      password += NumbersS.substring(Randomer11, Randomer11 + 1);
    }
  } else if (SecondPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer12 = Math.floor(Math.random() * SpecialU.length);
      password += SpecialU.substring(Randomer12, Randomer12 + 1);
    }
  } else if (FirstPrompt && FourthPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer13 = Math.floor(Math.random() * SpecialL.length);
      password += SpecialL.substring(Randomer13, Randomer13 + 1);
    }
  } else if (SecondPrompt && ThirdPrompt) {
    for (var i = 0; i <= LengthPrompt; i++) {
      var Randomer14 = Math.floor(Math.random() * NumbersU.length);
      password += NumbersU.substring(Randomer13, Randomer14 + 1);
    }
  }

  window.alert("Your new password is " + password);
  // Add event listener to generate button
}
generateBtn.addEventListener("click", writePassword);
