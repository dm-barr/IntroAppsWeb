function iniciar() {
    var radio = document.getElementById("radioInput");
    var resultado = document.getElementById("resultado");
    var valorRadio = parseFloat(radio.value);

    if (isNaN(valorRadio) || valorRadio < 0) {
        resultado.innerHTML = "Por favor, ingrese un radio válido (número positivo)";
        resultado.style.backgroundColor = "#ffebee";
        resultado.style.borderLeftColor = "#f44336";
        return;
    }

    var area = areaCirculo(valorRadio);
    resultado.innerHTML = "El área del círculo es: " + area;
    resultado.style.backgroundColor = "#e8f5e9";
    resultado.style.borderLeftColor = "#4CAF50";
}

function areaCirculo(radio) {

    return (Math.PI * Math.pow(radio, 2)).toFixed(2);
}

window.addEventListener("load", function() {
    document.getElementById("radioInput").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            iniciar();
        }
    });
});
