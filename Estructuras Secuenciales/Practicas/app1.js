let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerdistancia);
}

function obtenerdistancia() {
    let V = Number(document.getElementById('velocidad').value);
    let T = Number(document.getElementById('tiempo').value);

    let D = 0;

    D = V * T;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = D;
}