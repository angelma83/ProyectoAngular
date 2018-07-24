import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCreadorDirectivaPropia]'
})
export class CreadorDirectivaPropiaDirective {

  constructor() { }

  @HostBinding ('class.seleccionado') private mostrar: boolean = false; 

  @HostListener('mouseover') onOver() { 
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() { 
    this.mostrar = false;
  }

}
