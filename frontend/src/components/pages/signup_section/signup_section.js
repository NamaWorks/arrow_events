import { app } from "../../../data/global_variables"
import { signupSubmit } from "../../../functions/signup/signup_submit"

export const printSignup = () => {
  const signupSection = document.createElement("section")
  signupSection.setAttribute("id", "signup_section")
  app.append(signupSection)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "signup-form")
  signupSection.append(formElement)

  const usernameInput = document.createElement("input")
  usernameInput.setAttribute("type", "text")
  usernameInput.setAttribute("placeholder", "username")
  usernameInput.setAttribute("id", "username-input")
  formElement.append(usernameInput)

  const emailInput = document.createElement("input")
  emailInput.setAttribute("type", "email")
  emailInput.setAttribute("placeholder", "your@email.com")
  emailInput.setAttribute("id", "email-input")
  formElement.append(emailInput)

  const passwordInput = document.createElement("input")
  passwordInput.setAttribute("type", "password")
  passwordInput.setAttribute("placeholder", "password")
  passwordInput.setAttribute("id", "password-input")
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