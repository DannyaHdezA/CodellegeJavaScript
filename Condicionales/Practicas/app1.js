let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', edades);
}

function edades() {

    let H1 = Number(document.getElementById('hermano1').value);
    let H2 = Number(document.getElementById('hermano2').value);

    let imprimirResultado = document.getElementById('resultado');

    if (H1 > H2) {
        let dif = 0;
        dif = H1 - H2;
        imprimirResultado.innerHTML = H1 + ' LA DIFERENCIA DE EDAD ES: ' + dif;

    } else {
        let dif = 0;
        dif = H2 - H1;
        imprimirResultado.innerHTML = H2 + ' LA DIFERENCIA DE EDAD ES: ' + dif;
    }
    if (H1 == H2) {
        imprimirResultado.innerText = 'LAS EDADES DE LOS HERMANOS SON IGUALES';
    }
}