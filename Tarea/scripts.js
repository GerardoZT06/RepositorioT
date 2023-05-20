
function cambiarColor() {
    var body = document.querySelector('body');
    body.style.backgroundColor = "violet";
  }
  
    function actualizarDatos(){ 
        document.getElementById("Cuatri").innerHTML = "Cuatrimestre actual:     <b>3-B</b> "

    }
    function cambiarImagen() {
        document.getElementById("imagen").src = "Images/natanael-cano-junior-h-herencia-de-patrones-y-ovi-en-los-4-ases-2.jpg";
      }
    function regresar() {
        document.getElementById("imagen").src = "Images/stephen-curry-jugador-golden-state.jpg";
      }
      function escribirTexto() {
        var divElement = document.getElementById("miDiv");
        var h1Element = document.createElement("h1");
        var textNode = document.createTextNode("Este texto no lo escribió Gerardo, lo escribió JavaScript");
        h1Element.appendChild(textNode);
        divElement.appendChild(h1Element);
      }
      function ocultarMensa je() {
        var h2Element = document.getElementById("H2");
        h2Element.style.display = "none";
      }