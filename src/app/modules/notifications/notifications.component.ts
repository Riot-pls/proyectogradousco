import { Component} from '@angular/core';
import Swal from 'sweetalert2';
import { NotificacionService } from 'src/app/services/service.index';
import { Notificacion } from 'src/app/models/notificacion.model';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})

export class NotificationsComponent {

  notifications=[];
  detailsNotification=[];

  notificaciones: Notificacion[]=[];
  cargando:boolean=true;
  notifiVacia:boolean=false;
  constructor(  public _notificacionService: NotificacionService) {

   }

   ngOnInit() {
    
    this.notifications = [
      {asunto: 'Email fecha asignada', fecha_ejecutado: '2014-10-10', message: 'Este es uin mensaje para lapresentación a clases'},
      {asunto: 'Presentacion pasantias', fecha_ejecutado: '2014-10-10', message: 'hola clase'},
      {asunto: 'Ponencia proyecto', fecha_ejecutado: '2014-10-10', message: 'buenas tardes mensaje 3'},
    ];

    this.getNotification();
    
  }

  // get details notification
  getDetailNotification(notification) {
    this.detailsNotification = notification;
  }


  getNotification(){
    this.cargando=true;
    this._notificacionService.cargarNotificaciones(0)
    .subscribe( notificaciones => this.notificaciones=notificaciones);  
    this.cargando=false;
  }

  
  aceptarNotificacion(notificacion:Notificacion){
    Swal.fire({
      title: '¿Está seguro que desea aprobar el proyecto?',
      type: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, Aprobarlo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    })
    .then(borrar => {
      
    if (borrar.value) {
   
      this._notificacionService.borrarNotificaciones(notificacion._id).subscribe(resp=>{
          console.log(resp);
          this.cargarNotificaciones();});
    }

    });
  }


  rechazarNotificacion(notificacion:Notificacion){

    Swal.fire({
      title: '¿Está seguro que desea rechazar el proyecto?',
      type: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, Rechazar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    })
    .then(borrar => {
      
    if (borrar.value) {
   

      this._notificacionService.borrarNotificaciones(notificacion._id).subscribe(resp=>{           
        console.log(resp);
        this.cargarNotificaciones();
      });

    } 

    });   
  }


  
}


