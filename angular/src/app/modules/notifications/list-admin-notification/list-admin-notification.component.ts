import { Usuario } from './../../../shared/models/usuario.model';
import { Notification } from './../../../shared/models/notification.model';
import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-admin-notification',
  templateUrl: './list-admin-notification.component.html',
  styleUrls: ['./list-admin-notification.component.css']
})
export class ListAdminNotificationComponent implements OnInit {

  student = [];;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  /**
   * 
   */
  getStudentToFaculta(){
    this.api.get('')
      .subscribe(
        res => {
          this.student = res;
        });

  }

  /**
   * 
   */
  CreateNotification(notification: Notification) {
    this.api.post(''+ notification._id, notification)
      .subscribe(
        res => {

        });
  }

  /**
   * 
   */
  EditNotification() {
    this.api.get('')
      .subscribe(
        res => {

        });
  }

  /**
   * 
   */
  updateNotification(notification: Notification) {
    this.api.put('/' + notification._id, notification)
      .subscribe(
        res => {

        });
  }
  /**
   * 
   */
  deleteNotification(notification: Notification) {
    this.api.put('/' + notification._id, notification)
      .subscribe(
        res => {

        });
  }

}
