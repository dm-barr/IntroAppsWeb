
function celsius(fahrenheit) {
    return 5.0 / 9.0 * (fahrenheit - 32);
}

function fahrenheit(celsius) {
    return 9.0 / 5.0 * celsius + 32;
}

function convertirFahrenheitACelsius() {
    var inputFahrenheit = document.getElementById("fahrenheitInput");
    var resultado = document.getElementById("resultadoFtoC");
    
    var valorFahrenheit = parseFloat(inputFahrenheit.value);
    
    if (isNaN(valorFahrenheit)) {
        resultado.innerHTML = "Por favor ingrese un valor válido";
        return;
    }
    
    var valorCelsius = celsius(valorFahrenheit);
    resultado.innerHTML = valorFahrenheit + "°F = " + valorCelsius.toFixed(2) + "°C";
}

function convertirCelsiusAFahrenheit() {
    var inputCelsius = document.getElementById("celsiusInput");
    var resultado = document.getElementById("resultadoCtoF");
    
    var valorCelsius = parseFloat(inputCelsius.value);
    
    if (isNaN(valorCelsius)) {
        resultado.innerHTML = "Por favor ingrese un valor válido";
        return;
    }
    
    var valorFahrenheit = fahrenheit(valorCelsius);
    resultado.innerHTML = valorCelsius + "°C = " + valorFahrenheit.toFixed(2) + "°F";
}
