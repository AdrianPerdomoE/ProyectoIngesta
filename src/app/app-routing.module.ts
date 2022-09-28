import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './Components/registro/registro.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

const routes: Routes = [
  { path: "Home", component: HomeComponent },
  { path: "Registro", component: RegistroComponent },
  { path: "Perfil", component: PerfilComponent },
  { path: "*", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
