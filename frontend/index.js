import "./style.css/"

import { printNavbar } from "./src/components/elements/navbar/navbar";
import { printEditProfileSection } from "./src/components/pages/edit_profile/edit_profile_section";
import { printEvents } from "./src/components/pages/events_section/events_section";
import { printCreateEventSection } from "./src/components/pages/create_event/create_event_section";
import { printLogin } from "./src/components/pages/login_section/login_section";

printNavbar()

printCreateEventSection()
// printLogin()