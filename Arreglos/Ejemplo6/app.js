let btnAddElements = document.getElementById('btnAddElements');
let btnCalcular = document.getElementById('btnCalcular');

let ContadorClicksAddElement = 0;


evento();

function evento() {

    btnAddElements.addEventListener('click', addElements);
    btnCalcular.addEventListener('click', CalcularArray);
}

function addElements() {

    // ************ Lista 1 ************************
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `listArrayR${ContadorClicksAddElement}`);
    input.setAttribute('placeholder', `Numero ${ContadorClicksAddElement+1}`);

    // ************ Lista 2 ************************
    let li2 = document.createElement('li');
    li2.setAttribute('class', 'list-group-item mb-2');

    let input2 = document.createElement('input');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', `listArrayL${ContadorClicksAddElement}`);
    input2.setAttribute('placeholder', `Numero ${ContadorClicksAddElement+1}`);

    // lista 1 
    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);

    // lista2
    document.getElementById('ArrayList2').appendChild(li2);
    li2.appendChild(input2);



    ContadorClicksAddElement++;
}

function CalcularArray() {

    let array1 = [];
    let array2 = [];
    let array3 = [];

    for (let i = 0; i <= ContadorClicksAddElement; i++) {

        array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
        array2[i] = Number(document.getElementById(`listArrayL${i}`).value);

        if (isNaN(array1[i]) || isNaN(array2[i])) {
            Swal.fire({
                type: 'error',
                title: 'Caracter Invalido... ',
                text: 'Se ha ingresado un digito incorrecto!',
            })

            array1 = [];
            array2 = [];

            document.getElementById(`listArrayR${i}`).focus;

        }
    }

    for (let x = 0; x < array1.length; x++) {

        array3[x] = array1[x] + array2[x];
    }

    let ConcatenarResultado = "";

    for (let y = 0; y < array1.length; y++) {
        ConcatenarResultado += `<li class="list-group-item"> ${array3[y]}</li>`;
    }
    document.getElementById('ArrayList3').innerHTML = ConcatenarResultado;
}