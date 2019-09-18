let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', serie);
}

function serie() {

    let numero = Number(document.getElementById('numero').value);



    while (numero > 1) {
        if (numero % 2 == 0) { // si el numero es par

            numero = numero / 2;
        } else { // el numero es impar 

            numero = (numero * 3) + 1;

        }

        let AgregarLista = document.createElement('li');
        let textoLista = document.createTextNode(`${numero}`);
        AgregarLista.appendChild(textoLista);
        let imprimir = document.getElementById('lista');
        lista.appendChild(AgregarLista);
    }
}