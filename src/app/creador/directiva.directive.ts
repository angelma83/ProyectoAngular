import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirectivaPropia]'
})
export class DirectivaDirective {

  constructor() { }

  @HostBinding ('class.seleccionado') private mostrar: boolean = false; 

  @HostListener('mouseover') onOver() { 
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() { 
    this.mostrar = false;
  }

}