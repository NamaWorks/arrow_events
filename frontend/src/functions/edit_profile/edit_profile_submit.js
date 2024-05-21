import { api } from "../../data/global_variables"
import { logoutSubmit } from "../logout/logout_submit"

export const submitProfileChanges = async () => {
  const user = JSON.parse(localStorage.getItem("user")).user
  const token = JSON.parse(localStorage.getItem("user")).token
  let currentUsername = user.username
  let currentPassword = user.password

  let newUsername = document.querySelector("#change-username-input").value
  let newPassword = document.querySelector("#change-password-input").value
  let newPfp = document.querySelector("#change-pfp-input").value
  
  if(newUsername == ""){
    newUsername = currentUsername
  }

  console.log(currentPassword)
  console.log(newPassword)

  const data = await fetch(`${api}users/update/${user._id}`, {
    headers: {
       "Content-type": "application/json",
       "Authorization": "Bearer " + token
    },
    method: "PUT",
    body: JSON.stringify({
      username : newUsername,
      password : newPassword,
      profilePicture : newPfp,
    }),
  })


  const dataResponse = await data.json()
  if(data.status == 200) {
    alert(`user data updated`)
    logoutSubmit()
  } else {
    alert(`error at saving changes`)
  }
}