let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', calcula);
}

function calcula() {

    let pagoi = .01;
    let suma = 0;

    for (let i = 0; i < 365; i++) {

        pagoi = pagoi * 3;
        suma = suma + pagoi;

        let AgregarLista = document.createElement('li');
        let textoLista = document.createTextNode(`Mes ${i+1} -- $ ${pagoi}`);
        AgregarLista.appendChild(textoLista);


        let imprimir = document.getElementById('lista');
        lista.appendChild(AgregarLista);
    }


    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p> El ahorro de todo el año es : ${suma}</p>`
}