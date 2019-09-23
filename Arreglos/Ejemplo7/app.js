let btnMultiplos = document.getElementById('btnMultiplos');

ArrayM = [];

evento();

function evento() {

    btnMultiplos.addEventListener('click', fillArray);
}

function fillArray() {

    let TamArray = Number(document.getElementById('TamArray').value);

    let numeroM = Number(document.getElementById('Numero').value);


    for (let x = 0; x < TamArray; x++) {

        ArrayM[x] = numeroM * (x + 1);
    }

    MostrarElementos();
}

function MostrarElementos() {

    let DatosImprimir = '';

    for (let x = 0; x < ArrayM.length; x++) {

        DatosImprimir += `<li class="list-group-item">Elemento  [${x+1}] -----> ${ArrayM[x]}</li>`;

        document.getElementById('listaImprimir').innerHTML = DatosImprimir;

    }
}