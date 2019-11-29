     
##**BPUS**

### Repositorio: BPUS USCO

### Configuración:
| Requisitos   			| Versión    			        |
| :------------- 		| :--------- 			        |
| Sistema Operativo    	|      | 
| Servidor Web      	| `NodeJS >= `		        | 
| Node JS 				|  `NodeJS >= `				|
| Base de datos      	| `NOSQL MongoDB >= `		    | 
| Angular               | `Angular >= `                |
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
