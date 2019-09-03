let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerhipotenusa);
}

function obtenerhipotenusa() {
    let A = Number(document.getElementById('ladoA').value);
    let B = Number(document.getElementById('ladoB').value);

    let C = 0;

    C = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = C;
}