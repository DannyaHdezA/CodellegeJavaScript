let boton = document.getElementById('boton');

// let proyectil = new Proyectil(40, 80);

EventListener();

function EventListener() {
    boton.addEventListener('click', calcular);
}

async function calcular() {

    let velocidad = Number(document.getElementById('velocidad').value);
    let grados = Number(document.getElementById('grados').value);

    let proyectil = new Proyectil(velocidad, grados);

    for (let tiempo = 0; tiempo <= 10; tiempo += 0.01) {

        let posicionX = proyectil.CalcularVelocidadX(tiempo);
        let posicionY = proyectil.CalcularVelocidadY(tiempo);

        if (posicionX >= 0 && posicionY >= 0 && posicionX <= 100 && posicionY <= 100) {

            await stop(proyectil, posicionX, posicionY)
        }

    }
}

function stop(proyectil, posicionX, posicionY) {
    return new Promise((res, rej) => {
        setTimeout(() =>
            res(proyectil.CrearSpan(posicionX, posicionY), 200))
    })
}