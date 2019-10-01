class votos {
    /* +++++++++++++++++++++++++++++
           Propiedades de Objetos
    ++++++++++++++++++++++++++++++ */

    // contadores 

    favor = 0;
    contra = 0;
    abstencion = 0;


    constructor() {

    }

    /* +++++++++++++++++++++++++++++
       Metodos de Objetos
    ++++++++++++++++++++++++++++++ */

    contarFavor() {
        this.favor++;
        return this.favor;
    }
    contarContra() {
        this.contra++;
        return this.contra;
    }
    contarAbstencion() {
        this.abstencion++;
        return this.abstencion;
    }



}