class Proyectil {

    /* +++++++++++++++++++++++++++++
       Propiedades de Objetos
    ++++++++++++++++++++++++++++++ */
    velocidadInicial = 0;
    angulo = 0;

    constructor(VelocidadInicial, Angulo) {
        this.velocidadInicial = VelocidadInicial;
        this.angulo = Angulo;
    }

    /* +++++++++++++++++++++++++++++
       Metodos de Objetos
    ++++++++++++++++++++++++++++++ */

    CalcularVelocidadX(t) {
        let velocidadX = 0;
        velocidadX = (this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180))) * t;
        return velocidadX;
    }

    CalcularVelocidadY(t) {
        let velocidadY = 0;
        velocidadY = (this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180)));

        velocidadY = velocidadY * t - 0.5 * 9.8 * Math.pow(t, 2);
        return velocidadY;
    }

    CrearSpan(posicionX, posicionY) {
        let spanCreado = document.createElement('span');
        spanCreado.style.left = `${posicionX}%`;
        spanCreado.style.bottom = `${posicionY}%`;
        document.getElementById('contenedor').appendChild(spanCreado);
    }
}