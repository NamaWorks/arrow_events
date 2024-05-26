import "./at-events.css"

export const printBrand = () => {
  const brand = document.createElement("h1")
  brand.innerText = "@events"
  brand.setAttribute("id", "brand-id")
  const section = document.querySelector("section")
  section.append(brand)
}