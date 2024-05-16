import { printNavbar } from "../../components/elements/navbar/navbar"
import { printEvents } from "../../components/pages/events_section/events_section"

export const createEventSubmit = async () => {
  const eventName = document.querySelector("#event-name-input").value
  const eventLocation = document.querySelector("#event-location-input").value
  const eventDate = document.querySelector("#event-date-input").value
  const eventDescription = document.querySelector("#event-description-input").value
  const eventCapacity = document.querySelector("#event-capacity-input").value
  const data = await fetch("http://localhost:3000/events/new", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: eventName,
      description: eventDescription,
      date: eventDate,
      location: eventLocation,
      capacity: eventCapacity
    })
  })

  const dataResponse = await data.json()

  console.log(data)

  if(data.status == 201){
    alert(`event created`)

    printNavbar()
    printEvents()
  } else {alert(`error creating event`)}

}