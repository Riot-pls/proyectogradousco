/*
* Proyecto: BPUS
* Componente: notificacion.model.ts
* Desarrollador: Cristian Julián Andrade Murillo
* Descripción: modelo de la notificación con los atributos
* Última modificación: 06/08/2019
*/

export class Notificacion {

    _id:                    string;
    destinatario_id:        string;
    codigo_estudiantil:     string;
    email_destinatario:     string;
    nombre_destinatario:    string;
    usuario_remitente_id:   string;
    usuario_remitente:      string;
    asunto:                 string;
    mensaje:                string;
    tipo_notificacio:       string;
    estado_notificacion:    string;
    nivel_notificacion:     string;
    destinatario:           string;
    fecha_creado:           string;
    fecha_programado:       string;
    fecha_ejecutado:        string;
        
}
