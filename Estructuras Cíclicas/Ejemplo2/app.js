let btnAgregar = document.getElementById('btnAgregar');
let btnCalcular = document.getElementById('btnCalcular');
let numeroInput = 0;

EventListener();

function EventListener() {
    btnAgregar.addEventListener('click', AgregarFG);
    btnCalcular.addEventListener('click', CalcularPromedio);
}

function CalcularPromedio() {

    let imprimirResultado = document.getElementById('imprimir');
    let suma = 0;
    let promedio = 0;

    for (let i = 1; i <= numeroInput; i++) {
        let edad = Number(document.getElementById(`EdadAlumno${i}`).value);
        suma = suma + edad;
    }
    promedio = suma / numeroInput;

    imprimirResultado.innerHTML = promedio;
}



function AgregarFG() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute("class", "row");

    let DivCol = document.createElement('div');
    DivCol.setAttribute("class", "col-12");

    let FormG = document.createElement('div');
    FormG.setAttribute("class", "form-group");

    let Label = document.createElement('lable');
    let textLable = document.createTextNode(`Ingresa la edad del alumno ${numeroInput} :`);
    Label.appendChild(textLable);

    let input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', '');

    input.setAttribute('id', `EdadAlumno${numeroInput}`);

    let CajaAlumnos = document.getElementById('CajaAlumnos');
    CajaAlumnos.appendChild(DivRow);


    DivRow.appendChild(DivCol);
    DivCol.appendChild(FormG);
    FormG.appendChild(Label);
    FormG.appendChild(input);

}