let finalizar = document.getElementById('finalizar');
let aceptar = document.getElementById('aceptar');
let salir = document.getElementById('salir');

let favor = document.getElementById('favor');
let contra = document.getElementById('contra');
let abstencion = document.getElementById('abstencion');

let Votos = new votos;

// votos debe ser igual a la clase votos de ClassVotos.js

evento();

function evento() {
    finalizar.addEventListener('click', fin);
    aceptar.addEventListener('click', Aceptar);
    salir.addEventListener('click', Salir);

    favor.addEventListener('click', fin);
    contra.addEventListener('click', fin);
    abstencion.addEventListener('click', fin);
}

function fin(e) {

    // console.log(e.target);
    if (e.target.id == "favor") {
        console.log(Votos.contarFavor());
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Voto a favor'
        })
    }
    if (e.target.id == "contra") {
        console.log(Votos.contarContra());
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Voto en contra'
        })
    }
    if (e.target.id == "abstencion") {
        console.log(Votos.contarAbstencion());
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Voto Nulo'
        })
    }
    // ******************************************

    if (e.target.id == "finalizar") {
        // +++++++++++++++++++++++++++++++++++++++++++
        if (Votos.favor > 0 || Votos.contra > 0 || Votos.abstencion > 0) {

            // Swal.fire({
            //     title: `Votos a favor ${Votos.favor}. <br>
            //         Votos en contra ${Votos.contra}.<br>
            //         Votos de abstencion ${Votos.abstencion}.`,
            //     animation: false,
            //     customClass: {
            //         popup: 'animated tada'
            //     }
            // })

            if ((Votos.favor > Votos.contra) && (Votos.favor > Votos.abstencion)) {
                Swal.fire({
                    title: `SE APRUEBA LA MOCIÓN...
                    <br>Votos a favor ${Votos.favor}. <br>
                        Votos en contra ${Votos.contra}.<br>
                        Votos de abstencion ${Votos.abstencion}.`,
                    animation: false,
                    customClass: {
                        popup: 'animated tada'
                    }
                })

            } else if ((Votos.contra > Votos.favor) && (Votos.contra > Votos.abstencion)) {
                Swal.fire({
                    title: `SE RECHAZA LA MOCIÓN...
                    <br>Votos a favor ${Votos.favor}. <br>
                        Votos en contra ${Votos.contra}.<br>
                        Votos de abstencion ${Votos.abstencion}.`,
                    animation: false,
                    customClass: {
                        popup: 'animated tada'
                    }
                })

            } else if ((Votos.abstencion > Votos.favor) && (Votos.abstencion > Votos.contra)) {
                Swal.fire({
                    title: `SE ANULA LA MOCIÓN...
                    <br>Votos a favor ${Votos.favor}. <br>
                        Votos en contra ${Votos.contra}.<br>
                        Votos de abstencion ${Votos.abstencion}.`,
                    animation: false,
                    customClass: {
                        popup: 'animated tada'
                    }
                })

            }
        } else {
            Swal.fire({
                title: `No se han registrado votos`,
                animation: false,
                customClass: {
                    popup: 'animated tada'
                }
            })
        }

        // ************ Resultados 



        // 

        Votos.favor = 0;
        Votos.contra = 0;
        Votos.abstencion = 0;
    }
}

function Aceptar() {
    let texto = document.getElementById('pregunta').value;

    document.getElementById('respuesta').innerHTML = texto;

}

function Salir() {
    Swal.fire(
        'SALIR',
        'Usted ha salido de la encuesta',
        'info'
    )
}