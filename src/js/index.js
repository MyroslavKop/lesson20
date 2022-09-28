import "../scss/_style.scss";
import * as bootstrap from "bootstrap";
import { addToDo } from "./addToDo";
import { userMessage, textField, list, errorMessage } from "./variables";
import { listClick, listChange } from "./listListener";

userMessage.onsubmit = (event) => {
  event.preventDefault();
  if (textField.value.trim() === "") {
    textField.classList.add("is-invalid");
    errorMessage.innerHTML = "Please fill out this field";
    return;
  }
  addToDo(textField.value);
  userMessage.reset();
};
textField.oninput = () => {
  if (textField.classList.contains("is-invalid")) {
    textField.classList.remove("is-invalid");
    errorMessage.innerHTML = "";
  }
};
