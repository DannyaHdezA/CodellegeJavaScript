let btnNumAleatorios = document.getElementById('btnNumAleatorios');

let elementos = [];

evento();

function evento() {
    btnNumAleatorios.addEventListener('click', Random);
}

function Random() {

    let suma = 0;
    let TamArray = Number(document.getElementById('TamArray').value);

    let i = 0;


    for (i = 0; i < TamArray; i++) {

        elementos[i] = GenerarNumA();

        suma = suma + elementos[i];
    }
    MostrarElementos(suma);
    suma = 0;
}

function GenerarNumA() {
    let numero = Math.floor(Math.random() * 9) + 0;
    return numero;

}

function suma() {

}

function MostrarElementos(sumafinal) {

    let DatosImprimir = '';

    for (let x = 0; x < elementos.length; x++) {

        DatosImprimir += `<li class="list-group-item">Elemento  [${x}] -----> ${elementos[x]}</li>`;

        document.getElementById('listaImprimir').innerHTML = DatosImprimir;

    }
    document.getElementById('resultado').innerHTML = `<p> La suma de los numeros obtenidos es: ${sumafinal}</p>`;

}