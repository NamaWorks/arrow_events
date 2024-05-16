import { printLogin } from "../../components/pages/login_section/login_section";

export const signupSubmit = async () => {
  const username = document.querySelector("#signup-username-input").value;
  const password = document.querySelector("#signup-password-input").value;
  const email = document.querySelector("#signup-email-input").value;
  // const profilePicture = document
  const data = await fetch("http://localhost:3000/users/new", {
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
    printLogin()
  } else { alert(`error at signup`) }
  
}