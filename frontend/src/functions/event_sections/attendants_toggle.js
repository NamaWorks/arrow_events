export function attendantToggle (btnElement) {
  console.log(btnElement)
  const ulDiv = btnElement.parentElement.parentElement.querySelector(".attendants-list");
  ulDiv.classList.toggle("attendants-seen")
  btnElement.classList.toggle("rotate")
  btnElement.classList.toggle("no-rotate")
  // window.location.href= 
}