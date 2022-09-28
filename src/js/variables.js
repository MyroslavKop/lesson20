export { userMessage, textField, list, errorMessage };
let userMessage = document.forms["user-message"];
let { ["text-message"]: textField } = userMessage.elements;
let list = document.getElementById("list");
let errorMessage = document.querySelector(".error-message");
