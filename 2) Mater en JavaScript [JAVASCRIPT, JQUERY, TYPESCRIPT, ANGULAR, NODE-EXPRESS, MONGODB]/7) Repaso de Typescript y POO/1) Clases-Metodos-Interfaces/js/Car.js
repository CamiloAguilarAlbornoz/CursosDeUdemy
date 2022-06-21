var Car = /** @class */ (function () {
    function Car(color, model, speed) {
        if (color === void 0) { color = null; }
        if (model === void 0) { model = null; }
        if (speed === void 0) { speed = null; }
        this.color = color;
        this.model = model;
        this.speed = speed;
    }
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    Car.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Car.prototype.acelerar = function () {
        this.speed++;
    };
    Car.prototype.frenar = function () {
        this.speed--;
    };
    return Car;
}());
var carList = new Array();
carList.push(new Car('rojo', 'sandero', 0));
carList.push(new Car('azul', 'sandero', 0));
carList.push(new Car('verde', 'sandero', 0));
carList.push(new Car());
carList.forEach(function (car, index) {
    console.log("El color del carro ".concat(index + 1, " es ").concat(car.getColor()));
    if (index == 1) {
        car.acelerar();
        car.acelerar();
        car.acelerar();
        console.log("La velocidad del carro ".concat(index + 1, " despues de acelerar 3 veces es ").concat(car.getSpeed()));
        car.frenar();
        console.log("La velocidad del carro ".concat(index + 1, " despues de frenar 1 vez es ").concat(car.getSpeed()));
    }
});
