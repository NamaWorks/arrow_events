import { printEvents } from "../../components/pages/events_section/events_section"
import { api } from "../../data/global_variables"

export const cancelAssistance = async (btnElement) => {
  const logedUser = JSON.parse(localStorage.getItem("user"));
  const eventTitle =
    btnElement.parentElement.querySelector(".event-title").innerText;

  const events = await fetch(api + "events/all");
  const eventsResponse = await events.json();

  eventsResponse.forEach(async (event) => {
    const eventTitleDb = event.title;
    const eventAttendantsDb = event.attendants;
    
    if (eventTitleDb == eventTitle) {
      const userToRemove = logedUser.user;
      let updatedAttendants = [];

      const eventId = event._id;

      eventAttendantsDb.forEach(attendant => {
        attendant.username == logedUser.user.username ? console.log(`present`) : updatedAttendants.push(attendant._id)
      })

      const data = await fetch(api + "events/update/" + eventId, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + logedUser.token,
        },
        method: "PUT",
        body: JSON.stringify({
          ...event,
          attendants: updatedAttendants,
        }),
      });

      const dataResponse = await data.json();
      // console.log(dataResponse)
      printEvents();
      alert(`assistance canceled`)
    }
  });
};