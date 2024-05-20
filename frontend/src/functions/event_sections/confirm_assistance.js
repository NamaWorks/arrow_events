import { api } from "../../data/global_variables"

export const confirmAssistance = async (btnElement) => {
  const article = btnElement.parentElement
  const eventTitle = article.querySelector(".event-title").innerText
  const events = await fetch(api + "events/all")
  const eventsResponse = await events.json()
  console.log(eventsResponse)

  const eventsAttendantsUsername = eventsResponse.map()
}