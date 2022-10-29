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
import { RealizarIngestaComponent } from './Components/realizar-ingesta/realizar-ingesta.component';
import { LogoComponent } from './Components/logo/logo.component';
import { ProyectosSubidosComponent } from './Components/proyectos-subidos/proyectos-subidos.component';
import { ProyectoPreviewComponent } from './Components/proyecto-preview/proyecto-preview.component';
import { ProyectoComponent } from './Components/proyecto/proyecto.component';
import { ArchivoService } from './services/archivo.service';
import { EditarProyectoComponent } from './Components/editar-proyecto/editar-proyecto.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { ProyectoPreviewPanelComponent } from './Components/proyecto-preview-panel/proyecto-preview-panel.component';
import { DescargaComponent } from './Components/descarga/descarga.component';
import { DisplayFileComponent } from './Components/display-file/display-file.component';
import { DescargaFormularioComponent } from './Components/descarga-formulario/descarga-formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    ErrorComponent,
    PanelPrincipalComponent,
    NavbarComponent,
    RealizarIngestaComponent,
    LogoComponent,
    ProyectosSubidosComponent,
    ProyectoPreviewComponent,
    ProyectoComponent,
    EditarProyectoComponent,
    BusquedaComponent,
    ProyectoPreviewPanelComponent,
    DescargaComponent,
    DisplayFileComponent,
    DescargaFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService,ProyectoService,ArchivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
