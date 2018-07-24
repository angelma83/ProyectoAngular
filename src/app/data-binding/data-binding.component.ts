import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  interpolacion:string = "Mostrado de variable mediante interpolación";
  edad:number= 34;
  info:string='';
  datos:string = "Haga consulta";
  // consultaUser:string = "se carga información"
  constructor() {
    
   }

  ngOnInit() {
    
  }

  getEdad(){
    return this.edad;
  }


}
