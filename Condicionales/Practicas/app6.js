let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', mayoredad);
}

function mayoredad() {

    let NOM1 = document.getElementById('nombre1').value;
    let NOM2 = document.getElementById('nombre1').value;
    let EDAD1 = Number(document.getElementById('edad1').value);
    let EDAD2 = Number(document.getElementById('edad2').value);

    let imprimirResultado = document.getElementById('resultado');

    if (EDAD1 > EDAD2) {
        imprimirResultado.innerHTML = NOM1;
    } else {
        imprimirResultado.innerHTML = NOM2;
    }

}