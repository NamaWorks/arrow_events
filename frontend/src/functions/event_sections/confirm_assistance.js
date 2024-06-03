import { printEvents } from "../../components/pages/events_section/events_section"
import { api } from "../../data/global_variables"

export const confirmAssistance = async (btnElement) => {
  const logedUser = JSON.parse(localStorage.getItem("user"))
  
  const eventTitle = btnElement.parentElement.parentElement.querySelector(".event-title").querySelector("h3").innerText
  console.log(eventTitle)

  const events = await fetch(api + "events/all")
  const eventsResponse = await events.json()

  eventsResponse.forEach( async (event) => {

    const eventTitleDb = event.title
    const eventAttendantsDb = event.attendants

    const updatedAttendants = [...eventAttendantsDb]
    if(eventTitleDb == eventTitle){
      updatedAttendants.push(logedUser.user)

      // now we update the event
      const eventId = event._id

      const data = await fetch(api + "events/update/" + eventId, {
        headers:{
          "Content-type": "application/json",
          "Authorization": "Bearer " + logedUser.token
        },
        method: "PUT",
        body: JSON.stringify({
          ...event,
          attendants: updatedAttendants
        })
      })

      const dataResponse = await data.json()
      // console.log(dataResponse)
      printEvents()
      alert(`assistance confirmed`)
    }
  });
}