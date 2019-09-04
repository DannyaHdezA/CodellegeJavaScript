let btnCalcular = document.getElementById('btnCalcular');
// ------------------------------------------------
let NUM1 = document.getElementById('num1');
let NUM2 = document.getElementById('num2');
// ------------------------------------------------

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', numeros);
    // ------------------------------------------------
    num1.addEventListener('blur', validarDatos);
    num2.addEventListener('blur', validarDatos);
    // ------------------------------------------------
}

function numeros() {

    let NUM1 = Number(document.getElementById('num1').value);
    let NUM2 = Number(document.getElementById('num2').value);

    let imprimirResultado = document.getElementById('resultado');

    if (NUM1 > NUM2) {
        imprimirResultado.innerHTML = NUM1;
    } else {
        imprimirResultado.innerHTML = NUM2;
    }
    if (NUM1 == NUM2) {
        imprimirResultado.innerText = 'LOS NUMEROS SON IGUALES';
    }
}

//Se recibe le parametro event debido a que el método "addEvenListener" esta invocando la función validarDatos
function validarDatos(event) {

    // console.log(isNaN(NUM1.value));//isNaN valida si hay letras y lo muestra en consola
    // console.log(isNaN(event); //Muestra todos los atributos del objeto
    // console.log(event.target.value); // Ingresa al evento target que tiene el contenido

    let imprimirResultado = document.getElementById('resultado');

    if (isNaN(event.target.value)) // value == letras | Si hay letras, entonces...
    {
        event.target.focus(); // no permite al usuario cambiar al input NUM2
        imprimirResultado.innerHTML = 'SE ESTA INGRESANDO LETRAS';
    } else {
        imprimirResultado.innerHTML = '';
    }
    //console.log(isNaN(Number(NUM1.value))); 
}