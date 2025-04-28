let boton = document.getElementById("botonToggle");
let parrafo = document.getElementById("miParrafo");

boton.onclick = function() {
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
    } else {
        parrafo.style.display = "none";
    }
};