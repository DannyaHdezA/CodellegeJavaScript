let btnCalcular = document.getElementById('btnCalcular');

//Se invoca función "eventListener"
eventListener();

// Se crea la función eventListener para encapsular los objetos que llevaran el metodo "eventListener"
function eventListener() {

    btnCalcular.addEventListener('click', ObtenerArea)
}

function ObtenerArea() {

    // Se obtiene el valor de los inputs y se convierte su tipo de dato a number y se le asigna el valor a la variable correspondiente 
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value)

    let resultado = 0;
    resultado = (base * altura) / 2;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;

}