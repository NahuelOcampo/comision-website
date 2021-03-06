# Comisión de homanje G.A.D.A. 101 Bateria "B"

# Stack

El proyecto está armado con NodeJS.

Se compone por:

- Armado web en servidor (SSR)
- REST API

**Keywords**: NodeJS, EJS, API, MongoDB, Heroku

## Levantar el proyecto

Para levantar el proyecto local:

1.  Descarga del repo
2.  Instalar módulos en el **/website** y en la **/api**

    _npm i_

Para que funcione el sitio es necesario primero levantar el servicio en **/api**.

#### Levantar API

1.  Levantar una instancia local de MongoDB que exponga el puerto 27017.
2.  Crear una base llamada **comision** en MongoDB
3.  Levantar el servicio con el comando `node index.js` dentro de **api/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API

#### Levantar Website

Una vez corriendo el servicio, levantar el proyecto **website** con los comandos `node app.js` o `nodemon app.js` en la carpeta **/website**

#### Cliente

El origen es una empresa en desarrollo que vende alimentos naturales.

#### Pedido

El cliente está interesado en armar una web en donde se muestre la historia de la comisión en Malvinas y que las escuelas puedan contactarse para asi dar charlas, y no dejar que la causa Malvinas se olvide.
