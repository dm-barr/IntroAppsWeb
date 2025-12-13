function analizarTexto() {
    var texto = document.getElementById("textoInput").value;
    var resultado = document.getElementById("resultadoOutput");
    if (texto === "") {
        resultado.value = "ingrese un texto para analizar";
        return;
    }
    var textoMinusculas = texto.toLowerCase();
    var alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var ocurrencias = new Array(26);

    for (var i = 0; i < ocurrencias.length; i++) {
        ocurrencias[i] = 0;
    }
    for (var i = 0; i < alfabeto.length; i++) {
        var letra = alfabeto[i];
        var posicion = 0;
        
        while (posicion !== -1) {
            posicion = textoMinusculas.indexOf(letra, posicion);
            if (posicion !== -1) {
                ocurrencias[i]++;
                posicion++;
            }
        }
    }
   
    var salida = "Letra\t\tOcurrencias\n";
    salida += "-------\t\t-----------\n";
    
    for (var i = 0; i < alfabeto.length; i++) {
        salida += alfabeto[i].toUpperCase() + "\t\t" + ocurrencias[i] + "\n";
    }
    
    salida += "\n";
    salida += "Total de caracteres analizados: " + texto.length + "\n";

    var totalLetras = 0;
    for (var i = 0; i < ocurrencias.length; i++) {
        totalLetras += ocurrencias[i];
    }
    salida += "Total de letras del alfabeto: " + totalLetras + "\n";
    resultado.value = salida;
}

window.addEventListener("load", function() {
    document.getElementById("textoInput").addEventListener("keydown", function(e) {
        if (e.ctrlKey && e.key === "Enter") {
            analizarTexto();
        }
    });
});
