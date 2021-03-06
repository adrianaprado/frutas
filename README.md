# Frutas

Este proyecto se ha generado con [Angular CLI](https://github.com/angular/angular-cli) versión 7.1.0.

## Servidor de desarrollo

Para ejecutar la aplicación en modo desarrollo `ng serve`. Copia la url `http://localhost:4200/` y la aplicación te redirijirá a la página principal. También, si realizas algún cambio en el código te recargará la página automáticamente.

## Generar nuevos componentes

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Montar proyecto

Ejecuta `ng build` para montar el proyecto. El archivo generado tras el build se guardará en el directorio `dist/`. Usa el flag `--prod` para hacer un build en producción.

## Ejecutar tests

Ejecuta `ng test` para realizar los tests vía [Karma](https://karma-runner.github.io).

## Ejecutando tests end-to-end

Ejecuta `ng e2e` para realizar tests end-to-end vía [Protractor](http://www.protractortest.org/).

## Más información

Para más información sobre Angular CLI ejecuta `ng help` o diríjete a [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

----------

## Funciones realizadas
El proyecto realizado en Angular llamado frutas, es una aplicación desarrollada para aplicar todos los conocimientos aprendidos acerca de Angular.

Las funcionalidades que se han implementado en este proyecto son:

- Componentes
- Modelos
- Guards
- Pipes/filtros
- Servicios o providers

Además, se ha utilizado [json-server](https://github.com/typicode/json-server) para simular la interacción con una Base de datos para las llamadas del servicio.

---

## Descripción del proyecto

A grandes rasgos, esta aplicación es una frutería, donde se gestionan las frutas a vender.

Lo primero que un usuario ve nada más entrar es una lista de frutas con un comparador para ver las diferencias de precios y kilocalorías que tiene cada fruta.

![Comparador](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/Comparador.PNG)

También hay una pestaña donde se pueden ver todas las frutas en cartas con toda la información de éstas.

![Cards-Frutas](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/CardsFrutas.PNG)

En esta vista, pueden filtrarse las frutas para mostrar todas las existentes o sólo las que estén en oferta.

![Filtro-Oferta](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/Filtro.PNG)

También se puede realizar una búsqueda de las frutas por su nombre.

![Busqueda-frutas](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/Buscador.PNG)

Para poder realizar altas, bajas y modificaciones de las frutas, es necesario estar con sesión iniciada. Si no se está, es imposible acceder a esas vistas de gestión. 

![Login](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/Login.PNG)

La parte privada tiene dos vistas:
1. Lista privada de las frutas con acceso a cada uno de sus detalles para modificarlas y un icono para borrar cada fruta.

![Lista-privada](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/ListaPrivadaGestion.PNG)

2. Un formulario que actúa como creación de una nueva fruta o como modificación de valores de una fruta existente.

![Formulario-fruta](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/Formulario.PNG)

![Formulario-fruta-modificar](https://github.com/adrianaprado/frutas/blob/master/src/assets/imgs/Formulario-modificar.PNG)

## Pasos para ejecutar la app
Lo primero que se tiene que hacer es clonar el proyecto a una carpeta de nuestro ordenador. Abrir una ventana de comandos en la carpeta donde se va a clonar el proyecto y ejecutar `git clone https://github.com/adrianaprado/frutas.git`

Al haber usado `json-server` es necesario tener la dependencia de ésta. Para instalarlo ir al siguiente [enlace](https://github.com/typicode/json-server) que lleva a la página de github de `json-server`.

Antes de ejecutar el proyecto es necesario abrir una ventana de comandos y en la carpeta del proyecto ejecutar `json-server --watch db.json` para poder acceder a todos los datos de la aplicación.

---

En caso de querer iniciar sesión en la aplicación, las credenciales para poder acceder son:

- **Usuario:** admin
- **Contraseña:** admin
