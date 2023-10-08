// Start
// Chapter 46, 48 (Events)
// 1. Create a simple event that prints a message when the user clicks
// on an element.
// Answer
function get(){
    alert("Good Job......")
}
// 2. Create an event that hides an element when the user clicks on a
// different element
// Answer
// I Have Not UnderStand This Question??
// 3. Create a link that changes color when the user hovers over it and
// then back to its original color when the user moves the mouse
// away.
// Answer
function change1() {
    document.getElementById('hover-link').style.backgroundColor = 'orange';
}
function reset1() {
    document.getElementById('hover-link').style.backgroundColor = 'yellow';
}
// 4. Create an event that scrolls to the top of the page when the user
// clicks on a link.
// Answer
  var scrollToTopLink = document.getElementById("scrollToTopLink");
  scrollToTopLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
//   5. Create a link that plays a sound when the user clicks on it.
//   Answer
  var playSoundLink = document.getElementById("playSoundLink");
  var sound = document.getElementById("sound");
  playSoundLink.addEventListener("click", function (event) {
    event.preventDefault();
    sound.play();
  });
//   6. Create a simple link that opens a new window when clicked.
//   Answer
        document.getElementById("openWindowLink").addEventListener("click", function(e) {
            e.preventDefault(); 
            window.open("https://www.example.com");
        });
// 7. Create a simple button that alert a message when clicked.
// Answer
function none(){
    alert("Hi")
    alert("How Are You...")
}
// 8. Create a button that changes color when the user hovers over it.
// Answer
function changeColor() {
    document.getElementById('colorChangeButton').style.backgroundColor = 'blue';
}

function resetColor() {
    document.getElementById('colorChangeButton').style.backgroundColor = 'darkgreen';
}
// 9. Create a button that plays a sound when the user clicks on it.
// Answer
var playSoundButton = document.getElementById('playSoundButton');
var sound = document.getElementById('sound');
playSoundButton.addEventListener('click', () => {
    if (!sound.paused) {
        sound.pause();
        sound.currentTime = 0;
    }
    sound.play();
});
// 10. Create an event that alert a message when the user moves
// the mouse over an element.
// Answer
      var element = document.getElementById('myElement');
      element.addEventListener('mouseover', function() {
          alert('Hi!');
      });
//       11. Create an event that hides an element when the user moves
// the mouse out of it.
// Answer
var elementToHide = document.getElementById('elementToHide');
elementToHide.addEventListener('mouseout', function() {
    elementToHide.style.display = 'none';
});
// 12. Create a link that opens a new window when the user clicks
// on it and then closes the window when the user clicks on a close
// button in the new window. The size of the new window should be
// determined by the user's mouse position.
// Answer
document.addEventListener, function() {}
    var openWindowLink = document.getElementById('openWindowLink');
    openWindowLink.addEventListener('click', function(event) {
        event.preventDefault();
});
// ======================END===========================

// Start
// Chapter 49, 50 (Reading and Settingfield values)
// 1. Read the value of a user Input and print it to the console.
// Answer
var userInput = prompt("Enter something:");
console.log("You entered: " + userInput);
// 2. Read the value of a checkbox and print it to the console.
// Answer
function readCheckboxValue() {
    var checkbox = document.getElementById("myCheckbox");
    var isChecked = checkbox.checked;
    console.log("Checkbox is checked: " + isChecked);
}
// 3. Read the value of a select box and print it to the console.
// Answer
function readSelectValue() {
    var select = document.getElementById("mySelect");
    var selectedValue = select.value;
    console.log("Selected value: " + selectedValue);
}
// 4. Place some text in a field. Make up an id for the field.
// Answer
function insertText() {
    var textField = document.getElementById("myTextField");
    textField.textContent = "This is some text inserted using JavaScript.";
}
// 5. Ask the user about Martial Status. If the variable married is false,
// place the value "available" in the field with the id "status"
// Answer
function updateStatus() {
    var maritalStatusCheckbox = document.getElementById("maritalStatus");
    var statusField = document.getElementById("status");
    var married = maritalStatusCheckbox.checked;
    if (!married) {
        statusField.textContent = "Available";
    } else {
        statusField.textContent = "";
    }
}
// 6. If a input is empty, fill it with a string.
// Answer
function fillInput() {
    var inputField = document.getElementById("myInput");
    if (inputField.value === "") {
        inputField.value = "Default Text";
    }
}
// 7. Create a Registeration Form with Validation.
// Answer
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var isValid = true;

    // Clear any previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Confirm password is required.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}