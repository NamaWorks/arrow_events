import { app } from "../../../data/global_variables"
import { createEventSubmit } from "../../../functions/create_event/create_event_submit"
import { clearSections } from "../../../functions/sections/clear_sections"

export const printCreateEventSection = () => {
  clearSections()
  const createEventSection = document.createElement("section")
  createEventSection.setAttribute("id", "create_event_section")
  app.append(createEventSection)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "create-event-form")
  createEventSection.append(formElement)

  const nameLabel = document.createElement("label")
  nameLabel.setAttribute("for", "event-name-input")
  nameLabel.innerText = "event name"
  formElement.append(nameLabel)
  const eventNameInput = document.createElement("input")
  eventNameInput.setAttribute("type", "text")
  eventNameInput.setAttribute("placeholder", "event name")
  eventNameInput.setAttribute("id", "event-name-input")
  formElement.append(eventNameInput)

  const locationLabel = document.createElement("label")
  locationLabel.setAttribute("for", "event-location-input")
  locationLabel.innerText = "event location"
  formElement.append(locationLabel)
  const eventLocationInput = document.createElement("input")
  eventLocationInput.setAttribute("type", "text")
  eventLocationInput.setAttribute("placeholder", "event location")
  eventLocationInput.setAttribute("id", "event-location-input")
  formElement.append(eventLocationInput)

  const descriptionLabel = document.createElement("label")
  descriptionLabel.setAttribute("for", "event-description-input")
  descriptionLabel.innerText = "event description"
  formElement.append(descriptionLabel)
  const eventDescriptionInput = document.createElement("input")
  eventDescriptionInput.setAttribute("type", "text")
  eventDescriptionInput.setAttribute("placeholder", "event description")
  eventDescriptionInput.setAttribute("id", "event-description-input")
  formElement.append(eventDescriptionInput)

  const dateLabel = document.createElement("label")
  dateLabel.setAttribute("for","event-date-input")
  dateLabel.innerText = "event date"
  formElement.append(dateLabel)
  const eventDateInput = document.createElement("input")
  eventDateInput.setAttribute("type", "date")
  eventDateInput.setAttribute("id", "event-date-input")
  formElement.append(eventDateInput)

  const capacityLabel = document.createElement("label")
  capacityLabel.setAttribute("for", "event-capacity-input")
  capacityLabel.innerText = "capacity"
  formElement.append(capacityLabel)
  const eventCapacityInput = document.createElement("input")
  eventCapacityInput.setAttribute("type", "number")
  eventCapacityInput.setAttribute("id", "event-capacity-input")
  formElement.append(eventCapacityInput)

  const submitEventBtn = document.createElement("button")
  submitEventBtn.innerText = "publish"
  submitEventBtn.setAttribute("id", "submit-even-btn")
  formElement.append(submitEventBtn)
  submitEventBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    createEventSubmit()
  })
}