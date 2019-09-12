let btnAgregarAhorro = document.getElementById('btnAgregarAhorro');

let contador = 0;

Eventlistener();

function Eventlistener() {
    btnAgregarAhorro.addEventListener('click', AgregarAhorro);
}

function AgregarAhorro() {

    if (contador <= 12) {

        contador++;

        let ahorro = Number(document.getElementById('ahorroMensual').value);

        let spanAhorro = document.createElement('span');
        let textoSpan = document.createTextNode(`${ahorro}`);
        spanAhorro.setAttribute('id', `AhorroMensual${contador}`);
        spanAhorro.appendChild(textoSpan);

        let imprimirSpan = document.getElementById(`mes${contador}`);

        imprimirSpan.appendChild(spanAhorro);

        calcularAhorro();
    }
}


function calcularAhorro() {

    let imprimirAhorroTotal = document.getElementById('total');
    let suma = 0;

    for (let i = 1; i <= contador; i++) {
        let valorObtenido = document.getElementById(`AhorroMensual${contador}`).textContent;
        suma = suma + Number(valorObtenido);
    }

    let spanTotal = document.createElement('span');
    let TextoTotal = document.createTextNode(suma);

    spanTotal.appendChild(TextoTotal);

    imprimirAhorroTotal.appendChild(spanTotal);

}