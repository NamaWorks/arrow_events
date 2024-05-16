import { app } from "../../../data/global_variables"
import { signupSubmit } from "../../../functions/signup/signup_submit"

export const printSignup = () => {
  const signupSection = document.createElement("section")
  signupSection.setAttribute("id", "signup_section")
  app.append(signupSection)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "signup-form")
  signupSection.append(formElement)

  const usernameLabel = docuement.createElement("label")
  usernameLabel.setAttribute("for", "signup-username-input")
  usernameLabel.innerText = "username"
  formElement.append(usernameLabel)
  const usernameInput = document.createElement("input")
  usernameInput.setAttribute("type", "text")
  usernameInput.setAttribute("placeholder", "username")
  usernameInput.setAttribute("id", "signup-username-input")
  formElement.append(usernameInput)

  const emailLabel = document.createElement("label")
  emailLabel.setAttribute("for", "signup-email-input")
  emailLabel.innerText = "email"
  formElement.append(emailLabel)
  const emailInput = document.createElement("input")
  emailInput.setAttribute("type", "email")
  emailInput.setAttribute("placeholder", "your@email.com")
  emailInput.setAttribute("id", "signup-email-input")
  formElement.append(emailInput)

  const passwordLabel = document.createElement("label")
  passwordLabel.setAttribute("for", "signup-password-input")
  passwordLabel.innerText = "password"
  formElement.append(passwordLabel)
  const passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("placeholder", "password")
  passwordInput.setAttribute("id", "signup-password-input")
  formElement.append(passwordInput)

  const submitSignupBtn = document.createElement("button")
  submitSignupBtn.innerText = "sign up"
  submitSignupBtn.setAttribute("id", "submit-signup-btn")
  submitSignupBtn.addEventListener("click", (e) => {
    e.preventDefault()
    signupSubmit()
  })
  formElement.append(submitSignupBtn)
}