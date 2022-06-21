import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public nombres : Array<string>;

  constructor() {
    this.nombres = new Array();
    this.nombres.push("Silvana");
    this.nombres.push("Katerin");
    this.nombres.push("Nieto");
    this.nombres.push("Murcia");
  }

  ngOnInit(): void {
  }

}
