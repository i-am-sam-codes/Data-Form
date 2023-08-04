const form = document.getElementById("form");
const subBtn = document.getElementById("sub-btn");
const emailInput = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const countryInput = document.getElementById("country");
const zipCodeInput = document.getElementById("zip-code");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("password-confirmation");

//form validation
form.addEventListener("submit", (e) => {
  if (!emailInput.validity.valid) {
    showError();
    e.preventDefault();
  }
});

emailInput.addEventListener("input", (e) => {
  if (emailInput.validity.valid) {
    emailError.textContent = ""; // Clear the error message
    emailError.classList.remove("active"); // Hide the error box
  } else {
    showError();
  }
});

function showError() {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
  } else if (emailInput.validity.tooShort) {
    emailError.textContent = `Email should be at least ${emailInput.minLength} characters; you entered ${emailInput.value.length}.`;
  }

  emailError.className = "error active";
}
