let btnPresupuesto = document.getElementById('btnPresupuesto');

EventListener();

function EventListener() {
    btnPresupuesto.addEventListener('click', presupuesto)
}

function presupuesto() {
    let P = Number(document.getElementById('personas').value);

    let imprimir = document.getElementById('resultado');

    if (P <= 200) {
        let total = 0;
        total = P * 95;

        imprimir.innerHTML = `<p>El presupuesto del Banquete es: $ ${total} </p>`;
    }
    if ((P > 200) && (P <= 300)) {
        let total = 0;
        total = P * 85;

        imprimir.innerHTML = `<p>El presupuesto del Banquete es: $ ${total} </p>`;
    }
    if (P > 300) {
        let total = 0;
        total = P * 75;

        imprimir.innerHTML = `<p>El presupuesto del Banquete es: $ ${total} </p>`;
    }
}