event();

let arrayPositionPrize = [];

function event() {
    document.getElementById('contenedor').addEventListener('mousemove', setPrize);

}



function setPrize(event) {
    console.log(event.clientX, event.clientY);
    let palabra = document.getElementById('parte');
    if (((event.clientX > 591) && (event.clientX < 606)) && ((event.clientY > 65) && (event.clientY < 95))) {
        palabra.innerHTML = `OREJA`;
    } else {
        palabra.innerHTML = ``;
    }

}