let generaValores = document.getElementById('generaValores');
let validar = document.getElementById('validar');


let array1 = [];
let array2 = [];

let capacidad = 0;



evento();

function evento() {
    generaValores.addEventListener('click', aleatorio);
    validar.addEventListener('click', impares);

}


function aleatorio() {
    let NumberRandom = 0;
    let longitud = Number(document.getElementById('longitud').value);
    capacidad = longitud;
    for (let i = 0; i < longitud; i++) {
        NumberRandom = Math.floor(Math.random() * 300) + 100;
        array1[i] = NumberRandom;
    }
    MostrarElementos(array1, 1);
}

function impares() {
    for (let i = 0; i < capacidad; i++) {

        if (array1[i] % 2 == 0) {
            array2[i] = "-";
        } else {
            array2[i] = array1[i];
        }
    }
    MostrarElementos(array2, 2);
}


function MostrarElementos(Array, a) {
    let informacionImprimir = "";
    for (let i = 0; i < Array.length; i++) {
        informacionImprimir += `<li class="list-group-item">${Array[i]}</li>`;

    }
    document.getElementById(`ArrayList${a}`).innerHTML = informacionImprimir;
}