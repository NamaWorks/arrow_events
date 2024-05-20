import { data } from "../../../data/data";
import { api, app } from "../../../data/global_variables";
import { cancelAssistance } from "../../../functions/event_sections/cancel_assistance";
import { confirmAssistance } from "../../../functions/event_sections/confirm_assistance";
import { clearSections } from "../../../functions/sections/clear_sections";


export const printEvents = async () => {
  clearSections()
  const eventsSection = document.createElement("section")
  eventsSection.setAttribute("id", "events_section")
  app.append(eventsSection)
  
  const res = await fetch(api+"events/all");
  const events = await res.json()
  
  for (const event of events) {
    
    const article = document.createElement("article")
    article.classList.add("event")
    eventsSection.append(article)

    // --------------------------------------------

    const eventTitleDiv = document.createElement("div")
    eventTitleDiv.classList.add("event-title")
    article.append(eventTitleDiv)

    const eventTitleH3 = document.createElement("h3")
    eventTitleH3.innerText = await event.title
    eventTitleDiv.append(eventTitleH3)

    // --------------------------------------------

    const eventInfoDiv = document.createElement("div")
    eventInfoDiv.classList.add("event-info")
    article.append(eventInfoDiv)  

    const eventInfoData = document.createElement("div")
    eventInfoData.classList.add("event-info-data")
    eventInfoDiv.append(eventInfoData)  

    const eventDate = document.createElement("h4")
    eventDate.innerText = "Date: " + await event.date

    const eventLocation = document.createElement("h4")
    eventLocation.innerText = "Location: " + await event.location

    const eventCapacity = document.createElement("h4")
    eventCapacity.innerText = "Capacity: " + await event.capacity

    const eventDescription = document.createElement("p")
    eventDescription.innerText = await event.description

    eventInfoData.append(eventDate, eventLocation, eventCapacity, eventDescription)

    // --------------------------------------------

    const eventAttendantsDiv = document.createElement("div")
    eventAttendantsDiv.classList.add("event-attendants")
    eventInfoDiv.append(eventAttendantsDiv)

    const eventAttendantsTitle = document.createElement("h4")
    eventAttendantsTitle.innerText = "attendants"
    eventAttendantsDiv.append(eventAttendantsTitle)

    const attendantsListUl = document.createElement("ul")
    attendantsListUl.classList.add("attendants-list")
    eventAttendantsDiv.append(attendantsListUl)

    // --------------------------------------------

    const eventAttendants = await event.attendants
    eventAttendants.forEach(attendant => {
      const attendantLi = document.createElement("li")
      attendantsListUl.append(attendantLi)
      const attendantUsername = document.createElement("p")
      attendantUsername.innerText = attendant.username
      attendantLi.append(attendantUsername)
      const attendantEmail = document.createElement("p")
      attendantEmail.innerText = attendant.email
      attendantLi.append(attendantEmail)
    });

    // ---------------------------------------------

    const logedUser = JSON.parse(localStorage.getItem("user"))
    const user = await fetch(api+"users/"+logedUser.user._id)
    const userResponse = await user.json()
    
    const eventAttendantsByName = eventAttendants.map(e => e.username)
    
    if(!eventAttendantsByName.includes(userResponse.username)){
      const confirmAssistanceBtn = document.createElement("button")
      confirmAssistanceBtn.innerText = "confirm assistance"
      confirmAssistanceBtn.classList.add("confirm-assistance-btn")
      confirmAssistanceBtn.addEventListener("click", function (e) {confirmAssistance(this)})
      article.append(confirmAssistanceBtn)
    } else if(eventAttendantsByName.includes(userResponse.username)){
      const cancelAssistanceBtn = document.createElement("button")
      cancelAssistanceBtn.innerText = "cancel assistance"
      cancelAssistanceBtn.classList.add("cancel-assistance-btn")
      cancelAssistanceBtn.addEventListener("click", function (e) {cancelAssistance(this)})
      article.append(cancelAssistanceBtn)
    }
    
  }
}