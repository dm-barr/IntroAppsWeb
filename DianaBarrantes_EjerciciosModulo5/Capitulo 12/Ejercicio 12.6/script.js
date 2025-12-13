function aplicarEstilos() {
    var colorFondo = document.getElementById("colorFondo").value;
    var tipoFuente = document.getElementById("tipoFuente").value;
    var body = document.body;
    
    body.style.backgroundColor = colorFondo;
    body.style.fontFamily = tipoFuente;
}
