module store {
    export class Ropa {

        constructor(
            private title : string
        ) {
            alert(title);
        }
    }

    export class Informatica {

        constructor(
            private title : string
        ) {
            alert(`Tienda de tecnología ${title}`);
        }
    }
}

import Informatica = store.Informatica;
let cargarInformatica = new Informatica('Super Tienda');

function arranque(lanzar : string) {
    return function(target : Function) {
        target.prototype.lanzamiento = function() : void {
            alert(lanzar);
        }
    }
}

@arranque(
    'Lanzamiento del curso de Mean Stack'
)
class Software {

    constructor(
        protected name : string,
        protected version : number,
    ) {}

    public getName() : string {
        return this.name;
    }

    public setName(name : string) : void {
        this.name = name;
    }

    public getVersion() : number {
        return this.version;
    }

    public setVersion(version : number) {
        this.version = version;
    }
}

let eclipse = new Software('Eclipse', 1);
eclipse.lanzamiento();

class VideoEditor extends Software {

    constructor(
        name : string,
        version : number,
        private timeLine : number
    ) {
        super(name, version);
    }

    public getTimeLine() : number {
        return this.timeLine;
    }

    public setTimeLine(timeLine : number) : void {
        this.timeLine = timeLine;
    }

    public getAllData() : string {
        return `${this.name} - ${this.version} - ${this.timeLine}`;
    }
}

// LOGICA DEL FORMULARIO
let softwareList = new Array<VideoEditor>();

function saveSoftware() {
    let name = (<HTMLInputElement> document.getElementById('idInputNameSoftware')).value.toString();
    let version = parseInt((<HTMLInputElement> document.getElementById('idInputVersionSoftware')).value);
    let timeLine = parseInt((<HTMLInputElement> document.getElementById('idInputTimeLineSoftware')).value);

    softwareList.push(
        new VideoEditor(name, version, timeLine)
    );

    let list = ``;
    for (let i = 0; i < softwareList.length; i++) {
        list += `<li>${softwareList[i].getAllData()}</li>`;
    }
    let ulListSoftware = <HTMLElement> document.getElementById('idUlListSoftware');
    ulListSoftware.innerHTML = list;

    (<HTMLInputElement> document.getElementById('idInputNameSoftware')).value = '';
    (<HTMLInputElement> document.getElementById('idInputVersionSoftware')).value = '';
    (<HTMLInputElement> document.getElementById('idInputTimeLineSoftware')).value = '';
}
console.log(softwareList.length);