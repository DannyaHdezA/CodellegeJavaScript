let btnNumAleatorios = document.getElementById('btnNumAleatorios');

let ElementosPrimos = [];

evento();

function evento() {

    btnNumAleatorios.addEventListener('click', fillArray);
}

/* +++++++++++++++++++++++++++++
   Inicia parte de aplicacion - Fuerza bruta
++++++++++++++++++++++++++++++ */

function fillArray() {

    let TamArray = Number(document.getElementById('TamArray').value);



    console.time('InicioForFuerzaBruta');

    for (let x = 0; x < TamArray; x++) {

        let NumeroPrimoRandom = IsPrime();

        if (NumeroPrimoRandom === null) {
            x--;
        } else {
            ElementosPrimos[x] = NumeroPrimoRandom;
        }
    }

    console.timeEnd('InicioForFuerzaBruta');

    console.log(ElementosPrimos);

    MostrarElementos();

    let maximo = 0;

    for (let x = 0; x <= ElementosPrimos.length; x++) {

        if (maximo < ElementosPrimos[x]) {

            maximo = ElementosPrimos[x];
        }

    }

    console.log(maximo);



}

function IsPrime() {

    let NumeroRandom = Math.floor(Math.random() * 1000) + 1;

    for (let i = 2; i < NumeroRandom; i++) {
        if (NumeroRandom % i == 0) {
            return null;
        }
    }

    return NumeroRandom;
}


/* +++++++++++++++++++++++++++++
   Inicia parte de aplicacion- Fuerza Bruta
++++++++++++++++++++++++++++++ */


// /* +++++++++++++++++++++++++++++
//    Inicia parte de aplicacion - Dinámica
// ++++++++++++++++++++++++++++++ */

// function fillArrayDynamic() {

//     let PrimeNumber = 0;


//     for (let i = 0; i <= PrimeNumber; i++) {
//         PrimeNumber++;
//     }
//     if (PrimeNumber % i == 0) {
//         ElementosPrimos[]=PrimeNumber;

//     }
// }

function MostrarElementos() {

    let DatosImprimir = '';

    for (let x = 0; x < ElementosPrimos.length; x++) {

        DatosImprimir += `<li class="list-group-item">Elemento  [${x+1}] -----> ${ElementosPrimos[x]}</li>`;

        document.getElementById('listaImprimir').innerHTML = DatosImprimir;

    }

}