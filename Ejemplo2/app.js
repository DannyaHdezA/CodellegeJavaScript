let BotonCalcular = document.getElementById('BotonCalcular');

BotonCalcular.addEventListener('click', costo);

function costo() {
    let metros = document.getElementById('metros').value;
    let costo = document.getElementById('costo').value;

    metros = Number(metros);
    costo = Number(costo);

    let Resultado = 0;

    Resultado = metros * costo;

    let imprimirResultado = document.getElementById('Resultado');

    imprimirResultado.innerHTML = Resultado;

}