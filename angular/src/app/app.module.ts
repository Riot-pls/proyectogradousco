// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsModule } from './modules/notifications/notifications.module'
import { SettingsModule } from './modules/settings/settings.module';
import { PagesModule } from './modules/pages/pages.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OlvidoClaveComponent } from './login/olvido-clave.component';
import { CambioClaveComponent } from './login/cambio-clave.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroDosComponent } from './registro/registro-dos.component';
import { RegistroTresComponent } from './registro/registro-tres.component';
import { SearchComponent } from './search/search.component';

// routing
import { APP_ROUTES } from './app.routing';

// Guards
import {AdminGuard} from './shared/guards/admin.guard';
import {LoginGuardGuard} from './shared/guards/login-guard.guard';
import {VerificaTokenGuard} from './shared/guards/verifica-token.guard';

// Sevices
import { SolicitudService } from './shared/services/solicitud.service';
import { SidebarService } from './shared/services/sidebar.service';
import { UsuarioService } from './shared/services/usuario.service';
import { SedeService } from './shared/services/sede.service';
import { SubirArchivoService } from './shared/services/subir-archivo.service';
import { ProgramaService } from './shared/services/programa.service';
import { FacultadService } from './shared/services/facultad.service';
import { ProyectoService } from './shared/services/proyecto.service';
import { ArticuloService } from './shared/services/articulo.service';
import { AnteProyectoService } from './shared/services/anteproyecto.service';
import { ModalUploadService } from './components/modal-upload/modal-upload.service';
import { ApiService } from './shared/services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OlvidoClaveComponent,
    CambioClaveComponent,
    RegistroComponent,
    RegistroDosComponent,
    RegistroTresComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NotificationsModule,
    SettingsModule,
    PagesModule,
  ],
  entryComponents: [],
  providers: [  
    SolicitudService,
    SidebarService,
    UsuarioService,
    SedeService,
    SubirArchivoService,
    ProgramaService,
    FacultadService,
    ProyectoService,
    ArticuloService,
    AnteProyectoService,
    ModalUploadService,
    ApiService,
    AdminGuard,
    LoginGuardGuard,
    VerificaTokenGuard,    
  ],
  bootstrap: [AppComponent],


})
export class AppModule { }
