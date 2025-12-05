let n1Val = window.prompt("Escriba el primer número: ");
let n2Val = window.prompt("Escriba el segundo número: ");

const salida = document.getElementById("resultado");

function esEnteroValido(valor) {
  return valor !== null && valor.trim() !== "" && !isNaN(valor);
}

if (!esEnteroValido(n1Val) || !esEnteroValido(n2Val)) {
  salida.innerHTML = `
        <h2>Error en la entrada</h2>
        <p>Debe ingresar valores numéricos válidos. Inténtelo nuevamente.</p>
    `;
} else {
  let n1 = parseInt(n1Val);
  let n2 = parseInt(n2Val);

  if (n2 === 0) {
    salida.innerHTML = `
            <h2>Error en la operación</h2>
            <p>No es posible dividir entre cero. Introduzca un segundo número distinto de 0.</p>
        `;
  } else {
    let suma = n1 + n2;
    let producto = n1 * n2;
    let diferencia = n1 - n2;
    let cociente = n1 / n2;

    salida.innerHTML = `
            <h2>Resultados</h2>
            <p><strong>Suma:</strong> ${suma}</p>
            <p><strong>Producto:</strong> ${producto}</p>
            <p><strong>Diferencia:</strong> ${diferencia}</p>
            <p><strong>Cociente:</strong> ${cociente}</p>
        `;
  }
}
