let contador = 0;  // Inicializamos el contador en 0

let boton = document.getElementById('contador-btn');
let parrafo = document.getElementById('contador');

// Función que se ejecuta cada vez que se hace clic en el botón
boton.addEventListener('click', function () {
    contador++;  // Incrementa el contador

    // Actualiza el texto del párrafo
    parrafo.textContent = `Clics: ${contador}`;

    // Si el contador llega a 10, cambia el color a rojo
    if (contador >= 10) {
        parrafo.style.color = 'red';
    }
});