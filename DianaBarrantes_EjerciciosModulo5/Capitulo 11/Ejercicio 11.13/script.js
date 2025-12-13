function buscarCaracter() {
    var texto = document.getElementById("textoInput").value;
    var caracter = document.getElementById("caracterInput").value;
    var resultado = document.getElementById("resultado");
    
    // Validaciones
    if (texto === "") {
        resultado.innerHTML = "Por favor ingrese un texto";
        return;
    }
    
    if (caracter === "") {
        resultado.innerHTML = "Por favor ingrese un carácter a buscar";
        return;
    }
    
    if (caracter.length > 1) {
        resultado.innerHTML = "Por favor ingrese solo un carácter";
        return;
    }
    
    // Contar ocurrencias usando indexOf
    var ocurrencias = 0;
    var posicion = 0;
    
    while (posicion !== -1) {
        posicion = texto.indexOf(caracter, posicion);
        if (posicion !== -1) {
            ocurrencias++;
            posicion++;
        }
    }
    
    // Mostrar resultado
    if (ocurrencias === 0) {
        resultado.innerHTML = "El carácter '" + caracter + "' no se encontró en el texto";
    } else if (ocurrencias === 1) {
        resultado.innerHTML = "El carácter '" + caracter + "' aparece 1 vez en el texto";
    } else {
        resultado.innerHTML = "El carácter '" + caracter + "' aparece " + ocurrencias + " veces en el texto";
    }
}

// Permitir Enter para buscar
window.addEventListener("load", function() {
    document.getElementById("caracterInput").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            buscarCaracter();
        }
    });
});
