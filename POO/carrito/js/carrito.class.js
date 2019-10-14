class Carrito {


    constructor() { // se utiliza para instanciar la clase
        this.LS = new LocalStorage();
    }

    readDataCourse(curso, listaCursos) {

        const dataCourse = { //tipo de dato objeto
            // Permite selecconar cualquier elemento. Nombre por etiquetas.
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }

        this.addCourseCar(dataCourse, listaCursos);
        console.log(dataCourse);
    }

    addCourseCar(dataCourse, listaCursos) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        <img src="${dataCourse.imagen}" width=100>
        </td>
        <td> ${dataCourse.titulo}</td>
        <td> ${dataCourse.precio}</td> 
        <td>
        <a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</a>
        </td>
        `
        listaCursos.appendChild(row);

        this.LS.SaveCourseLocalStorage(dataCourse);

        // Swwet alert producto agregado
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: `${dataCourse.titulo}<br><br> Producto Agregado`,
            showConfirmButton: false,
            timer: 1500
        })



    }

    EliminarCursoCarrito(event) {
        event.preventDefault();

        let curso, cursoId;

        if (event.target.classList.contains('borrar-curso')) {
            curso = event.target.parentElement.parentElement;
            cursoId = curso.querySelector('a').getAttribute('data-id');
            curso.remove();

            this.LS.eliminarCursoLS(cursoId);
            //sweet alert producto eliminado

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            })

            Toast.fire({
                type: 'warning',
                title: 'Producto Eliminado'
            })
        }
    }

    ShowLocalStorageCar() {
        let CoursesLS = this.LS.GetCoursesLocalStorage()

        CoursesLS.forEach(function(curso) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>
            <img src="${curso.imagen}" width=100>
            </td>
            <td> ${curso.titulo}</td>
            <td> ${curso.precio}</td> 
            <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
            `
            listaCursos.appendChild(row);
        });
    }

    vaciarCarrito(listaCursos) {
        //Forma lenta
        // listaCursos.innerHTML = " ";
        // Forma rapida
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild);
            Swal.fire({
                title: 'Desea vaciar el carrito?',
                text: "Se eliminaran todos los productos.",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Vaciar!'
            }).then((result) => {
                if (result.value) {
                    Swal.fire(
                        'Listo!',
                        'Carrito vaciado.',
                        'success'
                    )
                }
            })
        }
        this.LS.VaciarLS();
        /// sweet alert vaciar todo el carrito
    }
}