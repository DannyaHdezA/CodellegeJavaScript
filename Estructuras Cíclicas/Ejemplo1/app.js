// let btnCalcular = document.getElementById('btnCalcular');

// EventListener();

// function EventListener() {
//     btnCalcular.addEventListener('click', SumaCantidades);
// }

SumaCantidades();

function SumaCantidades() {

    // let imprimirResultado = document.getElementById('resultado');

    let suma = 0;

    for (let i = 1; i <= 10; i++) {

        suma = suma + i;
        let newli = document.createElement('li');
        newli.setAttribute("id", `listaN${i}`);
        newli.setAttribute("class", "list-group-item");

        let newContent = document.createTextNode(suma);

        newli.appendChild(newContent);
        let listaDesordenada = document.getElementById('listaNumerica');

        listaDesordenada.appendChild(newli);


        // imprimirResultado.innerHTML = suma;
    }
}