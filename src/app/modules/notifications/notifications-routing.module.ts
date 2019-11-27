import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { UpdateNotificationComponent } from '../notifications/update-notification/update-notification.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { DeleteNotificationComponent } from './delete-notification/delete-notification.component';


const routes: Routes = [
  {
    path: 'notification',
    component: NotificationsComponent,
    //canActivate: [AuthGuard],
    data: {
      'title': 'Notificaciones',
      //profiles: ['administrador'],
    }
  },
  {
    path: 'create-notification',
    component: CreateNotificationComponent,
    //canActivate: [AuthGuard],
    data: {
      'title': 'Actualizar Notificacion',
      //profiles: ['administrador'],
    }
  },
  {
    path: 'update-notification',
    component: UpdateNotificationComponent,
    //canActivate: [AuthGuard],
    data: {
      'title': 'Actualizar Notificacion',
      //profiles: ['administrador'],
    }
  },
  {
    path: 'delete-notification',
    component: DeleteNotificationComponent,
    //canActivate: [AuthGuard],
    data: {
      'title': 'Eliminar Notificaciones',
      //profiles: ['administrador'],
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
