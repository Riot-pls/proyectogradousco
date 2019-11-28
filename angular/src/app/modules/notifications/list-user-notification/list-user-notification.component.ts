import { ApiService } from './../../../shared/services/api.service';
import { Notification } from './../../../shared/models/notification.model';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-user-notification',
  templateUrl: './list-user-notification.component.html',
  styleUrls: ['./list-user-notification.component.css']
})
export class ListUserNotificationComponent implements OnInit {

  notifications: [];
  detailNotification: Notification;
  item: any;

  constructor(private api: ApiService) {

  }

  ngOnInit() {

    //this.getNotificationsUser();
    this.getNotifications();

  }

  // get details notification
  getDetailNotification(item, notification) {
    this.detailNotification = notification;
    this.item = item;
    console.log(this.detailNotification);
  }

  /**
   * 
   */
  getNotificationsUser() {
    this.api.get('notification/notifications-user').subscribe(
      resp => {
        this.notifications = resp;
      });
  }

  /**
   * 
   */
  getNotifications() {
    this.api.get('notification/notifications').subscribe(
      resp => {
        this.notifications = resp;
      });
  }

}
