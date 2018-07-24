import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrones',
  templateUrl: './patrones.component.html',
  styleUrls: ['./patrones.component.css']
})
export class PatronesComponent implements OnInit {

  fecha:any = new Date();
  ciudad:string = 'Madrid';
  numero:number = 44.45487;
  anchuraRayo: number = 60;
  anchuraMadrid: number = 68;

  constructor() { }

  diferenciaMetros (){
    return this.anchuraRayo-this.anchuraMadrid;
  }

  ngOnInit() {
  }

}
