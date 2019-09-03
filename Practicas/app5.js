let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerpago);
}

function obtenerpago() {
    let T = Number(document.getElementById('totalm2').value);
    let C = Number(document.getElementById('costom2').value);

    let Pago = 0;

    Pago = T * C;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = Pago;
}