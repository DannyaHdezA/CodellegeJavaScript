let btnAgregarElementos = document.getElementById('btnAgregarElementos');

let elementos = [];
let contador = 0;

evento();

function evento() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
}

function AgregarElementos() {

    let valor = Number(document.getElementById('AgregarElemento').value);

    let i = 0;

    for (i = 0; i < elementos.length; i++) {

        if (valor == elementos[i]) return
    }

    elementos[i] = valor;

    let DatosImprimir = '';

    for (let x = 0; x < elementos.length; x++) {

        DatosImprimir += `<li class="list-group-item">  ${elementos[x]}</li>`;

        document.getElementById('listaImprimir').innerHTML = DatosImprimir;


    }
}