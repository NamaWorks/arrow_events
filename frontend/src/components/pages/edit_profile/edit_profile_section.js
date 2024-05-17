import { app } from "../../../data/global_variables"
import { clearSections } from "../../../functions/sections/clear_sections"

export const printEditProfileSection = async () => {
  clearSections()

  const user = sessionStorage.getItem("user")

  const userJson = JSON.parse(user)
  const userId = userJson.user._id
  
  const userFetch = await fetch("http://localhost:3000/users/" + userId)
  const userResponse = await userFetch.json()

  const logedUserSection = document.createElement("section")
  logedUserSection.setAttribute("id", "loged-user-sectiown")
  app.append(logedUserSection)

  const {profilePicture} = userResponse
  const {email} = userResponse
  const {username} = userResponse

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  logedUserSection.append(profilePictureDiv)
  
  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  img.style.width = "100px" //! THIS IS A TEMP SOLUTION
  profilePictureDiv.append(img)

}