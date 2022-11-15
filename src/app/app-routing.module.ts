import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Components/registro/registro.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { PanelPrincipalComponent } from './Components/panel-principal/panel-principal.component';
import { RealizarIngestaComponent } from './Components/realizar-ingesta/realizar-ingesta.component'; 
import { ProyectosSubidosComponent } from './Components/proyectos-subidos/proyectos-subidos.component';
import { ProyectoComponent } from './Components/proyecto/proyecto.component';
import { EditarProyectoComponent } from './Components/editar-proyecto/editar-proyecto.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { DescargaFormularioComponent } from './Components/descarga-formulario/descarga-formulario.component';
import { MisDescargasComponent } from './Components/mis-descargas/mis-descargas.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "realizar-ingesta", component: RealizarIngestaComponent },
  { path: "Busqueda", component: BusquedaComponent },
  { path: "proyecto/:id", component:ProyectoComponent },
  { path: "EditarProyecto/:id", component:EditarProyectoComponent },
  { path: "Archivos-Subidos", component: ProyectosSubidosComponent },
  { path: "Panel principal", component: PanelPrincipalComponent },
  { path: "Inicio", component: HomeComponent },
  { path: "Registro", component: RegistroComponent },
  { path: "*", component: ErrorComponent },
  { path :"DescargaForm/:id", component:DescargaFormularioComponent},
  { path :"MisDescargas", component: MisDescargasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
