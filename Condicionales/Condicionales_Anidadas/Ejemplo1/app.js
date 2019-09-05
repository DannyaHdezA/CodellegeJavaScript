let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {
    btnComparar.addEventListener('click', MayorNumero);
}

function MayorNumero() {
    let N1 = Number(document.getElementById('numero1').value);
    let N2 = Number(document.getElementById('numero2').value);
    let N3 = Number(document.getElementById('numero3').value);

    let imprimirResultado = document.getElementById('resultado');

    if ((N1 > N2) && (N1 > N3)) {
        imprimirResultado.innerHTML = ` 
        <p> El número mayor es ${N1} . </p>`;
    }
    if ((N2 > N1) && (N2 > N3)) {
        imprimirResultado.innerHTML = ` 
        <p> El número mayor es ${N2} . </p>`;
    }
    if ((N3 > N2) && (N3 > N1)) {
        imprimirResultado.innerHTML = ` 
        <p> El número mayor es ${N3} . </p>`;
    }
    if ((N1 == N2) && (N2 == N3)) {
        imprimirResultado.innerHTML = ` 
        <p> Los numeros son iguales. </p>`;
    }
}