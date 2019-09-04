let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', descuento);
}

function descuento() {

    let P = Number(document.getElementById('precio').value);
    let C = Number(document.getElementById('clave').value);


    let imprimirResultado = document.getElementById('resultado');

    if (C == 01) {

        let PF = 0;
        PF = P * 0.9;

        imprimirResultado.innerHTML = PF + '. SE LE APLICO EL 10% DE DESCUENTO';
    }
    if (C == 02) {

        let PF = 0;
        PF = P * 0.8;

        imprimirResultado.innerHTML = PF + '. SE LE APLICO EL 20% DE DESCUENTO';
    }

}