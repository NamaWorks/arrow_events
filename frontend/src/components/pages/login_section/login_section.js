import { app } from "../../../data/global_variables";
import { loginSubmit } from "../../../functions/login/login_submit";

export const printLogin = () => {
  const loginSection = document.createElement("section")
  loginSection.setAttribute("id", "login_section")
  app.append(loginSection)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "login-form")
  loginSection.append(formElement)

  const usernameLabel = document.createElement("label")
  usernameLabel.setAttribute("for", "login-username-input")
  usernameLabel.innerText = "username"
  formElement.append(usernameLabel)
  const usernameInput = document.createElement("input")
  usernameInput.setAttribute("type", "text")
  usernameInput.setAttribute("placeholder", "username")
  usernameInput.setAttribute("id", "login-username-input")
  formElement.append(usernameInput)

  const passwordLabel = document.createElement("label")
  passwordLabel.setAttribute("for", "login-password-input")
  passwordLabel.innerText = "password"
  formElement.append(passwordLabel)
  const passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("placeholder", "password")
  passwordInput.setAttribute("id", "login-password-input")
  formElement.append(passwordInput)

  const submitLoginBtn = document.createElement("button")
  submitLoginBtn.innerText = "enter"
  submitLoginBtn.setAttribute("id", "submit-login-btn")
  submitLoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginSubmit()
  })
  formElement.append(submitLoginBtn)

  
}