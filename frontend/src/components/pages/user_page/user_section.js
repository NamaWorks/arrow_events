import "./user_section.css"

import { api, app } from "../../../data/global_variables";
import { clearSections } from "../../../functions/sections/clear_sections";
import { printEditProfileSection } from "../edit_profile/edit_profile_section";
import { printIcon } from "../../elements/brand/icons";
import { willAssistToggle } from "../../../functions/user_page/will_assist_toggle";

export const printLogedUserSection = async () => {
  clearSections()
  const user = localStorage.getItem("user")

  const userJson = JSON.parse(user)
  const userId = userJson.user._id
  
  const userFetch = await fetch(api+"users/" + userId)
  const userResponse = await userFetch.json()

  const logedUserSection = document.createElement("section")
  logedUserSection.classList.add("user-section")
  logedUserSection.setAttribute("id", "loged-user-section")
  app.append(logedUserSection)

  const {profilePicture} = userResponse
  const {email} = userResponse
  const {username} = userResponse

  // -------------------------------

  const profilePictureDiv = document.createElement("div")
  profilePictureDiv.setAttribute("id", "user-pfp-div")
  profilePictureDiv.classList.add("user-image-div")
  logedUserSection.append(profilePictureDiv)
  
  const img = document.createElement("img")
  img.setAttribute("src" , profilePicture)
  profilePictureDiv.append(img)

  const editProfileBtn = document.createElement("button")
  editProfileBtn.innerText = "edit profile"
  editProfileBtn.classList.add("change-section-btn")
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

  const attendingEventsToggle = document.createElement("div")
  attendingEventsToggle.classList.add("list-toggle")
  logedUserSection.append(attendingEventsToggle)
  
  const attendingEventsTitle = document.createElement("h4")
  attendingEventsTitle.innerText = "will assist to"
  attendingEventsToggle.append(attendingEventsTitle)
  const arrow = printIcon("https://res.cloudinary.com/dgrhbsilh/image/upload/v1716960281/14_RTC_P10_be-to-fe-js/icons/arrow_hfuzjx.png")
  attendingEventsToggle.append(arrow)

  arrow.addEventListener("click", willAssistToggle)
  
  
  const attendingEventsDiv = document.createElement("div")
  attendingEventsDiv.setAttribute("id", "attending-events-div")
  logedUserSection.append(attendingEventsDiv)

  attendingEvents.forEach(attendingEvent => {
    const attendingEventElement = document.createElement("p")
    attendingEventElement.innerText = attendingEvent.title
    attendingEventsDiv.append(attendingEventElement)
  })
}