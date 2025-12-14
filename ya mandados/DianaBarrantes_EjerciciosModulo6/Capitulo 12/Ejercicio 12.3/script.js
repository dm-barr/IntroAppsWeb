window.onload = function () {
    var enlaces = document.links;

    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].className = "enlace-resaltado";
    }
};
