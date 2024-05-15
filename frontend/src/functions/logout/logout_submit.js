import { printNavbar } from "../../components/elements/navbar/navbar"


export const logoutSubmit = () => {
  if(sessionStorage.getItem("user")) {
    sessionStorage.removeItem("user")
    printNavbar()
  }
}