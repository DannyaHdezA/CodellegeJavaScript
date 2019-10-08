class Prize {

    posicionX = 0;
    posicionY = 0;
    sizeMargin = 0;

    constructor() {
        this.calculateSizeMargin();
    }


    positionX(posicionX) {
        this.posicionX = posicionX;
    }


    positionY(posicionY) {
        this.posicionY = posicionY;
    }

    calculateSizeMargin() {

        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));

        let marginLeft = marginContainer.getPropertyValue('margin-left');
        this.sizeMargin = marginLeft.substring(0, marginLeft.length - 2);

    }

    createElementImg() {


        // let margen = document.getElementById('contenedor').style.marginTop;
        // console.log(margen);

        // let marginLeft = document.getElementById('contenedor').style.marginLeft;


        let ImageCreate = document.createElement('img');
        ImageCreate.setAttribute('src', './imagenes/Trofeo.png');

        ImageCreate.style.width = "50px";

        let posX = this.posicionX - 115; // 90 + 25 // =  this.posicionX - this.sizeMargin
        let posY = this.posicionY - 25;

        ImageCreate.style.left = `${posX}px`;
        ImageCreate.style.top = `${posY}px`;

        document.getElementById('contenedor').appendChild(ImageCreate);

        return { posX, posY }
    }



}