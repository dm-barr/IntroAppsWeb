document.addEventListener("DOMContentLoaded", iniciar);

const FILAS = 40;
const COLUMNAS = 40;

function iniciar() {
    const cuerpo = document.getElementById("cuerpotabla");

    for (let i = 0; i < FILAS; i++) {
        const fila = document.createElement("tr");

        for (let j = 0; j < COLUMNAS; j++) {
            const celda = document.createElement("td");
            celda.addEventListener("mousemove", dibujar);
            fila.appendChild(celda);
        }

        cuerpo.appendChild(fila);
    }
}

function dibujar(event) {
    if (event.ctrlKey) {
        event.target.style.backgroundColor = "blue";
    }
    else if (event.shiftKey) {
        event.target.style.backgroundColor = "red";
    }
    else if (event.altKey) {
        event.target.style.backgroundColor = "white";
    }
}
