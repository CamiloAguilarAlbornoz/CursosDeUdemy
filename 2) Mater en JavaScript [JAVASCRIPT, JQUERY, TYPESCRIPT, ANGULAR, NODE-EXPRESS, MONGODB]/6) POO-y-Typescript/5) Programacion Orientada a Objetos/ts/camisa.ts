// interface
interface CamisetaBase {

    getColor() : string;
    setColor(color : string) : void;
    getModel() : string;
    setModel(model : string) : void;
    getMark() : string;
    setMark(mark : string) : void;
    getTalla() : string;
    setTalla(talla : string) : void;
    getPrice() : number;
    setPrice(price : number) : void;

}

// Decorador
function estampar(logo : string) {
    return function(target : Function) {
        target.prototype.estampacion = function () : void {
            console.log(`Camiseta estampada con el logo de ${logo}`);
        }
    }
}

// clase
@estampar('Gucci Gang') // Decorador
class Camisa implements CamisetaBase {

    // Constructor y atributos
    constructor(
        private color : string = color,
        private model : string = model,
        private mark : string = mark,
        private talla : string = talla,
        private price : number = price
    ) {}

    // Metodos get y set
    public getColor() : string {
        return this.color;
    }

    public setColor(color : string) {
        this.color = color;
    }

    public getModel() : string {
        return this.model;
    }

    public setModel(model : string) {
        this.model = model;
    }

    public getMark() : string {
        return this.mark;
    }

    public setMark(mark : string) {
        this.mark = mark;
    }

    public getTalla() : string {
        return this.talla;
    }

    public setTalla(talla : string) {
        this.talla = talla;
    }

    public getPrice() : number {
        return this.price;
    }

    public setPrice(price : number) {
        this.price = price;
    }
}

// clase hija
class Sudadera extends Camisa {

    constructor(
        private capucha : boolean = capucha,
        color : string,
        model : string,
        mark : string,
        talla : string,
        price : number
        
    ) {
        super(color, model, mark, talla, price);
    }

    public getCapucha() : boolean {
        return this.capucha;
    }
    
    public setCapucha(capucha : boolean) {
        this.capucha = capucha;
    }
}

let camisa = new Camisa('azul', 'manga larga', 'koaj', 'M', 75000);
console.log(camisa);

camisa.estampacion();

let sudadera = new Sudadera(true, 'azul', 'manga larga', 'koaj', 'M', 75000);
console.log(sudadera);