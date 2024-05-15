
import { logoutSubmit } from "../../../functions/logout/logout_submit"

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
}

