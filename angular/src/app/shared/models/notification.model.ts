/*
* Proyecto: BPUS
* Componente: notificacion.model.ts
* Desarrollador: Cristian Julián Andrade Murillo
* Descripción: modelo de la notificación con los atributos
* Última modificación: 06/08/2019
*/

export class Notification {

    _id:                    any;
    destinatario_id:        any;
    nombres_destinatario:   any;
    apellidos_destinatario: any;
    codigo_estudiantil:     any;
    email_destinatario:     any;
    usuario_remitente_id:   any;
    usuario_remitente:      any;
    asunto:                 any;
    mensaje:                any;
    tipo_notificacio:       any;
    estado_notificacion:    any;
    nivel_notificacion:     any;
    destinatario:           any;
    fecha_creado:           any;
    fecha_programado:       any;
    fecha_ejecutado:        any;
        
}
