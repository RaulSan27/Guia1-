// Obtener el párrafo y el botón
const parrafo = document.getElementById('mi-parrafo');
const boton = document.getElementById('cambiar-color-btn');

// Agregar el evento de clic al botón
boton.addEventListener('click', function () {
    // Cambiar el color de fondo del párrafo
    parrafo.style.backgroundColor = 'blue';
});
