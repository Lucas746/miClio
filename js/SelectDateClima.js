function temp() {
  const min = -10
  const max = 35
  return Math.round(Math.random()*(max-min))+min
}
function hum() {
  const min = 0
  const max = 100
  return Math.round(Math.random()*(max-min))+min

}

let tempText
let humText

document.getElementById(tempText).innerHTML = "Laraza";
document.getElementById(humText).innerHTML = "Saraza";
