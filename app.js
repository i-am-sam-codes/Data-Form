const form = document.getElementById("form");
const subBtn = document.getElementById("sub-btn");

//form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  subBtn.addEventListener("click", displayPopup);
});
