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

## Sobre el proyecto
El proyecto realizado en Angular llamado frutas, es una aplicación desarrollada para aplicar todos los conocimientos aprendidos acerca de Angular.

A grandes rasgos, esta aplicación es una frutería, donde se gestionan las frutas a vender.

Lo primero que un usuario ve nada más entrar es una lista de frutas con un comparador para ver las diferencias de precios y kilocalorías que tiene cada fruta.

También hay una pestaña donde se pueden ver todas las frutas en cartas con toda la información de éstas.

Para poder realizar altas, bajas y modificaciones de las frutas, es necesario estar con sesión iniciada. Si no se está, es imposible acceder a esas vistas de gestión. 

Las funcionalidades que se han implementado en este proyecto son:

- Componentes
- Modelos
- Guards
- Pipes/filtros
- Servicios o providers

Además, se ha utilizado [json-server](https://github.com/typicode/json-server) para simular la interacción con una Base de datos para las llamadas del servicio.

## Pasos para ejecutar la app
Clonar el proyecto a una carpeta del ordenador
Abrir una ventana de comandos y estando en la carpeta donde se va a clonar el proyecto, ejecutar `git clone https://github.com/adrianaprado/frutas.git`
Comprobar que este el db.json y ejecutarlo con 
`json-server --watch db.json`
