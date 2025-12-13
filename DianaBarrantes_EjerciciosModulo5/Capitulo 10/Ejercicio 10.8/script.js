var f = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var g = new Array(5);
var c = new Array(100);
var a = [5, 12, 8, 34, 2, 19, 27, 41, 15, 33, 7];
var b = new Array(34);
var w = new Array(99);


function inicializarArreglos() {
    
    for (var i = 0; i < c.length; i++) {
        c[i] = i + 1;
    }
 
    for (var i = 0; i < w.length; i++) {
        w[i] = Math.random() * 100;
    }
}


inicializarArreglos();
function mostrarSeptimoElemento() {
    var resultado = document.getElementById("resultadoA");
    var septimoElemento = f[6]; 
    resultado.innerHTML = "El séptimo elemento del arreglo f es: " + septimoElemento;
}

function inicializarArregloG() {
    var resultado = document.getElementById("resultadoB");
    
    for (var i = 0; i < g.length; i++) {
        g[i] = 8;
    }
    
    resultado.innerHTML = "Arreglo g inicializado: [" + g.join(", ") + "]";
}

function calcularTotalArregloC() {
    var resultado = document.getElementById("resultadoC");
    var total = 0;
    
    for (var i = 0; i < c.length; i++) {
        total += c[i];
    }
    
    resultado.innerHTML = "Total de elementos del arreglo c: " + total;
}

function copiarArregloA() {
    var resultado = document.getElementById("resultadoD");
    
    for (var i = 0; i < a.length; i++) {
        b[i] = a[i];
    }
    
    var primerosElementos = [];
    for (var i = 0; i < a.length; i++) {
        primerosElementos.push(b[i]);
    }
    
    resultado.innerHTML = "Primeros 11 elementos de b copiados desde a: [" + primerosElementos.join(", ") + "]";
}

function determinarMinMax() {
    var resultado = document.getElementById("resultadoE");
    
    var menor = w[0];
    var mayor = w[0];
    
    for (var i = 1; i < w.length; i++) {
        if (w[i] < menor) {
            menor = w[i];
        }
        if (w[i] > mayor) {
            mayor = w[i];
        }
    }
    resultado.innerHTML = "Valor más pequeño: " + menor.toFixed(2) + "Valor más grande: " + mayor.toFixed(2);
}
