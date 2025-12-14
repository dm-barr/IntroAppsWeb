var principal = 10000.00;
var contenedor = document.getElementById("contenedor-tablas");

for (var tasa = 0.05; tasa <= 0.10; tasa += 0.01) {

    var tabla = document.createElement("table");
    var caption = document.createElement("caption");
    caption.textContent =
        "Cálculo del interés compuesto (" +
        (tasa * 100).toFixed(0) + "%)";
    tabla.appendChild(caption);
    var thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Año</th>
            <th>Monto en depósito</th>
        </tr>`;
    tabla.appendChild(thead);
    var tbody = document.createElement("tbody");
    for (var anio = 1; anio <= 10; anio++) {
        var monto = principal * Math.pow(1.0 + tasa, anio);

        var fila = document.createElement("tr");
        if (anio % 2 !== 0) {
            fila.className = "filaImpar";
        }

        fila.innerHTML = `
            <td>${anio}</td>
            <td>${monto.toFixed(2)}</td>
        `;

        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
}
