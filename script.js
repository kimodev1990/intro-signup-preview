let errorIcon = document.querySelectorAll(".error-icon");
let errorLabel = document.querySelectorAll(".label-info");
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputs.forEach((items, index) => {
    if (
      items.value === "" ||
      (validateEmail(items.value) === true && index == 2)
    ) {
      showError(index);
    } else {
      hideError(index);
    }
  });
});

function validateEmail(inputText) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailFormat)) {
    return false;
  } else {
    return true;
  }
}

function showError(inputIndex) {
  errorIcon[inputIndex].classList.add("error-icon-show");
  errorLabel[inputIndex].classList.add("label-info-show");
  inputs[inputIndex].classList.add("input-border");
}

function hideError(inputIndex) {
  errorIcon[inputIndex].classList.remove("error-icon-show");
  errorLabel[inputIndex].classList.remove("label-info-show");
  inputs[inputIndex].classList.remove("input-border");
}
