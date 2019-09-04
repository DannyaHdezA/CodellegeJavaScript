let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', triangulos);
}

function triangulos() {

    let A = Number(document.getElementById('ladoA').value);
    let B = Number(document.getElementById('ladoB').value);
    let C = Number(document.getElementById('ladoC').value);


    let imprimirResultado = document.getElementById('resultado');

    if (A == B && B == C) {

        imprimirResultado.innerHTML = 'EL TRIANGULO ES EQUILATERO';
    } else {

        imprimirResultado.innerHTML = 'EL TRIANGULO ES ESCALENO';
    }
    if ((A == B && B != C) || (A == C && C != B) || (B == C && C != A)) {
        imprimirResultado.innerHTML = 'EL TRIANGULO ES ISÓSCELES';
    }
}