import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  mostrarTexto:boolean = true;
  colores:string[] = ['blue','red','orange','yellow'];
  alumnos:Array<any> = [{Nombre:'Juan', Edad: 24, Profesion:'carpintero'},
  {Nombre:'Julián', Edad: 32, Profesion:'mecanico'},
  {Nombre:'Andrés', Edad: 31, Profesion:'albañil'},
  {Nombre:'Javier', Edad: 21, Profesion:'arbitro'}];

  constructor() { }

  ngOnInit() {
  }

}
