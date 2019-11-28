import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { DeleteNotificationComponent } from './delete-notification/delete-notification.component';
import { DetailNotificationComponent } from './detail-notification/detail-notification.component';
import { ListUserNotificationComponent } from './list-user-notification/list-user-notification.component';
import { ListAdminNotificationComponent } from './list-admin-notification/list-admin-notification.component';


@NgModule({
  declarations: [
    UpdateNotificationComponent,
    CreateNotificationComponent,
    DeleteNotificationComponent,
    DetailNotificationComponent,
    ListUserNotificationComponent,
    ListAdminNotificationComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [],
  exports: []
})
export class NotificationsModule { }
