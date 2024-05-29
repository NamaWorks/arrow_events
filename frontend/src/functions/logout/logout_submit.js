import { printNavbar } from "../../components/elements/navbar/navbar"
import { printEvents } from "../../components/pages/events_section/events_section"
import { clearSections } from "../sections/clear_sections"


export const logoutSubmit = () => {
  if(localStorage.getItem("user")) {
    clearSections()
    localStorage.removeItem("user")
    printNavbar()
    printEvents()
  }
}