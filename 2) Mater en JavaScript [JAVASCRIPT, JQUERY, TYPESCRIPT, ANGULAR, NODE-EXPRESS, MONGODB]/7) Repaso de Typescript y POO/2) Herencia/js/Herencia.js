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
var store;
(function (store) {
    var Ropa = /** @class */ (function () {
        function Ropa(title) {
            this.title = title;
            alert(title);
        }
        return Ropa;
    }());
    store.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(title) {
            this.title = title;
            alert("Tienda de tecnolog\u00EDa ".concat(title));
        }
        return Informatica;
    }());
    store.Informatica = Informatica;
})(store || (store = {}));
var Informatica = store.Informatica;
var cargarInformatica = new Informatica('Super Tienda');
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Software = /** @class */ (function () {
    function Software(name, version) {
        this.name = name;
        this.version = version;
    }
    Software.prototype.getName = function () {
        return this.name;
    };
    Software.prototype.setName = function (name) {
        this.name = name;
    };
    Software.prototype.getVersion = function () {
        return this.version;
    };
    Software.prototype.setVersion = function (version) {
        this.version = version;
    };
    Software = __decorate([
        arranque('Lanzamiento del curso de Mean Stack')
    ], Software);
    return Software;
}());
var eclipse = new Software('Eclipse', 1);
eclipse.lanzamiento();
var VideoEditor = /** @class */ (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor(name, version, timeLine) {
        var _this = _super.call(this, name, version) || this;
        _this.timeLine = timeLine;
        return _this;
    }
    VideoEditor.prototype.getTimeLine = function () {
        return this.timeLine;
    };
    VideoEditor.prototype.setTimeLine = function (timeLine) {
        this.timeLine = timeLine;
    };
    VideoEditor.prototype.getAllData = function () {
        return "".concat(this.name, " - ").concat(this.version, " - ").concat(this.timeLine);
    };
    return VideoEditor;
}(Software));
// LOGICA DEL FORMULARIO
var softwareList = new Array();
function saveSoftware() {
    var name = document.getElementById('idInputNameSoftware').value.toString();
    var version = parseInt(document.getElementById('idInputVersionSoftware').value);
    var timeLine = parseInt(document.getElementById('idInputTimeLineSoftware').value);
    softwareList.push(new VideoEditor(name, version, timeLine));
    var list = "";
    for (var i = 0; i < softwareList.length; i++) {
        list += "<li>".concat(softwareList[i].getAllData(), "</li>");
    }
    var ulListSoftware = document.getElementById('idUlListSoftware');
    ulListSoftware.innerHTML = list;
    document.getElementById('idInputNameSoftware').value = '';
    document.getElementById('idInputVersionSoftware').value = '';
    document.getElementById('idInputTimeLineSoftware').value = '';
}
console.log(softwareList.length);
