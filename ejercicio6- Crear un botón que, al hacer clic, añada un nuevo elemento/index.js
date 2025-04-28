let boton = document.getElementById("botonAgregar");
let lista = document.getElementById("miLista");

boton.onclick = function() {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = "Nuevo elemento";
    lista.appendChild(nuevoElemento);
};
