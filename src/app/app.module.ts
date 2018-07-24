import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modificar url, evitar que un componente se muestre siempre. 
import { RouterModule, Routes } from '@angular/router';
// para utilizar formularios y ngModel
import { FormsModule } from '@angular/forms';

// configuración BBDD firebase. 
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';


import { ConexionBBDDService } from './servicio/conexion-bbdd.service';
import { DatosBBDDComponent } from './datos-bbdd/datos-bbdd.component';
import { PatronesComponent } from './patrones/patrones.component';
import { MetrosPipe } from './pipe/metros.pipe';
import { DirectivaDirective } from './creador/directiva.directive';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';


// la úlitma ruta es para cuando el user pone una ruta no correcta. Se debería poner en vez de redirectTo, deberíamos poner un component con error 404
const routes: Routes = [
  { path: 'binding', component: DataBindingComponent },
  {path: 'directives', component: DirectivasComponent},
  {path: 'pipes', component: PatronesComponent},
  {path: 'alumnos', component: DatosBBDDComponent},
  {path: 'formulario-contacto', component: FormularioContactoComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    DataBindingComponent,
    DirectivasComponent,
    DatosBBDDComponent,
    PatronesComponent,
    MetrosPipe,
    DirectivaDirective,
    FormularioContactoComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ConexionBBDDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
