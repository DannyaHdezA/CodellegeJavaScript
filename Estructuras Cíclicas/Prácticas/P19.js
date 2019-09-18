let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {

    let contador = 0,
        serie = 2,
        suma = 0;


    while (suma < 1800) {
        contador++;
        if (contador % 2 == 0) {
            //par
            serie = serie + 2;
        } else {
            //impar
            serie = serie + 3;
        }

        suma = serie + suma;
        let AgregarLista = document.createElement('li');
        let textoLista = document.createTextNode(`${serie}`);
        AgregarLista.appendChild(textoLista);
        let imprimir = document.getElementById('lista');
        lista.appendChild(AgregarLista);

    }

    // let resultado = document.getElementById('resultado');

    // resultado.innerHTML = `<p> la suma de todos los numeros es : ${suma}</p>`;
}