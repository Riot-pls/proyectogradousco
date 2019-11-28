import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NotificationService } from './../../../shared/services/notification.service';
import { Notificacion } from 'src/app/shared/models/notificacion.model';

@Component({
  selector: 'app-list-user-notification',
  templateUrl: './list-user-notification.component.html',
  styleUrls: ['./list-user-notification.component.css']
})
export class ListUserNotificationComponent implements OnInit {

  notifications=[];
  detailsNotification: Notificacion;

  notificaciones: Notificacion[]=[];
  cargando:boolean=true;
  notifiVacia:boolean=false;
  constructor(public _notificacionService: NotificationService) {

   }

   ngOnInit() {
    
    this.notifications = [
      {asunto: 'Email fecha asignada', fecha_ejecutado: '2014-10-10', message: 'Este es uin mensaje para lapresentación a clases'},
      {asunto: 'Presentacion pasantias', fecha_ejecutado: '2014-10-10', message: 'hola clase'},
      {asunto: 'Ponencia proyecto', fecha_ejecutado: '2014-10-10', message: 'buenas tardes mensaje 3'},
    ];
    
  }

  // get details notification
  getDetailNotification(notification) {
    this.detailsNotification = notification;
  }

}
