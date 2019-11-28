import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class SubirArchivoService {

  siteUrl = environment.site_url;

  constructor() { }


  subirArcivo(archivo:File,tipo:string,id:string){

    return new Promise(  (resolve,reject) =>{
        let formData=new FormData(); //JavaScript puro.
        let xhr=new XMLHttpRequest();
    
    
        formData.append('imagen',archivo,archivo.name);
    
        xhr.onreadystatechange = function(){
    
          if (xhr.readyState===4) {
            
              if (xhr.status===200) {
                console.log('Imagen subio!!!');
                resolve(JSON.parse(xhr.response));
              }else{

                console.log('Fallo la carga de la imagen!!!');
                resolve(xhr.response);
              }
            
          }
    
    
        };


        let url = this.siteUrl+'/upload/'+tipo+'/'+id;
        
        xhr.open('PUT',url,true);
        xhr.send(formData);

    });


 



  }
}
