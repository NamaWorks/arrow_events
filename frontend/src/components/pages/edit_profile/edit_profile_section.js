import { api, app } from "../../../data/global_variables"
import { submitProfileChanges } from "../../../functions/edit_profile/edit_profile_submit"
import { clearSections } from "../../../functions/sections/clear_sections"

export const printEditProfileSection = async () => {
  clearSections()

  const user = localStorage.getItem("user")

  const userJson = JSON.parse(user)
  const userId = userJson.user._id
  
  const userFetch = await fetch(api+"users/" + userId)
  const userResponse = await userFetch.json()

  const editProfileSection = document.createElement("section")
  editProfileSection.setAttribute("id", "loged-user-sectiown")
  app.append(editProfileSection)

  const {profilePicture} = userResponse
  const {email} = userResponse
  const {username} = userResponse

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "edit-profile-form")
  editProfileSection.append(formElement)

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  formElement.append(profilePictureDiv)
  
  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  img.style.width = "100px" //! THIS IS A TEMP SOLUTION
  profilePictureDiv.append(img)

  const changeProfilePictureLabel = document.createElement("label")
  changeProfilePictureLabel.setAttribute("for", "change-pfp-input")
  changeProfilePictureLabel.innerText = "change profile picture"
  formElement.append(changeProfilePictureLabel)
  const changeProfilePictureInput = document.createElement("input")
  changeProfilePictureInput.setAttribute("id", "change-pfp-input")
  changeProfilePictureInput.setAttribute("type", "file")
  changeProfilePictureInput.setAttribute("accept", "image/png, image/jpg")
  formElement.append(changeProfilePictureInput)

  const changeUsernameLabel = document.createElement("label")
  changeUsernameLabel.setAttribute("for", "change-username-inpput")
  changeUsernameLabel.innerText = "change username"
  formElement.append(changeUsernameLabel)
  const changeUsernameInput = document.createElement("input")
  changeUsernameInput.setAttribute("type", "text")
  changeUsernameInput.setAttribute("id","change-username-input")
  changeUsernameInput.setAttribute("placeholder", "new username")
  formElement.append(changeUsernameInput)
  
  const changePasswordLabel = document.createElement("label")
  changePasswordLabel.setAttribute("for", "change-password-input")
  changePasswordLabel.innerText = "change password"
  formElement.append(changePasswordLabel)
  const changePasswordInput = document.createElement("input")
  changePasswordInput.setAttribute("type", "text")
  changePasswordInput.setAttribute("id", "change-password-input")
  changePasswordInput.setAttribute("placeholder", "change password")
  formElement.append(changePasswordInput)

  const submitChangesBtn = document.createElement("button")
  submitChangesBtn.innerText = "save changes"
  submitChangesBtn.setAttribute("id", "save-changes-btn")
  //! PENDING TO ADD THE FUNCTIONALITY TO UPDATE THE DATA
  submitChangesBtn.addEventListener("click", (e) => {
    e.preventDefault()
    submitProfileChanges()
  } )
  formElement.append(submitChangesBtn)
}