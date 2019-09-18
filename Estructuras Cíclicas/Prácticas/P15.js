let calcular = document.getElementById('calcular');
evento();

function evento() {
    calcular.addEventListener('click', sueldo);
}

function sueldo() {

    let sueldo = 1500;

    for (let i = 1; i <= 6; i++) {

        sueldo = sueldo * 1.1;


        let AgregarLista = document.createElement('li');
        let textoLista = document.createTextNode(`${sueldo}`);
        AgregarLista.appendChild(textoLista);
        let imprimir = document.getElementById('lista');
        lista.appendChild(AgregarLista);



    }
}