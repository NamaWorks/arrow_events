import { data } from "../../../data/data"
import { app } from "../../../data/global_variables"

export const printNavbar = () => {
  let nav = document.createElement("nav")

  let ulNav = document.createElement("ul")
  ulNav.classList.add("ul-nav")

  nav.append(ulNav)

  for (const navElement in data.navItems) {
    const li = document.createElement("li")
    li.classList.add("nav-li")
    const btnLi = document.createElement("button")

    //! PREPARE THE EVENTS FOR THE NsAV ELEMENTS
    btnLi.addEventListener("click", () => console.log(data.navItems[navElement].text))

    btnLi.innerText = data.navItems[navElement].text

    li.append(btnLi)
    ulNav.append(li)
  }
  
  
  app.append(nav)
}