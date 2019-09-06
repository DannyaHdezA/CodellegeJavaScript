let numero = document.getElementById('numero');
let imprimir = document.getElementById('resultado');

EventListener();

function EventListener() {
    numero.addEventListener('keypress', cifras);
    numero.addEventListener('blur', cifrasBlur);
}

function cifrasBlur() {

    let N = Number(document.getElementById('numero').value);


    if ((N >= 0) && (N <= 9)) {
        imprimir.innerHTML = `<p> EL NÚMERO ES DE 1 CIFRA </p>`;
        return;
    }
    if ((N >= 10) && (N <= 99)) {
        imprimir.innerHTML = `<p> EL NÚMERO ES DE 2 CIFRAS </p>`;
        return;
    }
    if ((N >= 100) && (N <= 999)) {
        imprimir.innerHTML = `<p> EL NÚMERO ES DE 3 CIFRAS </p>`;
        return;
    }
    if (N >= 1000) {
        imprimir.innerHTML = `<p> ¡ERROR! </p>`;
        return;
    }


}


function cifras(event) {


    if (event.key == "Enter") {

        let N = Number(document.getElementById('numero').value);


        if ((N >= 0) && (N <= 9)) {
            imprimir.innerHTML = `<p> EL NÚMERO ES DE 1 CIFRA </p>`;
        }
        if ((N >= 10) && (N <= 99)) {
            imprimir.innerHTML = `<p> EL NÚMERO ES DE 2 CIFRAS </p>`;
        }
        if ((N >= 100) && (N <= 999)) {
            imprimir.innerHTML = `<p> EL NÚMERO ES DE 3 CIFRAS </p>`;
        }
        if (N >= 1000) {
            imprimir.innerHTML = `<p> ¡ERROR! </p>`;
        }
    }

}