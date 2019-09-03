let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', cheque);
}

function cheque() {
    let H = Number(document.getElementById('hotel').value);
    let C = Number(document.getElementById('comida').value);
    let D = Number(document.getElementById('dias').value);

    let otros = 100;
    let cheque = 0;

    cheque = (H * D) + ((C * 3) * D) + (otros * D);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = cheque;
}