document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const divConBoton = document.getElementById('miDiv');
  
    boton.addEventListener('click', function(event) {
      event.stopPropagation(); // Detenemos la propagación del evento click del botón
      alert('Has hecho clic en el botón');
    });
  
    divConBoton.addEventListener('click', function() {
      alert('Hola! Soy el div');
    });
  });