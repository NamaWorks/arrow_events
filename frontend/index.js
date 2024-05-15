import { printNavbar } from "./src/components/elements/navbar/navbar";
import { printEvents } from "./src/components/pages/events_section/events_section";
import { printLogin } from "./src/components/pages/login_section/login_section";

printNavbar()

// if(!sessionStorage.getItem("user")){
//   printLogin()
// } else {printEvents() }