## BPUS

Repositorio: BPUS
Configuración:
Requisitos	Versión
Sistema Operativo	Windows >= Server 2008
Servidor Web	Apache >= 2.4
Base de datos	NOSQL MongoDB >= 2012
Node JS	NodeJS >= 8.10.0
Angular	Angular >= 4
Angular Cli	
.

Archivos de configuración / conexión:
resources/angular/environments/enviorenment.ts - Desarrollo
resources/angular/environments/enviorenment.prod.ts - Producción

Instalación
Esta guia de instalación presupone que usted tiene istaladas y configuradas las herramientas para el entorno de desarrollo.

Asegurese de tener instalados los requisitos de configuración.

Clonar repositorio.

git clone 
Posicionarse en la carpeta
cd servline
Posicionarse en la rama develop
git checkout develop
Instalar plugins javascript
npm install

Correr el servidor de la applicación angular
ng serve --open
NOTA: Si su virtual host no es http://http://servicioenlinea.test/ debe reemplazar el valor de api_url en: resources/angular/environments/environment.ts por la url de su virtual host.
