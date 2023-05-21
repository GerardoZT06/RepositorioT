var imagenes = [
  "images/h.gif",
  "images/g2.gif",
  "images/g3.gif",
  "images/g4s.gif",
  "images/g5.jpg"
] ;
var titulos = [
  "Forma Base",
  "Segunda marcha",
  "Tercera Marcha",
  "Cuarta Marcha",
  "Quinta marcha"
];
var posicionActual = 0; 
function actualizarImagen() {
  var imgElement = document.getElementById("imagenes");
  var h2Element = document.getElementById("h2");
  imgElement.src = imagenes[posicionActual];
  h2Element.textContent = titulos[posicionActual];
}

function siguienteImagen() {
  posicionActual++;
  if (posicionActual >= imagenes.length) {
    posicionActual = 0;
  }
  actualizarImagen();
}

function imagenAnterior() {
  posicionActual--;
  if (posicionActual < 0) {
    posicionActual = imagenes.length - 1;
  }
  actualizarImagen();
}

// Agregar EventListeners a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("btnSiguiente").addEventListener("click", siguienteImagen);
  document.getElementById("btnAnterior").addEventListener("click", imagenAnterior);
  actualizarImagen();
});