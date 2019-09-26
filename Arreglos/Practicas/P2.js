let btnCalcular = document.getElementById('btnCalcular');
let btnCalcularCaracteres = document.getElementById('btnCalcularCaracteres');
let contador = 0;

evento();

function evento() {
    btnCalcular.addEventListener('click', addElements);
    btnCalcularCaracteres.addEventListener('click', CalcularCadena);
}

function addElements() {

    let TamArray = Number(document.getElementById('TamArray').value);


    for (let i = 0; i < TamArray; i++) {
        // ************ Lista 1 ************************
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item mb-2');

        let input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `listArrayR${i}`);
        input.setAttribute('placeholder', `Nombre ${i +1}`);

        // lista 1 
        document.getElementById('ArrayList1').appendChild(li);
        li.appendChild(input);
        contador++;

    }

}

function CalcularCadena() {

    let array1 = [];
    let array2 = [];

    for (let i = 0; i < contador; i++) {

        array1[i] = document.getElementById(`listArrayR${i}`).value;


        console.log("El carácter en el índice 0 es '" + array1[i].charAt(0) + "'");

        if (array1[i].charAt(0) == 'a' || array1[i].charAt(0) == 'A') {
            array2[i] = array1[i];
        } else if (array1[i].charAt(0) == 'e' || array1[i].charAt(0) == 'E') {
            array2[i] = array1[i];
        } else if (array1[i].charAt(0) == 'i' || array1[i].charAt(0) == 'I') {
            array2[i] = array1[i];
        } else if (array1[i].charAt(0) == 'o' || array1[i].charAt(0) == 'O') {
            array2[i] = array1[i];
        } else if (array1[i].charAt(0) == 'u' || array1[i].charAt(0) == 'U') {
            array2[i] = array1[i];
        } else {
            array2[i] = " - ";
        }

    }

    MostrarElementos(array2);

}

function MostrarElementos(array2) {

    let ConcatenarResultado = "";

    for (let y = 0; y < contador; y++) {
        ConcatenarResultado += `<li class="list-group-item mb-2"> ${array2[y]}</li>`;
    }
    document.getElementById('ArrayList2').innerHTML = ConcatenarResultado;

}