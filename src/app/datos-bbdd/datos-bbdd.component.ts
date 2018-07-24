import { Component, OnInit } from '@angular/core';
import { ConexionBBDDService } from '../servicio/conexion-bbdd.service';

@Component({
  selector: 'app-datos-bbdd',
  templateUrl: './datos-bbdd.component.html',
  styleUrls: ['./datos-bbdd.component.css']
})
export class DatosBBDDComponent implements OnInit {

  alumnos:any;
  nuevoAlumno:any = {
    nombre:'',
    apellido:'',
    edad:''
  }
  editarAlumno:any = {
    nombre:'',
    apellido:'',
    edad:''
  }
  constructor(private conexion:ConexionBBDDService) { 
    // mediante variable conexión accedo al servicio conexión y a función listaAlumno. 
    // creo una variable alumno(se puede poner cualquier nombre), que es lo que me devuelve la función listaAlumno
    // y lo guardo en la variable alumnos que he creado en esta clase. 
    this.conexion.listaAlumno().subscribe(alumno=>{this.alumnos = alumno;}) 
  }

  agregarAlumno(){
    this.conexion.anadirAlumno(this.nuevoAlumno)
  }

  eliminarAlumno(alumno){
    this.conexion.borrarAlumno(alumno);
  }

  // función que se utiliza para cargar la información del alumno que se quiere modificar en la ventana modal. 
  actualizarAlumno(alumno){
    this.editarAlumno = alumno;
    
  }

  // función que se llama cuando se pulsa al botón actualizar de la modal. 
  // está función llama al servicio de la BBDD para actualizarAlumno
  agregarModificacionAlumno(){
    this.conexion.actualizarAlumno(this.editarAlumno);
  }

  ngOnInit() {
  }


}
