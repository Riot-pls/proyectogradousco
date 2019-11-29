import { RegistroComponent } from './registro/registro.component';
import { RegistroDosComponent } from './registro/registro-dos.component';
import { RegistroTresComponent } from './registro/registro-tres.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CambioClaveComponent } from './login/cambio-clave.component';
import { OlvidoClaveComponent } from './login/olvido-clave.component';
import { NopagefoundComponent } from './shared/components/nopagefound/nopagefound.component';
import { SearchComponent } from './search/search.component';
import { LoginGuardGuard } from './shared/guards/login-guard.guard';

const auth = 'Autorización';
const Notification = 'Couchdb';
const Pages = 'Pages';
const Audit = 'Auditoria';
const Reporter = 'Reporteador';
const Administration = 'Administración';
const Test = 'Test';
const Company = 'Empresas';
const Teacher = 'Profesores';
const Student = 'Estidiantes'; 



const appRoutes: Routes = [ // Se crea el objeto de tipo Routes,
  /*
  {
    path: '',
    component: PagesComponent,
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: 'administration',
    loadChildren: './modules/administration/administration.module#AdministrationModule',
    //canActivate: [AuthGuard],
    data: {
      icon: 'screen',
      text: 'Administración',
      section: Administration,
      display: true,
      //isLogged: false, //si no está logeado, no ingresa
      //profiles: ['administrador', 'developer','AuxAdministrativo']
    },
  },*/
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'change-password',
    component: CambioClaveComponent
  },
  {
    path: 'forget-password',
    component: OlvidoClaveComponent
  },
  {
    path: 'singup',
    component: RegistroComponent
  },
  {
    path: 'singup-two',
    component: RegistroDosComponent
  },
  {
    path: 'singup-three',
    component: RegistroTresComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  // Temporalmente estan estas rutas aqui, para mostrarlo en factoria.



  /*
  {
    path: '', 
    component: PagesComponent, 
    canActivate: [LoginGuardGuard], // Carga de forma dinamica. Un modulo independiente.
    loadChildren: './pages/pages.module#PagesModule'  // loadChildren = primera parte es el path al modulo que quiero cargar y la segunda es el nombre del modulo.
  }, 
 */

  {
    path: '**',
    component: NopagefoundComponent
  }, // Los ** es un comodin para cualquier ruta invalida.
];
// Se modulan las rutas para ser importadas en el module principal.
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
