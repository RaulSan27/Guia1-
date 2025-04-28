let boton = document.getElementById("botonEliminar");
let lista = document.getElementById("miLista");

boton.onclick = function() {
    let ultimoElemento = lista.lastElementChild;
    if (ultimoElemento) {
        lista.removeChild(ultimoElemento);
    }
};