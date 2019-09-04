let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calificacion)
}

function calificacion() {

    let CAL = Number(document.getElementById('cal').value);

    let imprimirResultado = document.getElementById('resultado');

    if (CAL <= 8) {
        imprimirResultado.innerHTML = 'REPROBADO';
        // let audio = document.getElementById('audio');
        // audio.play();
    } else {
        imprimirResultado.innerHTML = 'APROBADO';
    }
    if (CAL > 10 || CAL < 0) {
        imprimirResultado.innerHTML = 'CALIFICACIÓN INVÁLIDA';
    }
}