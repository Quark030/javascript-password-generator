// Link the button on html file  to be available on java
var generateBtn = document.querySelector("#generate");

// Generate a function for creating the password , inside this function  
// we generate two variables , one for creating the password, and the
// other one for calling the place where the value is going to be placed after generated

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add an event listener that execute the write function we created before when 
//the generate password button is pushed
generateBtn.addEventListener("click", writePassword);


// Define a function for generate password. 
//We add two variables, one for prompting length of the password the will be generated
//the second variable converts the value obtained on the previous variable (passwordlength)
//to integers ( with parse int) that will be stored.


function generatePassword() {
  var passwordLength = prompt("Define the password length between 8 and 128");
  var length = parseInt(passwordLength);



//We evaluate if the information pushed by the user , if it acomplish the criteria ,
//we continue, if not we prompt a message  with error.
// If it continues:  we use the confirm method to include or exclude  wich kind of
//characters and/or symbols will be included


  if (isNaN(length) || length < 8 || length > 128) {
    Swal.fire('Invalid', 'Please insert a number between 8 and 128', 'error');
    return "";
  } else {
    var includeLowerCase = confirm("Do you want to include lowercase characters?");
    var includeUpperCase = confirm("Do you want to include uppercase characters?");
    var includeSpecial = confirm("Do you want to include special characters?");
    var includeNumbers = confirm("Do you want to include numbers?");

// Once we have the user input  we evaluate if we can work with the information or we show
// an error message asking the user to choose at least one option
//If we can proceed with the input we create the variables for the function we called
//before(includeLowerCase, etc.)  This new functions holds all the elements needed on each property
//Example: numbersChar holds all the numbers we can add if we decide to include them

    if (!includeLowerCase && !includeUpperCase && !includeSpecial && !includeNumbers) {
      Swal.fire('Invalid', 'Choose at least one of the character types shown before', 'error');
      return "";
    } else {
      var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
      var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var specialChar = "#$%&/=?¡¨£¢∞§¶•ªº";
      var numbersChar = "0123456789";



//At this point we have all the user input we need , and the variables that holds the
//info we are working with. Now we create to more variables(empty) , one that will hold all the characters 
//(ResultAllChars) and the second that will hold te final result (generatedPasswordContainer)
//Then we add to (ResultAllChars) all the character types that the user choose previously(At this point 
//the charcters we have available are the concatanation of all the types of character sselected ).
//We create a loop that holds the desired length (choosen by the user) on the second parte we use a 
//random index to hold the result from the math floor & math random functions , wich combined choose 
//randomly a value for each cheracter assigned.
//we use the variable created before (generatedPasswordContainer) to hold the result of the iterations 
// that will be the number of characters(lenght) that the user imput at the beginning.
// Finally! we return the full  (generatedPasswordContainer) result to the container.

      var ResultAllChars = "";
      var generatedPasswordContainer = "";

      if (includeLowerCase) { ResultAllChars += lowercaseChar; }
      if (includeUpperCase) { ResultAllChars += uppercaseChar; }
      if (includeSpecial) { ResultAllChars += specialChar; }
      if (includeNumbers) { ResultAllChars += numbersChar; }

      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * ResultAllChars.length);
        generatedPasswordContainer += ResultAllChars[randomIndex];
      }

      return generatedPasswordContainer;
    }
  }
}
