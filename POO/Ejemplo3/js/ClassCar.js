class Car {

    posicionX = 0;
    posicionY = 0;

    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;
    }

    moveRight(img) {
        img.src = "./imagenes/Auto_der.png"
            // img.style.width = '140px';
        document.getElementById('Car').style.width = '140px';
        document.getElementById('Car').style.height = '70px';

        if (this.posicionX <= 86) {
            img.style.left = (this.posicionX++) + "%";
            console.log(this.posicionX);
        }
    }
    moveLeft(img) {

        img.src = "./imagenes/Auto_izq.png"
        document.getElementById('Car').style.width = '140px';
        document.getElementById('Car').style.height = '70px';

        if (this.posicionX > 0) {

            img.style.left = (this.posicionX--) + "%";
            console.log(this.posicionX);
        }
    }

    moveTop(img) {
        img.src = "./imagenes/Auto_arriba.png"
        document.getElementById('Car').style.width = '70px';
        document.getElementById('Car').style.height = '140px';

        if (this.posicionY > 0) {

            img.style.top = (this.posicionY--) + "%";
            console.log(this.posicionY);
        }
    }
    moveBottom(img) {
        img.src = "./imagenes/Auto_abajo.png"
        document.getElementById('Car').style.width = '70px';
        document.getElementById('Car').style.height = '140px';

        if (this.posicionY <= 79) {

            img.style.top = (this.posicionY++) + "%";
            console.log(this.posicionY);
        }
    }

    currentPosition(arrayPositionPrize, image) {

        let PositionCarX = image.x;
        let PositionCarY = image.y;

        for (let i = 0; i < arrayPositionPrize.length; i++) {
            let PositionXPrize = arrayPositionPrize[i].posX;
            let PositionYPrize = arrayPositionPrize[i].posY;

            console.log(`Coordenadas Carrito`, PositionCarX, PositionCarY);
            console.log(`Coordenadas Imagen`, PositionXPrize, PositionYPrize);


            if (PositionCarX >= PositionXPrize - 25 && PositionCarX <= PositionXPrize + 25 && PositionCarY >= PositionYPrize - 25 && PositionCarY <= PositionYPrize + 25) {
                return true;
            }
        }

        return false;
    }
}