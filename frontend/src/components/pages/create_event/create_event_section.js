import { app } from "../../../data/global_variables"

export const printCreateEventSection = () => {
  const createEventSection = document.createElement("section")
  createEventSection.setAttribute("id", "create_event_section")
  app.append(createEventSection)

  const formElement = document.createElement("form")
  formElement.setAttribute("id", "create-event-form")
  createEventSection.append(formElement)

  const eventNameInput = document.createElement("input")
  eventNameInput.setAttribute("type", "text")
  eventNameInput.setAttribute("placeholder", "event name")
  eventNameInput.setAttribute("id", "event-name-input")
  formElement.append(eventNameInput)

  
}