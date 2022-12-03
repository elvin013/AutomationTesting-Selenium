# Automation Testing With Selenium
Prueba automatizada desarrollada en node.js con selenium web driver, en el que se verifica el cumplimiento de una serie de historia de usuarios automaticamente, se toman una serie de screenshots y se hace reporte de los mismos. 

Puedes encontrar las historias de usuario al final de este readme o en el apartado de Issues presionando el siguiente enlace: [Historias de usuario](https://github.com/elvin013/AutomationTesting-Selenium/issues)
<br><br>
## Technologies 

- Frontend
	- html
  - css
    - Bootstrap
  - js


- Backend
	- Node js
  - Express
  - chromedriver
  - geckodriver
  - selenium-webdriver

<br><br>
## What do you need to run this project ?

- Node js - v16.13.2 onwards

<br><br>
## Installation

- Download the project or clone it
   - download [CLICK AQUI](https://github.com/elvin013/AutomationTesting-Selenium/archive/refs/heads/main.zip)
   - clone [CLICK AQUI](https://github.com/elvin013/AutomationTesting-Selenium.git)

- You need to open a console and go to the path where the project is located.
```js
 //C:\Users\HP\Desktop\AutomationTesting-Selenium
>  - take this path whit example
```

- Now run this command for install all packages
```cmd
npm install 
```

- When all packages are installed, you can run the project using the this command 
```cmd
npm test
```
<br><br>
## Developer
- Elvin Pouriet -> [Github](https://github.com/elvin013) 

# Historias de Usuario

# Historia 1 🚀
## Yo como usuario quiero poder loguearme en la página con mis credenciales o con mi cuenta de Google

### Criterios de Aceptación: 
- Al momento de ingresar un email y presionar enter, que se cambie al campo del password. 
- Al momento de ingresar mi password ocultar los caracteres automáticamente y enviar el formulario al presionar enter.
-  Si los datos son incorrectos mostrarme un mensaje bien descriptivo de lo que pasa. 

### Criterios de Rechazo:
- Poder enviar el formulario sin que ambos campos sin haberlos llenado previamente.
-  Poder ingresar un email mal estructurado en el campo correspondiente Que el usuario pueda ver lo que digita en el campo del password.

# Historia 2 🚀
## A mi como usuario me gustaria poder acceder a  los foros sin la necesidad de loguarme

### Criterios de Aceptación:
- Poder entrar a la sección de los foros desde el menú principal sin estar logueado
- Una vez en la sección de foros poder filtrar cualquier articulo por su titulo
- Poder consumir el articulo completo y tener acceso al perfil de la persona que lo publicó
### Criterios de Rechazo:
- Que me pida loguearme para poder entrar a los foros
- Poder enviar el formulario de filtro de los foros vacio
- No poder ver quien publicó dicho articulo

# Historia 3 🚀
## Yo como usuario quisiera poder acceder a la documentación oficial de la pagina sin estar loguado

### Criterios de Aceptación:
- Poder consumir la documentación sin estar logueado
- Poder comentar y pedir ayuda de errores desde la documentación
- Poder filtrar por segmento o lenguaje la información contenida en la documentación
### Criterios de Rechazo:
- Que me pida loguearme para poder consumir la documentación
- Poder enviar el formulario para filtar la informacion vacío
- No poder reportar errores desde la documentación

# Historia 4 🚀
## Como usuario me gustaría poder cambiar el tema de la aplicación de light mode a dark mode o viceversa en cualquier momento

### Criterios de Aceptación:
- Tener un icono muy intuitivo para cambiar el tema de la aplicación
- El icono debe cambiar dependiendo del tema que esté aplicado, ejemplo: (ligth --> sol) | (dark --> luna)
### Criterios de Rechazo:
- Que solo cambie de color el contenido dentro del layout de la pagina
- Que el icono para cambiar tema no sea intuitivo
- Que el icono para cambiar el tema no sea clickable

# Historia 5 🚀
## A mí como usuario me encantaría poder regístrame en la página rápidamente a partir de mis datos personales

### Criterios de Aceptación:
- Al momento de colocar el Email este avisara si el correo está disponible para utilizar o no.
- Al momento de que a verifico que el correo está disponible a utilizar este mandara al siguiente campo
- Que al registrarme me redirija a mi dashboard
### Criterios de Rechazo:
- Al momento de la verificación siempre lanzara que el correo está disponible, aunque no lo esté.
- Que no inicie sesión automáticamente al registrase
- Poder ingresar un email mal estructurado en el campo correspondiente
- Que el usuario pueda ver lo que digita en el campo del password
