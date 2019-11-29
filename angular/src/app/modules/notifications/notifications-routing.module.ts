import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateNotificationComponent } from '../notifications/update-notification/update-notification.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { DeleteNotificationComponent } from './delete-notification/delete-notification.component';
import { ListUserNotificationComponent } from './list-user-notification/list-user-notification.component';
import { ListAdminNotificationComponent } from './list-admin-notification/list-admin-notification.component';


const routes: Routes = [
  {
    path: 'notification',
    component: ListUserNotificationComponent,
    //canActivate: [AuthGuard],
    data: {
      'title': 'Notificaciones',
      //profiles: ['administrador'],
    }
  },
  {
    path: 'notification-tutors',
    component: ListAdminNotificationComponent,
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
