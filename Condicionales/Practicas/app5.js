let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', descuento);
}

function descuento() {

    let TC = Number(document.getElementById('totalcompra').value);

    let imprimirResultado = document.getElementById('resultado');

    if (TC > 1000) {

        let PF = 0;
        PF = TC * 0.8;

        imprimirResultado.innerHTML = PF + '. SE LE APLICO EL 20% DE DESCUENTO';
    } else {

        imprimirResultado.innerHTML = TC + '. NECESITA UNA COMPRA MAYOR A $1000 PARA OBTENER DESCUENTO';
    }

}