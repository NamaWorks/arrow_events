import { printLogin } from "../../components/pages/login_section/login_section";
import { api } from "../../data/global_variables";
import { outroAnimation } from "../sections/intro_animation";

export const signupSubmit = async () => {
  const username = document.querySelector("#signup-username-input").value;
  const password = document.querySelector("#signup-password-input").value;
  const email = document.querySelector("#signup-email-input").value;
  // const profilePicture = document
  const data = await fetch(api+"users/new", {
    headers: {
      "Content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  });
  const dataResponse = await data.json();

  if(data.status == 201){
    const currentSection = document.querySelector("section")
    outroAnimation(currentSection)
    setTimeout(() => {
    currentSection.remove()
      printLogin()
    }, 400);
  } else { alert(`error at signup`) }
  
}