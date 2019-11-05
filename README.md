     
##**BPUS**

### Repositorio: BPUS USCO

### Configuración:
| Requisitos   			| Versión    			        |
| :------------- 		| :--------- 			        |
| Sistema Operativo    	| `Windows	>= Server 2008`     | 
| Servidor Web      	| `Apache >= 2.4`		        | 
| PHP  					| `PHP >= 7.1.3`				|
|						| `OpenSSL PHP Extension`		|
|						| `SQLSrv PHP Extension`		|
|						| `SQLSrv PDO PHP Extension`	|
|						| `Mbstring PHP Extension`		|
|						| `Tokenizer PHP Extension`		|
|						| `XML PHP Extension`			|
|						| `Ctype PHP Extension`			|
|						| `JSON PHP Extension`   		| 
| Base de datos      	| `SQL Server >= 2012`		    | 
| Node JS               | `NodeJS >= 8.10.0`            |
| Laravel               | `Laravel = 5.6`               |
| Angular               | `Angular >= 4`                |
| Angular Cli           |                               |

.

### Archivos de configuración / conexión:

1. `resources/angular/environments/enviorenment.ts` - Desarrollo
2. `resources/angular/environments/enviorenment.prod.ts` - Producción


Instalación
-----------
__Esta guia de instalación presupone que usted tiene istaladas y configuradas las herramientas para el entorno de desarrollo__.

* __Asegurese de tener instalados los requisitos de configuración.__

* Clonar repositorio.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
git clone git@github.com:BPUS/proyectogradousco.git
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Posicionarse en la carpeta

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
cd BPUS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Posicionarse en la rama develop

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
git checkout develop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Instalar plugins javascript

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Correr el servidor de la applicación angular

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ng serve --open
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
