const val1 = prompt("Escriba el primer número:");
const val2 = prompt("Escriba el segundo número:");

const num1 = parseInt(val1);
const num2 = parseInt(val2);

const suma = num1 + num2;
const producto = num1 * num2;
const diferencia = num1 - num2;
const cociente = num1 / num2;

window.onload = function () {
    document.getElementById("resultados").innerHTML = `
        <h1>Resultados del Cálculo</h1>
        <p><strong>Primer número:</strong> ${num1}</p>
        <p><strong>Segundo número:</strong> ${num2}</p>
        
        <h2>Suma</h2>
        <p>${num1} + ${num2} = <strong>${suma}</strong></p>

        <h2>Producto</h2>
        <p>${num1} * ${num2} = <strong>${producto}</strong></p>

        <h2>Diferencia</h2>
        <p>${num1} - ${num2} = <strong>${diferencia}</strong></p>

        <h2>Cociente</h2>
        <p>${num1} / ${num2} = <strong>${cociente}</strong></p>
    `;
};
