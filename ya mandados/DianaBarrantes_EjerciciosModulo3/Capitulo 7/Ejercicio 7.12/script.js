const resultadosDiv = document.getElementById('resultados');
let htmlOutput = '';

function leerEntero(mensaje) {
    let entrada, numero;

    do {
        entrada = prompt(mensaje);

        if (entrada === null || entrada === "-1") {
            return -1;
        }

        numero = parseInt(entrada);

        if (isNaN(numero) || entrada.trim() === "") {
            alert("Entrada inválida. Por favor, ingrese un número entero.");
        }

    } while (isNaN(numero) || entrada.trim() === "");

    return numero;
}

while (true) {

    const cuenta = leerEntero("Ingrese el número de cuenta (o -1 para salir):");
    if (cuenta === -1) break;

    const saldoInicial = leerEntero(`Ingrese el saldo inicial del mes para la cuenta ${cuenta}:`);
    if (saldoInicial === -1) break;

    const cargos = leerEntero(`Ingrese el total de cargos del mes para la cuenta ${cuenta}:`);
    if (cargos === -1) break;

    const creditos = leerEntero(`Ingrese el total de créditos del mes para la cuenta ${cuenta}:`);
    if (creditos === -1) break;

    const limite = leerEntero(`Ingrese el límite de crédito permitido para la cuenta ${cuenta}:`);
    if (limite === -1) break;

    const nuevoSaldo = saldoInicial + cargos - creditos;
    const excedido = nuevoSaldo > limite;

    let clase = excedido ? "excedido" : "ok";
    let mensaje = excedido
        ? `<p class="msg-error">Se excedió el límite de crédito.</p>`
        : `<p class="msg-ok">Límite de crédito dentro del rango permitido.</p>`;

    const clienteHtml = `
        <div class="cliente-resultado ${clase}">
            <h3>Cuenta Nº ${cuenta}</h3>

            <p>Saldo Inicial: $${saldoInicial.toFixed(2)}</p>
            <p>Total de Cargos: $${cargos.toFixed(2)}</p>
            <p>Total de Créditos: $${creditos.toFixed(2)}</p>
            <p>Límite de Crédito: $${limite.toFixed(2)}</p>

            <hr>

            <p><strong>Nuevo Saldo Final: $${nuevoSaldo.toFixed(2)}</strong></p>

            ${mensaje}
        </div>
    `;

    htmlOutput += clienteHtml;
}

resultadosDiv.innerHTML = htmlOutput || "<p>No se ingresaron datos de clientes.</p>";
alert("Proceso finalizado. Consulte los resultados en la página.");
