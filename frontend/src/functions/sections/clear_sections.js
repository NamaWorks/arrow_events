export const clearSections = () => {
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.remove()
  })
}