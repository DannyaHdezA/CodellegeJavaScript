let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerdistancia);
}

function obtenerdistancia() {
    let AX = Number(document.getElementById('PuntoAX').value);
    let AY = Number(document.getElementById('PuntoAY').value);
    let BX = Number(document.getElementById('PuntoBX').value);
    let BY = Number(document.getElementById('PuntoBY').value);


    let D = 0;

    D = Math.sqrt(Math.pow((BX - AX), 2) + Math.pow((BY - AY), 2));

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = D;
}