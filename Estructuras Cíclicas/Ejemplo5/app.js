let btnAgregarArticulo = document.getElementById('btnAgregarArticulo');
let btnCalcularTotal = document.getElementById('btnCalcularTotal');

let contador = 0;
let contadorprecio = 0;

Eventlistener();

function Eventlistener() {
    btnAgregarArticulo.addEventListener('click', agregarInputArticulo);
    btnCalcularTotal.addEventListener('click', CalcularTotal);
}

function agregarInputArticulo() {

    contador++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');
    DivRow.setAttribute('id', `fila${contador}`);

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group mb-3');

    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('placeholder', 'Ingrese el nombre del artículo.');

    let inputGroupAppend = document.createElement('div');
    inputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPrecio${contador}`);
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');

    buttonAgregarPrecio.appendChild(document.createTextNode('+'));

    let ListaArticulos = document.getElementById('ListaArticulos');

    ListaArticulos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(inputGroup);
    inputGroup.appendChild(inputArticulo);
    inputGroup.appendChild(inputGroupAppend);
    inputGroupAppend.appendChild(buttonAgregarPrecio);

    EventlistenerAgregarPrecio();
}

function EventlistenerAgregarPrecio() {

    let buttonAgregarPrecio = document.getElementById(`btnAgregarPrecio${contador}`);
    buttonAgregarPrecio.addEventListener('click', CrearInputPrecio);

}

function CrearInputPrecio(event) {

    contadorprecio++;

    event.target.setAttribute('disabled', true);

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'form-group mb-3');

    let inputPrecioArticulo = document.createElement('input');
    inputPrecioArticulo.setAttribute('type', 'number');
    inputPrecioArticulo.setAttribute('class', 'form-control');
    inputPrecioArticulo.setAttribute('placeholder', 'Ingrese el precio del artículo.');
    inputPrecioArticulo.setAttribute('id', `ValorArticulo${contadorprecio}`);


    let ListaArticulos = event.target.parentElement.parentElement.parentElement.parentElement;

    ListaArticulos.appendChild(DivCol);
    DivCol.appendChild(inputGroup);
    inputGroup.appendChild(inputPrecioArticulo);

}

function CalcularTotal() {

    let suma = 0;

    let resultado = document.getElementById('imprimir');

    for (let i = 1; i <= contadorprecio; i++) {

        let valorInput = Number(document.getElementById(`ValorArticulo${i}`).value);

        if (valorInput >= 200) {

            suma += valorInput * 0.85;

        } else if ((valorInput < 200) && (valorInput >= 100)) {

            suma += valorInput * 0.88;

        } else {

            suma += valorInput * 0.90;
        }
    }

    resultado.innerHTML = suma;

}