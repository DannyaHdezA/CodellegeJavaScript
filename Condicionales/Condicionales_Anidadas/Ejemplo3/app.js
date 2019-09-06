let btnPomedio = document.getElementById('btnPomedio');

EventListener();

function EventListener() {
    btnPomedio.addEventListener('click', obtenerPromedio);
}

function obtenerPromedio() {
    let C1 = Number(document.getElementById('cal1').value);
    let C2 = Number(document.getElementById('cal2').value);
    let C3 = Number(document.getElementById('cal3').value);

    let promedio = document.getElementById('resultado');

    let Prom = 0;
    Prom = ((C1 + C2 + C3) / 3);

    if (Prom >= 9) {
        promedio.innerHTML = `APROBADO. EL promedio es` + Prom;
        // promedio.style.color = "Orange";
        // promedio.style.background = "Black";
    }
    if ((Prom > 6) && (Prom < 9)) {
        promedio.innerHTML = `REGULAR. EL promedio es` + Prom;
    }
    if (Prom < 6) {
        promedio.innerHTML = `REPROBADO. EL promedio es` + Prom;
    }
}