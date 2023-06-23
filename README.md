# Tienda Tecno&HomeOffice
Creado con [Create React App](https://github.com/facebook/create-react-app).
[![N|Solid](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Nhtli5aSkLo8igB8oRJM49A8XBx8f15gENCCcuvf80kuqyUOrZ8giQgy4GZ7Ix_sb6c&usqp=CAU)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Proyecto Final del curso React JS CoderHouse
Tienda Tecno&HomeOffice es una plataforma Ecommerce desarrollada para atender las necesidades de productos requeridos por trabajadores en modalidad HomeOffice como personal IT o estudiantes que requieran artículos tecnológicos y el mobiliario necesario para desarrollar sus tareas diarias desde el hogar de forma óptima, cuidando la postura de trabajo y la comodidad que son requeridos. 

## Tecnologías
- Frontend: React JS https://es.react.dev
- Backend: Firebase/Firestore https://firebase.google.com

### Librerías para estilos, componentes y templates
- Bootstrap https://getbootstrap.com
- React Bootstrap https://react-bootstrap.github.io
- MUI Material UI https://mui.com/material-ui/getting-started/overview/
- SweetAlert https://sweetalert.js.org
- Emotion/react https://emotion.sh/docs/introduction#react
- Emotion/styled https://emotion.sh/docs/styled#styling-elements-and-components

### Routing
- React Router https://reactrouter.com/en/main

### Features
Las librerías y componentes empleados en el desarrollo de la plataforma permitieron reducir el uso de hojas de estilo y construir interfaces que brindan al usuario una visualización atractiva e información útil. La plataforma brinda un uso fácil e intuitivo para buscar productos y gestionar compras.

### `Uso del Sitio:` 
El usuario puede consultar productos por las categorías: Notebook, Tablet y HomeOffice.
Puede acceder al detalle de un producto, seleccionar una cantidad de items y agregarlo en el carrito. Dentro del carrito es posible modificar la cantidad de cada item, eliminarlo o vaciar el carrito. El carrito informa el subtotal por cada item (producto y cantidad) y el total de la compra. Al clickear en `CONTINUAR COMPRA` se presenta un fomulario con datos de Envío (paso 1) donde `los únicos datos obligatorios para avanzar son: Nombre, Email y Teléfono`; el resto de los campos son solo demostrativos y no obligatorios, al igual que los campos del Pago (paso 2). Finalmente en el Ticket (paso 3) se visualiza la lista de items con subtotales, el total de la compra y otros datos demostrativos. Al clickear en `CONFIRMAR COMPRA` se presenta una pantalla de confirmación exitosa de la compra informando el id de la orden. 

### Instalación y Ejecución
```sh
git clone https://github.com/EstebanRaffo/TiendaHomeOfficeTecno.git
cd TiendaHomeOfficeTecno
npm install
npm start
```