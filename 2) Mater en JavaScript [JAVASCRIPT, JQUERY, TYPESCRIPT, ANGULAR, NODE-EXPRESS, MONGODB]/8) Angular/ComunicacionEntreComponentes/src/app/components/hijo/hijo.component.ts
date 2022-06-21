import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() harakiri: Array<string> | undefined;
  public actual : Array<string>;

  constructor() {
    this.actual = new Array();
  }

  public mostrar() : void {
    if (this.actual.length == 0) {
      this.harakiri?.forEach(actualName => {
        this.actual.push(actualName);
      });
      this.actual.push("Karen");
      this.actual.push("Cardozo");
    }
  }

  ngOnInit(): void {
  }

}
