var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de ".concat(logo));
        };
    };
}
// clase
var Camisa = /** @class */ (function () {
    // Constructor y atributos
    function Camisa(color, model, mark, talla, price) {
        if (color === void 0) { color = color; }
        if (model === void 0) { model = model; }
        if (mark === void 0) { mark = mark; }
        if (talla === void 0) { talla = talla; }
        if (price === void 0) { price = price; }
        this.color = color;
        this.model = model;
        this.mark = mark;
        this.talla = talla;
        this.price = price;
    }
    // Metodos get y set
    Camisa.prototype.getColor = function () {
        return this.color;
    };
    Camisa.prototype.setColor = function (color) {
        this.color = color;
    };
    Camisa.prototype.getModel = function () {
        return this.model;
    };
    Camisa.prototype.setModel = function (model) {
        this.model = model;
    };
    Camisa.prototype.getMark = function () {
        return this.mark;
    };
    Camisa.prototype.setMark = function (mark) {
        this.mark = mark;
    };
    Camisa.prototype.getTalla = function () {
        return this.talla;
    };
    Camisa.prototype.setTalla = function (talla) {
        this.talla = talla;
    };
    Camisa.prototype.getPrice = function () {
        return this.price;
    };
    Camisa.prototype.setPrice = function (price) {
        this.price = price;
    };
    Camisa = __decorate([
        estampar('Gucci Gang') // Decorador
    ], Camisa);
    return Camisa;
}());
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(capucha, color, model, mark, talla, price) {
        if (capucha === void 0) { capucha = capucha; }
        var _this = _super.call(this, color, model, mark, talla, price) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    return Sudadera;
}(Camisa));
var camisa = new Camisa('azul', 'manga larga', 'koaj', 'M', 75000);
console.log(camisa);
camisa.estampacion();
var sudadera = new Sudadera(true, 'azul', 'manga larga', 'koaj', 'M', 75000);
console.log(sudadera);
