let btnAgregarElementos = document.getElementById('btnAgregarElementos');
let btnMostrarElementos = document.getElementById('btnMostrarElementos');
let elementos = [];
let contador = 0;
evento();

function evento() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', CalcularMedia);
}

function AgregarElementos() {

    if (contador < 10) {
        let valorInput = document.getElementById('AgregarElemento');

        elementos[contador] = Number(valorInput.value);

        valorInput.value = "";
        contador++;
    }

}

function MostrarElementos() {
    let informacionImprimir = "";
    for (let i = 0; i < elementos.length; i++) {
        informacionImprimir += `<li class="list-group-item">${elementos[i]}</li>`

    }
    contador = 0;
    document.getElementById('listaImprimir').innerHTML = informacionImprimir;
}

function CalcularMedia() {

    let promedio = 0;

    for (let i = 0; i < elementos.length; i++) {
        promedio += elementos[i];
    }
    promedio /= elementos.length;

    contador = 0;
    elementos = [];

    let imprimir = `<li class="list-group-item"> El promedio de los numeros otorgados es: ${promedio}</li>`;

    document.getElementById('listaImprimir').innerHTML = imprimir;
}