import "./style.css/"

import { printNavbar } from "./src/components/elements/navbar/navbar";
import { printEvents } from "./src/components/pages/events_section/events_section";
import { printSignup } from "./src/components/pages/signup_section/signup_section";
import { printPopup } from "./src/components/elements/popups/popups";
import { logoutSubmit } from "./src/functions/logout/logout_submit";


printNavbar()
// logoutSubmit()
printEvents()
// printSignup()
printPopup("welcome to @events!", "green")