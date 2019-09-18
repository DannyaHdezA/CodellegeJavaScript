let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', serie);
}

function serie() {

    let numero = Number(document.getElementById('numero').value);

    let contador = 0;
    contador = numero - 2;
    let n1 = 0;
    let n2 = 1;

    let AgregarLista = document.createElement('li');
    let textoLista = document.createTextNode(`0`);
    AgregarLista.appendChild(textoLista);
    let imprimir = document.getElementById('lista');
    lista.appendChild(AgregarLista);

    let AgregarLista2 = document.createElement('li');
    let textoLista2 = document.createTextNode(`1`);
    AgregarLista2.appendChild(textoLista2);
    let imprimir2 = document.getElementById('lista');
    lista.appendChild(AgregarLista2);

    for (let i = 0; i < contador; i++) {

        n2 = n1 + n2;
        n1 = n2 - n1;

        if (n2 <= numero) {
            let AgregarLista = document.createElement('li');
            let textoLista = document.createTextNode(`${n2}`);
            AgregarLista.appendChild(textoLista);
            let imprimir = document.getElementById('lista');
            lista.appendChild(AgregarLista);
        }
    }

}