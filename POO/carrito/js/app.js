const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

const objectCar = new Carrito();
const vaciarCarrito = document.getElementById('vaciar-carrito');

EventListener();


function EventListener() {
    cursos.addEventListener('click', GetCourse);
    carrito.addEventListener('click', EliminarCourse);
    vaciarCarrito.addEventListener('click', VaciarCarritoCursos);
    document.addEventListener('DOMContentLoaded', MostrarCursosCarrito);

}

function MostrarCursosCarrito() {
    objectCar.ShowLocalStorageCar();
}

function GetCourse(event) {
    event.preventDefault(); // previene el evento previo al click

    // si el evento objetivo contiene una clase en su lista llamada 'agregar-carrito'
    if (event.target.classList.contains('agregar-carrito')) {
        // console.log(event);
        let Course = event.target.parentElement.parentElement;
        // console.log(Course);
        objectCar.readDataCourse(Course, listaCursos);
    }
}

function EliminarCourse(event) {
    objectCar.EliminarCursoCarrito(event);
}

function VaciarCarritoCursos() {
    objectCar.vaciarCarrito(listaCursos);
}