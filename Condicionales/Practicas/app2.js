let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', incentivo);
}

function incentivo() {

    let U = Number(document.getElementById('unidades').value);


    let imprimirResultado = document.getElementById('resultado');

    let total = 0;
    total = U * 6;

    if (total > 100) {

        imprimirResultado.innerHTML = 'APROBADO' + '.    Se realizaron: ' + total + ' unidades';
    } else {

        imprimirResultado.innerHTML = 'NO APROBADO' + '.    Se realizaron: ' + total + ' unidades';
    }
}