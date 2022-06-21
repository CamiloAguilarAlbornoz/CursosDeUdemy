interface CarBase {

    getColor() : string;
    setColor(color : string) : void;
    getModel() : string;
    setModel(model : string) : void;
    getSpeed() : number;
    setSpeed(speed : number) : void;
}

class Car implements CarBase {

    constructor(
        private color : string = null,
        private model : string = null,
        private speed : number = null
    ) {}
    
    public getColor(): string {
        return this.color;
    }
    
    public setColor(color: string): void {
        this.color = color;
    }
    
    public getModel(): string {
        return this.model;
    }
    
    public setModel(model: string): void {
        this.model = model;
    }

    public getSpeed(): number {
        return this.speed;
    }
    
    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public acelerar() : void {
        this.speed++;
    }

    public frenar() : void {
        this.speed--;
    }
}

let carList = new Array<Car>();
carList.push(new Car('rojo', 'sandero', 0));
carList.push(new Car('azul', 'sandero', 0));
carList.push(new Car('verde', 'sandero', 0));
carList.push(new Car());

carList.forEach((car, index) => {
    console.log(`El color del carro ${index+1} es ${car.getColor()}`);
    if (index == 1) {
        car.acelerar();
        car.acelerar();
        car.acelerar();
        console.log(`La velocidad del carro ${index+1} despues de acelerar 3 veces es ${car.getSpeed()}`);
        car.frenar();
        console.log(`La velocidad del carro ${index+1} despues de frenar 1 vez es ${car.getSpeed()}`);
    }
});