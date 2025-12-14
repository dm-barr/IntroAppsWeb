
var rangos = [0, 0, 0, 0, 0, 0, 0, 0, 0];

window.addEventListener("load", function() {
    mostrarDistribucion();
 
    document.getElementById("ventasBrutas").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            calcularSalario();
        }
    });
});

function calcularSalario() {
    var input = document.getElementById("ventasBrutas");
    var resultado = document.getElementById("resultadoSalario");
    
    var ventasBrutas = parseFloat(input.value);
    
    if (isNaN(ventasBrutas) || ventasBrutas < 0) {
        resultado.innerHTML = "Por favor ingrese un valor válido";
        return;
    }

    var salario = 200 + (ventasBrutas * 0.09);
    var salarioEntero = Math.floor(salario);
    
    clasificarSalario(salarioEntero);
    
    resultado.innerHTML = "Ventas: $" + ventasBrutas.toFixed(2) + " → Salario: $" + salario.toFixed(2) +  " (" +salarioEntero + ")";
   
    mostrarDistribucion();
    input.value = "";
}

function clasificarSalario(salario) {
    if (salario >= 200 && salario <= 299) {
        rangos[0]++;
    } else if (salario >= 300 && salario <= 399) {
        rangos[1]++;
    } else if (salario >= 400 && salario <= 499) {
        rangos[2]++;
    } else if (salario >= 500 && salario <= 599) {
        rangos[3]++;
    } else if (salario >= 600 && salario <= 699) {
        rangos[4]++;
    } else if (salario >= 700 && salario <= 799) {
        rangos[5]++;
    } else if (salario >= 800 && salario <= 899) {
        rangos[6]++;
    } else if (salario >= 900 && salario <= 999) {
        rangos[7]++;
    } else if (salario >= 1000) {
        rangos[8]++;
    }
}

function mostrarDistribucion() {
    var contenedor = document.getElementById("tablaDistribucion");
    
    var html = "<table>";
    html += "<tr><th>Rango de Salario</th><th>Cantidad de Vendedores</th></tr>";
    html += "<tr><td>$200 - $299</td><td>" + rangos[0] + "</td></tr>";
    html += "<tr><td>$300 - $399</td><td>" + rangos[1] + "</td></tr>";
    html += "<tr><td>$400 - $499</td><td>" + rangos[2] + "</td></tr>";
    html += "<tr><td>$500 - $599</td><td>" + rangos[3] + "</td></tr>";
    html += "<tr><td>$600 - $699</td><td>" + rangos[4] + "</td></tr>";
    html += "<tr><td>$700 - $799</td><td>" + rangos[5] + "</td></tr>";
    html += "<tr><td>$800 - $899</td><td>" + rangos[6] + "</td></tr>";
    html += "<tr><td>$900 - $999</td><td>" + rangos[7] + "</td></tr>";
    html += "<tr><td>$1000 y más</td><td>" + rangos[8] + "</td></tr>";
    html += "</table>";
    
    contenedor.innerHTML = html;
}

function reiniciar() {
    for (var i = 0; i < rangos.length; i++) {
        rangos[i] = 0;
    }
    
    document.getElementById("ventasBrutas").value = "";
    document.getElementById("resultadoSalario").innerHTML = "";
    mostrarDistribucion();
}
