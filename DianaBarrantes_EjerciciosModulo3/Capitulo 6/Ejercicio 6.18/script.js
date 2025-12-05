const val1 = prompt("Escriba el primer número entero:");
const val2 = prompt("Escriba el segundo número entero:");
const val3 = prompt("Escriba el tercer número entero:");

const num1 = parseInt(val1);
const num2 = parseInt(val2);
const num3 = parseInt(val3);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Error: Por favor, asegúrese de ingresar tres números enteros válidos.");
} else {
    const suma = num1 + num2 + num3;
    const promedio = suma / 3.0;
    const producto = num1 * num2 * num3;

    const menor = Math.min(num1, num2, num3);
    const mayor = Math.max(num1, num2, num3);

    const mensajeResultados = `
        Resultados para los números: ${num1}, ${num2}, ${num3}

        Suma: ${suma}
        Promedio: ${promedio.toFixed(2)}
        Producto: ${producto}

        Menor: ${menor}
        Mayor: ${mayor}
    `;

    alert(mensajeResultados);
}

window.onload = function () {
    document.getElementById("resultados").innerHTML = `
        <h1>Cálculos Realizados</h1>
        <p>Verifique el cuadro de diálogo alert para los resultados.</p>
        <p>Los números ingresados fueron: ${val1}, ${val2}, ${val3}</p>
    `;
};
