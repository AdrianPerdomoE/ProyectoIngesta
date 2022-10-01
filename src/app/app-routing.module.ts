import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Components/registro/registro.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { PanelPrincipalComponent } from './Components/panel-principal/panel-principal.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Panel principal", component: PanelPrincipalComponent },
  { path: "Inicio", component: HomeComponent },
  { path: "Registro", component: RegistroComponent },
  { path: "*", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
