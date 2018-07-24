import { Injectable } from '@angular/core';
// linkado a BBDD y a colección de BBDD
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Alumno { nombre: string; apellido:string; edad:number;  }
 

@Injectable({
  providedIn: 'root'
})



export class ConexionBBDDService {

  private elementosCollection: AngularFirestoreCollection<Alumno>;
// variable para acceder a cada elemento de la colección. 
  private accesoAElemento: AngularFirestoreDocument<Alumno>;

  elemento: Observable<Alumno[]>;
  constructor(private afs: AngularFirestore) {
    this.elementosCollection = afs.collection<Alumno>('alumnos');
    this.elemento = this.elementosCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Alumno;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    
  }

  // Añadir nuevo elemento a Colección. 
  // desde componenete bbdd,
  // 1. Se crearan input para que el user ponga nombre, apellidos y edad
  // 2. lo que se hara es llamar a esta función para que añada al nuevo alumno
  
  anadirAlumno(nuevoAlumno: Alumno) {
    this.elementosCollection.add(nuevoAlumno);
  }

  borrarAlumno(alumno){
    this.accesoAElemento = this.afs.doc<Alumno>(`alumnos/${alumno.id}`);
    this.accesoAElemento.delete();
  }

  actualizarAlumno(alumno){
    this.accesoAElemento = this.afs.doc<Alumno>(`alumnos/${alumno.id}`);
    this.accesoAElemento.update(alumno);
  }



  // función para devolver los elementos dado de alta en la colección alumnos. 
 public listaAlumno(){
    return this.elemento;
  }
  
}
