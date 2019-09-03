let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerpulgadas);
}

function obtenerpulgadas() {
    let Tm = Number(document.getElementById('totalm').value);


    let Pulgadas = 0;

    Pulgadas = Tm * 39.3701;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = Pulgadas;
}