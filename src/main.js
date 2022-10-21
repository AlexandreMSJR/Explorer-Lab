import "./css/index.css"

const ccBgColor1 = document.querySelector(
  "#app > section > div.cc-bg > svg > g > g:nth-child(1) > path"
)
const ccBgColor2 = document.querySelector(
  "#app > section > div.cc-bg > svg > g > g:nth-child(2) > path"
)

const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
  const colors = {
    visa: ["#2D57F2", "#436D99"],
    masterCard: ["#DF6F29", "#C69347"],
    default: ["black", "grey"],
    cielo: ["#060215", "#C9101B"],
  }

  ccBgColor1.setAttribute("fill", colors[type][0])
  ccBgColor2.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

globalThis.setCardType = setCardType
