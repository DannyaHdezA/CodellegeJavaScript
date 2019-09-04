//Esta linea crea una variable la cual se enacrga de obtener por medio del Objeto document el elemento button con el id "BotonCalcular"
let BotonCalcular = document.getElementById('BotonCalcular');

//Por medio del método "addEventListener" se le asigno el evento clic al elemento button y al momento de ejecutar dicho evento se ejecutara la función suma
BotonCalcular.addEventListener('click', suma);

//Función: bloque de codigo que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizara ninguna accion en el código. 
function suma() {

    // Se obtendra los valores  de los inputs por medio del método "Value"
    let Numero1 = document.getElementById('Numero1').value;
    let Numero2 = document.getElementById('Numero2').value;

    //Se reasigna el valor de la variable Numero2 convirtiendolo de string a Numero
    Numero1 = Number(Numero1);
    Numero2 = Number(Numero2);

    // Se declara variable "Resultado" y se ininializa con valor '0'
    let Resultado = 0;

    // Despues d eobtener los datos de los elementos input se realiza el proceso de la suma y se le asigna dicho valor de la variable "Resultado"
    Resultado = Numero1 + Numero2;

    // Se asigno a la variable "imprimirResultado" el elemento con el ID "Resultado"
    let imprimirResultado = document.getElementById('Resultado');

    //Por medio del metodo "innerHTML" se asigna el valor de la variable resultado para que se pueda imprimir en el elemento
    imprimirResultado.innerHTML = Resultado;
}