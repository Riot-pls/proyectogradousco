import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Programa } from 'src/app/shared/models/programa.model';

@Injectable()
export class ProgramaService {

  programa: Programa;
  token: string;
  menu: any[] = [];
  totalProgramas:number=0;

  siteUrl = environment.api_url;

  constructor(public http: HttpClient,
              public router: Router) {}

  crearPrograma(programa:Programa){

    let url= this.siteUrl+'/programaUniversitario';
   
    return this.http.post(url, programa)
    .map((resp:any)=>{
      swal.fire('Programa creado',programa.nombre,'success');
      return resp.programa;

    }).catch(err =>{
      swal.fire(err.error.mensaje,err.error.errors.message,'error');
      return Observable.throw(err);

    });

  }


  actualizarPrograma(programa:Programa){
   // console.log(usuario._id);
    let url = this.siteUrl+'/programaUniversitario/'+programa._id+'?token='+this.token;
    
   // console.log(url);

    return this.http.put(url,programa)
                    .map((resp:any)=>{
                      /*
                      if (programa._id===this.programa._id) {
                        let usuarioDB:Usuario=resp.usuario;
                      }
                      */
                      swal.fire('Programa actualizado', programa.nombre, 'success');

                      return true;
                    }).catch(err =>{
                      //console.log(err.error.mensaje);
                      swal.fire('Error al actualizar programa', programa.nombre, 'error');
                      return Observable.throw(err);
                
                    });

  }
  cargarProgramas(desde:number=0){


    let url=this.siteUrl+'/programaUniversitario?desde='+desde;
    return this.http.get(url) .map((resp:any) =>{

      this.totalProgramas=resp.total;
      return resp.programa;


    });
  }

  buscarProgramas(termino:string){

    let url=this.siteUrl+'/busqueda/coleccion/programaUniversitario/'+termino;
    return this.http.get(url).map((resp:any)=>resp.programa);

  }


  borrarProgramas(id:string){

    let url=this.siteUrl+'/programaUniversitario/'+id+'?token='+this.token;
    return this.http.delete(url)
            .map(resp=>{
            
              swal.fire('Programa borrado','El programa ha sido eliminado correctamente','success');
              return true;
        });

  }


}
