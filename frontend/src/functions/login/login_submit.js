import { printNavbar } from "../../components/elements/navbar/navbar"
import { printEvents } from "../../components/pages/events_section/events_section"

 export const loginSubmit = async () => {
  const username = document.querySelector("#username-input").value
  const password = document.querySelector("#password-input").value
  const data = await fetch("http://localhost:3000/users/login", {
    headers: {
      "Content-type" : "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: username,
      password:password
    })
  })
  
  const dataResponse = await data.json()

  if(data.status == 200){
    sessionStorage.setItem("user", JSON.stringify(dataResponse))
    
    alert(`welcome ${username}`)
  
    const loginSection = document.querySelector("#login_section")
    loginSection.remove()
    
  
    printNavbar()
    printEvents()
  } else { alert(`username or password incorrect`) }

  
}
