document.addEventListener("DOMContentLoaded", function () {

  const emailInput = document.querySelector("#email-input");
  const submitButton = document.querySelector("#submit-button");

  submitButton.addEventListener("click", (e) => {
    console.log("Botão!");
    e.preventDefault();
    if (emailInput.value.trim() === "") {
      alert("Please provide a valid email!");
    } else {
      window.location.href = "success.html";
    }
  });
});
