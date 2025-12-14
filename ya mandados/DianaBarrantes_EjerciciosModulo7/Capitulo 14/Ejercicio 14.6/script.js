var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

function rectRedondeado(x, y, ancho, alto, radio, colorRelleno, colorBorde, grosorBorde) {

    contexto.beginPath();
    contexto.moveTo(x + radio, y);

    contexto.lineTo(x + ancho - radio, y);
    contexto.quadraticCurveTo(x + ancho, y, x + ancho, y + radio);

    contexto.lineTo(x + ancho, y + alto - radio);
    contexto.quadraticCurveTo(x + ancho, y + alto, x + ancho - radio, y + alto);

    contexto.lineTo(x + radio, y + alto);
    contexto.quadraticCurveTo(x, y + alto, x, y + alto - radio);

    contexto.lineTo(x, y + radio);
    contexto.quadraticCurveTo(x, y, x + radio, y);

    contexto.closePath();

    contexto.fillStyle = colorRelleno;
    contexto.fill();

    contexto.strokeStyle = colorBorde;
    contexto.lineWidth = grosorBorde;
    contexto.stroke();
}

rectRedondeado(20, 20, 100, 80, 15, "yellow", "royalblue", 4);
rectRedondeado(150, 40, 120, 100, 25, "#e0e0e0", "darkred", 6);
