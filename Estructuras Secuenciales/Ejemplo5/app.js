let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerArea);
}

function obtenerArea() {
    let A = Number(document.getElementById('valorA').value);
    let B = Number(document.getElementById('valorB').value);
    let C = Number(document.getElementById('valorC').value);

    let arearectangulo = 0;
    let areatriangulo = 0;
    let areatotal = 0;

    arearectangulo = B * C;
    areatriangulo = (B * (A - C)) / 2;

    areatotal = arearectangulo + areatriangulo;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = areatotal;


}