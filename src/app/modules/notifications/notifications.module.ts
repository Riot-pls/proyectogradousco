import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { UpdateNotificationComponent } from './update-notification/update-notification.component';
import { CreateNotificationComponent } from './create-notification/create-notification.component';
import { DeleteNotificationComponent } from './delete-notification/delete-notification.component';
import { DetailNotificationComponent } from './detail-notification/detail-notification.component';


@NgModule({
  declarations: [
    NotificationsComponent,
    UpdateNotificationComponent,
    CreateNotificationComponent,
    DeleteNotificationComponent,
    DetailNotificationComponent,
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
