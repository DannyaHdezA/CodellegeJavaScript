let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerarea);
}

function obtenerarea() {
    let A = Number(document.getElementById('ladoA').value);
    let B = Number(document.getElementById('ladoB').value);
    let C = Number(document.getElementById('ladoC').value);

    let S = 0;

    S = (A + B + C) / 2;

    let Area = 0;

    Area = Math.sqrt(S * (S - A) * (S - B) * (S - C));

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = Area;
}