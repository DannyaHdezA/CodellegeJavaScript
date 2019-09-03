let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerdistancia);
}

function obtenerdistancia() {
    let C = Number(document.getElementById('correctas').value);
    let I = Number(document.getElementById('incorrectas').value);
    let B = Number(document.getElementById('blanco').value);


    let PC = 0;
    let PI = 0;
    let PB = 0;

    let PF = 0;

    PC = C * 4;
    PI = I * -1;
    PB = B * 0;

    PF = PC + PI + PB;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = PF;
}