let btnAgregar = document.getElementById('btnAgregar');
let btnCalcular = document.getElementById('btnCalcular');
let numeroInput = 0;

EventListener();

function EventListener() {
    btnAgregar.addEventListener('click', AgregarPersonas);
    btnCalcular.addEventListener('click', CalcularPromedio);
}

function CalcularPromedio() {
    let imprimirResultado = document.getElementById('imprimir');
    let suma = 0;
    let promedio = 0;

    for (let i = 1; i <= numeroInput; i++) {

        let altura = Number(document.getElementById(`AlturaPersona${i}`).value);

        suma = suma + altura;
    }
    promedio = suma / numeroInput;

    imprimirResultado.innerHTML = promedio + ' cm';
}

function AgregarPersonas() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let FormGr = document.createElement('div');
    FormGr.setAttribute('class', 'form-group');

    let Label = document.createElement('label');
    let textLable = document.createTextNode(`${numeroInput}.- Ingrese la estatura: `);
    Label.appendChild(textLable);

    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', 'Ingrese la altura en cm.');

    input.setAttribute('id', `AlturaPersona${numeroInput}`);

    let CajaEstatura = document.getElementById('CajaEstatura');
    CajaEstatura.appendChild(DivRow);


    DivRow.appendChild(DivCol);
    DivCol.appendChild(FormGr);
    FormGr.appendChild(Label);
    FormGr.appendChild(input);


}