
import { logoutSubmit } from "../../../functions/logout/logout_submit"
import { printCreateEventSection } from "../../pages/create_event/create_event_section"
import { printEvents } from "../../pages/events_section/events_section"
import { printLogin } from "../../pages/login_section/login_section"
import { printSignup } from "../../pages/signup_section/signup_section"

export const checkNavbar = () => {

  if(sessionStorage.getItem("user")){
    if(document.getElementById("login")){document.getElementById("login").remove()}
    if(document.getElementById("signup")){document.getElementById("signup").remove()}
  } else if(!sessionStorage.getItem("user")){
    if(document.getElementById("logout")) {document.getElementById("logout").remove()}
    if(document.getElementById("user")) {document.getElementById("user").remove()}
    if(document.getElementById("create_event")) {document.getElementById("create_event").remove()}
  }


  if(document.getElementById("logout")) {document.getElementById("logout").addEventListener("click", logoutSubmit)}

  if(document.getElementById("signup")) {document.getElementById("signup").addEventListener("click", printSignup)}

  if(document.getElementById("events")) {document.getElementById("events").addEventListener("click", printEvents)}

  if(document.getElementById("login")) {document.getElementById("login").addEventListener("click", printLogin)}

  if(document.getElementById("create_event")) {document.getElementById("create_event").addEventListener("click", printCreateEventSection)}

  // if(document.getElementById("user")) {document.getElementById("user").addEventListener("click", )}
}

