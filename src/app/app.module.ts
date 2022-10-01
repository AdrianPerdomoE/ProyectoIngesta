import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importar http y formularios de angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//importar componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { PanelPrincipalComponent } from './Components/panel-principal/panel-principal.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
//importar servicios
import { UsuarioService } from './services/usuario.service';
import { ProyectoService } from './services/proyecto.service';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    ErrorComponent,
    PanelPrincipalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService,ProyectoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
