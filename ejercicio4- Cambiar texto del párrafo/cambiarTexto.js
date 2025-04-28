// Obtener los elementos del párrafo y el botón
const parrafo = document.getElementById('mi-parrafo');
const boton = document.getElementById('cambiar-btn');

// Agregar el evento de clic al botón
boton.addEventListener('click', function () {
    // Cambiar el texto del párrafo
    parrafo.textContent = 'Texto modificado';
});
