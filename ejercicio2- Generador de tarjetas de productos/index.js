let productos = [
    { nombre: "Camiseta", descripcion: "De algodón", precio: "S/.20" },
    { nombre: "Auriculares", descripcion: "Con micrófono", precio: "S/.50" },
    { nombre: "Taza", descripcion: "Cerámica blanca", precio: "S/.10" }
];

document.getElementById('generar').onclick = function () {
    console.log("Botón clickeado");

    let contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';  

    for (let p of productos) {
        console.log("Creando tarjeta para el producto: " + p.nombre);

        let card = document.createElement('div');
        card.className = 'card p-3 m-2';
        card.innerHTML = `
            <h5>${p.nombre}</h5>
            <p>${p.descripcion}</p>
            <strong>${p.precio}</strong>
        `;
        contenedor.appendChild(card);
    }
};
