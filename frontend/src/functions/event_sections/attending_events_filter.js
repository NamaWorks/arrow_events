


export const filterAttendingEvents = (username) => {
  const events = document.querySelectorAll(".event")
  // console.log(username)
  events.forEach(event => {
      let attendantsArr = []
      const eventAttendantsList = event.querySelector(".attendants-list")
      const attendants = eventAttendantsList.querySelectorAll("li")
      attendants.forEach((li) => {
        const usernameP = li.querySelector("p")
        attendantsArr.push(usernameP.innerText)
      })
      console.log(attendantsArr)
      if(!(attendantsArr.includes(username))){

        event.remove()
      }
    });
}