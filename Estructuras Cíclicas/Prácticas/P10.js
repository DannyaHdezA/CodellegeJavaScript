let cand1 = document.getElementById('cand1');
let cand2 = document.getElementById('cand2');
let cand3 = document.getElementById('cand3');
let cand4 = document.getElementById('cand4');


let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

evento();

function evento() {
    cand1.addEventListener('click', v1);
    cand2.addEventListener('click', v2);
    cand3.addEventListener('click', v3);
    cand4.addEventListener('click', v4);
}

function v1() {
    contador1++;
    let imprimir = document.getElementById('votos1');

    imprimir.innerHTML = contador1;

    total();
}

function v2() {
    contador2++;
    let imprimir = document.getElementById('votos2');

    imprimir.innerHTML = contador2;

    total();
}

function v3() {
    contador3++;
    let imprimir = document.getElementById('votos3');

    imprimir.innerHTML = contador3;

    total();
}

function v4() {
    contador4++;
    let imprimir = document.getElementById('votos4');

    imprimir.innerHTML = contador4;

    total();
}

function total() {
    let suma = 0;
    suma = contador1 + contador2 + contador3 + contador4;

    let p1 = 0,
        p2 = 0,
        p3 = 0,
        p4 = 0;

    p1 = (contador1 * 100) / suma;
    p2 = (contador2 * 100) / suma;
    p3 = (contador3 * 100) / suma;
    p4 = (contador4 * 100) / suma;

    let imprim = document.getElementById('resultado');

    imprim.innerHTML = `El total de votos es: ${suma} <br>
    El candidato #1 recibio el ${p1}% <br>
    El candidato #2 recibio el ${p2}% <br>
    El candidato #3 recibio el ${p3}% <br>
    El candidato #4 recibio el ${p4}% <br>`;
}