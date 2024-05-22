import { api } from "../../data/global_variables"
import { logoutSubmit } from "../logout/logout_submit"

export const deactivateAccount = async () => {
  const userEl = JSON.parse(localStorage.getItem("user"))
  const userId = userEl.user._id
  const token = userEl.token
  


  const data = await fetch(api + "users/remove/" + userId, {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + token
    },
    method: "DELETE",
    body: JSON.stringify({
      username : userEl.user.username,
      email : userEl.user.email,
      password : userEl.user.password,
      profilePicture : userEl.user.profilePicture,
      active: false
    })
  })

  const dataResponse = await data.json()
  if(data.status == 200) {
    alert(`user deleted`)
    console.log(dataResponse)
    logoutSubmit()
  } else {
    alert(`error at saving changes`)
  }
}