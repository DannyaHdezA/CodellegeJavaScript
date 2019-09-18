let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', primos);
}

function primos() {

    let numero = Number(document.getElementById('numero').value);


    for (let n = 1; n < numero; n++) {
        let primo = 1;
        let contador = 2;

        while (contador <= n / 2 && primo) {
            if (n % contador == 0) {
                primo = 0;
            }
            contador++;
        }

        if (primo) {
            let AgregarLista = document.createElement('li');
            let textoLista = document.createTextNode(`${n}`);
            AgregarLista.appendChild(textoLista);
            let imprimir = document.getElementById('lista');
            lista.appendChild(AgregarLista);
        }

    }








    // if (n2 <= numero) {
    //     let AgregarLista = document.createElement('li');
    //     let textoLista = document.createTextNode(`${n2}`);
    //     AgregarLista.appendChild(textoLista);
    //     let imprimir = document.getElementById('lista');
    //     lista.appendChild(AgregarLista);
    // }
}