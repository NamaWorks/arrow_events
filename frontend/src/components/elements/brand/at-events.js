import "./at-events.css"

export const printBrand = () => {
  setTimeout(() => {
    const brand = document.createElement("h1")
    brand.innerText = "@events"
    brand.setAttribute("id", "brand-id")
    const section = document.querySelector("section")
    section.insertBefore(brand, section.firstChild)
    console.log(`brand printed`)
  }, 450);
}