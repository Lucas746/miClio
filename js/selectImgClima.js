function hora() {
  const min = 0
  const max = 24
  return Math.round(Math.random()*(max-min))+min
}
let now = hora()

//const now = new Date().getHours()

let moment;
let momentLetras;
if (now < 5) {
  //Noche
  moment = 1
  momentLetras = 'Noche'
}
else if (now < 9) {
  //Amanecer
  moment = 2
  momentLetras = 'Amanecer'

}
else if (now < 16) {
  //Mediodia
  moment = 3
  momentLetras = 'Mediodia'

}
else if (now < 20) {
  //Atardecer
  moment = 2
  momentLetras = 'Atardecer'

}
else {
  //Noche
  moment = 1
  momentLetras = 'Noche'

}

function iclima() {
  const min = 0
  const max = 4
  return Math.round(Math.random()*(max-min))+min
}
const ic = iclima()
const clima = ['Despejado', 'Parcialmente Nublado', 'Nublado', 'Lluvia', 'Nieve']
let climaNow = clima[ic]

let icoClima;
let icoClimaHover;
let imgClima;

if (ic == 0 & moment == 1) {
  document.getElementById('imgClima').src = "./images/clima/NocheDespejada.jpg";
  document.getElementById('icoClima').src = "./images/icons/icons_clima/Noche-despejada_bl_slim.png";
  document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Noche-despejada_ce.png"
}
else if (ic == 1 & moment == 1) {
   document.getElementById('imgClima').src = "./images/clima/NocheParcialmenteNublada.jpg";
   document.getElementById('icoClima').src = "./images/icons/icons_clima/Noche-parc-nublada_bl_slim.png";
   document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Noche-parc-nublada_ce.png"
}
else if (ic == 2 & moment == 1) {
   document.getElementById('imgClima').src = "./images/clima/NocheNublada.jpg";
   document.getElementById('icoClima').src = "./images/icons/icons_clima/Nublado_bl_slim.png";
   document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Nublado_ce.png"
}
else if (ic == 0 & moment == 2) {
   document.getElementById('imgClima').src = "./images/clima/AmanecerDespejado.jpg";
   document.getElementById('icoClima').src = "./images/icons/icons_clima/Soleado_bl_slim.png";
   document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Soleado_ce.png"
}
else if (ic == 1 & moment == 2) {
   document.getElementById('imgClima').src = "./images/clima/AmanecerParcialmenteNublado.jpg";
   document.getElementById('icoClima').src = "./images/icons/icons_clima/Parc-Nublado_bl_slim.png";
   document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Parc-Nublado_ce.png"
}
else if (ic == 2 & moment == 2) {
   document.getElementById('imgClima').src = "./images/clima/AmanecerNublado.jpg";
   document.getElementById('icoClima').src = "./images/icons/icons_clima/Nublado_bl_slim.png";
   document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Nublado_ce.png"
}
else if (ic == 0 & moment == 3) {
  document.getElementById('imgClima').src = "./images/clima/MediodiaDespejado.jpg";
  document.getElementById('icoClima').src = "./images/icons/icons_clima/Soleado_bl_slim.png";
  document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Soleado_ce.png"
}
else if (ic == 1 & moment == 3) {
  document.getElementById('imgClima').src = "./images/clima/MediodiaParcialmenteNublado.jpg";
  document.getElementById('icoClima').src = "./images/icons/icons_clima/Parc-Nublado_bl_slim.png";
  document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Parc-Nublado_ce.png"
}
else if (ic == 2 & moment == 3) {
  document.getElementById('imgClima').src = "./images/clima/MediodiaNublado.png";
  document.getElementById('icoClima').src = "./images/icons/icons_clima/Nublado_bl_slim.png";
  document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Nublado_ce.png"
}
else if (ic == 3) {
  document.getElementById('imgClima').src = "./images/clima/Lluvia.jpg";
  document.getElementById('icoClima').src = "./images/icons/icons_clima/Lluvia_bl_slim.png";
  document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Lluvia_ce.png"
}
else {
  document.getElementById('imgClima').src = "./images/clima/Nieve.jpg";
  document.getElementById('icoClima').src = "./images/icons/icons_clima/Nieve_bl_slim.png";
  document.getElementById('icoClimaHover').src = "./images/icons/icons_clima/Nieve_ce.png"
}
