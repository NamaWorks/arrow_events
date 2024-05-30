export function eventToggle (btnElement) {
  const event = btnElement.parentElement.parentElement
  event.classList.toggle("event-seen")
}