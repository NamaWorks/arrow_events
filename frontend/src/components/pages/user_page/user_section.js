import { api, app } from "../../../data/global_variables";
import { clearSections } from "../../../functions/sections/clear_sections";
import { printEditProfileSection } from "../edit_profile/edit_profile_section";

export const printLogedUserSection = async () => {
  clearSections()
  const user = localStorage.getItem("user")

  const userJson = JSON.parse(user)
  const userId = userJson.user._id
  
  const userFetch = await fetch(api+"users/" + userId)
  const userResponse = await userFetch.json()

  const logedUserSection = document.createElement("section")
  logedUserSection.setAttribute("id", "loged-user-sectiown")
  app.append(logedUserSection)

  const {profilePicture} = userResponse
  const {email} = userResponse
  const {username} = userResponse

  // -------------------------------

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  logedUserSection.append(profilePictureDiv)
  
  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  img.style.width = "100px" //! THIS IS A TEMP SOLUTION
  profilePictureDiv.append(img)

  const editProfileBtn = document.createElement("button")
  editProfileBtn.innerText = "edit profile"
  editProfileBtn.addEventListener("click", printEditProfileSection)
  logedUserSection.append(editProfileBtn)

  const userUsername = document.createElement("h4")
  userUsername.innerText = username
  logedUserSection.append(userUsername)

  const userEmail = document.createElement("h4")
  userEmail.innerText = email
  logedUserSection.append(userEmail)

  const userAttendingEventsFetch = await fetch("http://localhost:3000/events/all")
  const userAttendingEventsResponse = await userAttendingEventsFetch.json()
  
  let attendingEvents = []
  userAttendingEventsResponse.forEach(eventItem => {
    const eventAttendants = eventItem.attendants
    eventAttendants.forEach(attendant => {
      if(attendant.username == username){
        attendingEvents.push(eventItem)
      }
    })
  });

  const attendingEventsDiv = document.createElement("div")
  attendingEventsDiv.setAttribute("id", "attending-events-div")
  logedUserSection.append(attendingEventsDiv)

  const attendingEventsTitle = document.createElement("h4")
  attendingEventsTitle.innerText = "will assist to:"
  attendingEventsDiv.append(attendingEventsTitle)

  attendingEvents.forEach(attendingEvent => {
    const attendingEventElement = document.createElement("p")
    attendingEventElement.innerText = attendingEvent.title
    attendingEventsDiv.append(attendingEventElement)
  })
}