let btnCalcular = document.getElementById('btnCalcular');
let btnCalcular2 = document.getElementById('btnCalcular2');

EventListener();
EventListener2();


function EventListener() {
    btnCalcular.addEventListener('click', obtenerArea);

}

function EventListener2() {
    btnCalcular2.addEventListener('click', obtenerAreaSimplificada);
}

function obtenerAreaSimplificada() {
    console.time('obtenerAreaSimplificada');

    let radio = Number(document.getElementById('radio').value);

    let valor = 0;

    valor = Math.PI * Math.pow(radio, 2);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = valor;
    console.timeEnd('obtenerAreaSimplificada');

}

function obtenerArea() {
    console.time('obtenerArea');
    const constpi = 3.1416;

    let radio = document.getElementById('radio').value;

    radio = Number(radio);

    let valor = 0;

    valor = (constpi * (radio * radio));

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = valor;

    console.timeEnd('obtenerArea');

}