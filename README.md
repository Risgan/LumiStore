# LumiStore

## DataBase Firebase
   Se usa FireBase con FireStore

   Para iniciar se debe ingresar a la siguiente pagina
   
   1. url: https://firebase.google.com/
   
   2. damos click en **ir a consola** o **Go to console**

   ![alt text](./Images/image-1.png)

   3. Damos click en **Comenzar con un proyecto de Firebase**

   ![alt text](./Images/image-2.png)

   4. Añadimos un nombre a la base de datos **LumiDataBase**

   ![alt text](./Images/image-3.png)

   5. Damos en **continuar**

   ![alt text](./Images/image-4.png)

   6. Seleccionamos una cuenta **Default Account for Firebase** y damos click en **Crear Proyeto**

   ![alt text](./Images/image-5.png)

   7. Una vez en el Dashboard vamos a añadir **Firestore**, en el menu de la derecha vamos a **Compilación** y buscamos **Firestore Database**

   ![alt text](./Images/image-6.png)

   ![alt text](./Images/image-7.png)

   8. Se debe ver una ventana donde podemos ver el boton **Crear base de datos** en la mitad de la pantalla, damos **click** en este boton 

   ![alt text](./Images/image-8.png)

   9. Damos click en **Siguiente**, seleccionamos **Comenzar en modo de prueba** y damos click en **Crear**

   ![alt text](./Images/image-9.png)

   ![alt text](./Images/image-10.png)

   10. Veremos ya la pantalla con la base de datos creada

   ![alt text](./Images/image-11.png)

   11. Damos click en **Iniciar colección**, añadiremos **Usuarios**, damos click en el boton **Id automatico** y añadimos los siguientes datos, esto para tener el usuario administrador del sistema que es indispensable tenerlo para poder acceder a las funciones, damos click en **Guardar**.

   ![alt text](./Images/image-12.png)

   ![alt text](./Images/image-13.png)

   ![alt text](./Images/image-14.png)

   ```C#
   nombreUsuario = 'admin'
   correo = 'admin@lumi.com'
   contraseña = '$2b$10$wDB7UurWphiPQ58hc.3SG.klXZaZlPvPSh.Thlk2zwTZuR8mUt9Ie' // contraseña='password'
   avatar = ''
   rol = 'admin'
   ```
   ![alt text](./Images/image-15.png)

   12. vamos a la pestaña **Reglas**, y vamos a cambiar la fecha **timestamp.date** y damos click en **Publicar**, esto para que permita realizar peticiones hasta la fecha puesta

   ![alt text](./Images/image-16.png)

   ![alt text](./Images/image-17.png)

   ![alt text](./Images/image-18.png)

   13. Vamos a ** configuracion**, y damos click en **Configuracion del proyecto**

   ![alt text](./Images/image-33.png)

   ![alt text](./Images/image-34.png)

   ![alt text](./Images/image-35.png)

   ![alt text](./Images/image-36.png)

   ![alt text](./Images/image-37.png)

   ```C#
   apiKey: "AIzaSyDKWyEqTkYaFsj20mXrFg8hhtytBiiKgvo",
   authDomain: "lumidatabase-9ee93.firebaseapp.com",
   projectId: "lumidatabase-9ee93",
   storageBucket: "lumidatabase-9ee93.appspot.com",
   messagingSenderId: "462941060181",
   appId: "1:462941060181:web:1a35570f869f2a709a68dc",
   measurementId: "G-N2NN0PCR7X"
   ```

## Backend

### Requisitos
   - Tener instalado node en la ultima version o version 20.10.0 como minimo, el cual se puede descargar de esta url: https://nodejs.org/en/download/package-manager

   - Desde powershell o cmd usando el comando **node -v** podemos saber si tenemos el node instalado en el sistema

![alt text](./Images/image.png)

### Descarga de Repositorio

1. Dentro de la pantalla principal de GitHub vamos a encontrar todos los proyectos, vamos a la pestaña de **Repositories** buscamos **LumiStore** y damos **Click**

![alt text](./Images/image-19.png)

![alt text](./Images/image-20.png)

![alt text](./Images/image-21.png)

2. una vez adentro vamos a validar que estemos en la rama **Main** y damos click en el boton **Code**

![alt text](./Images/image-22.png)

3. En la lista que se abre vamos a dar click en **Download ZIP**

![alt text](./Images/image-23.png)

![alt text](./Images/image-24.png)

4. Descomprimimos el contenido en una carpeta donde vamos a tener el proyecto almacenado y con el programa **Visual Studio Code** abriremos la carpeta **LumiBackend**.

![alt text](./Images/image-25.png)

![alt text](./Images/image-26.png)

5. Una vez abierto veremos los siguientes archivos:

![alt text](./Images/image-27.png)



### Instalación paquetes necesarios. 

Estos paquetes son los que se utilizaron para la configuracion del proyecto *(Estos se ejecutan en la terminal de visual studio code)*

0. Estos comandos no se deben ejecutar, se ponen en este apartado para que se sepa que se instalo para el proyecto.
```C#

/*------- No se deben ejecutar, solo para terminos de documentación --------- */

// Crear proyecto
npm init -y

// Instalar paquete de express
npm install express 

// Instalar paquete de cors (politicas de seguridad)
npm install cors

// Instalar paquete de firebase
npm install firebase-admin

// Instalar paquete de swagger
npm install swagger-ui-express

// Instalar generador token JWT
npm install jsonwebtoken

// Instalar para leer archivos .env
npm install dotenv

// Instalar para encriptar claves
npm install bcrypt



```

1. Solo ejecutamos el siguiente comando puesto que ya existe un archivo llamado **package.json** el que tiene todas las dependencias necesarias para la ejecución del proyecto.

```C#
/* ------ Este si se debe ejecutar para que instale todos los paquetes necesarios ------ */

// Instalar paquete node_modules cuando se va a usar por primera vez
npm install

```
2. una vez ejecutado se van a instalar todos los paquetes que requiere el proyecto.

![alt text](./Images/image-28.png)

![alt text](./Images/image-29.png)

3. debe aparecer en nuestro arbol de proyecto una carpeta llamada **node_modules**

![alt text](./Images/image-30.png)


### Iniciar el Proyecto

1. Ejecutamos uno de los siguientes codigos para que el proyecto corra y podamos acceder a el.

```C#
npm run start // Inica el proyecto en modo producción
npm run dev // Inica el proyecto en modo desarrollo
```

2. Una vez inice veremos este mensaje en la consola, lo cual nos indica que el proyecto esta escuchando por el puerto **3000**

![alt text](./Images/image-31.png)

3. Para validar que este funcionando correctamente, ingresamos a nuestro navegador y ponemos la url **http://localhost:3000/api-docs** donde veremos una interfaz de Swagger con las peticiones disponibles del proyecto.

![alt text](./Images/image-32.png)


4. url del proyecto desplegado en **Railway**

	[![Vista previa de la API](https://img.shields.io/badge/API%20Documentation-lumistore--production.up.railway.app-blue)](https://lumistore-production.up.railway.app/api-docs/)


## Fontend

**Se realizara en Angular 18.**

Descarga Node.js:

Ve al sitio oficial de Node.js: https://nodejs.org.

Instala desde la consola del equipo

```C#

npm install -g @angular

```


**Estos comandos son para documentacion solo de conocimiento no se deben ejecutar**

Se usan los siguientes comandos para crear el programa del front


```javascript
ng new

Escribimos el nombre {{LumiFrontend}}

seleccionamos {{SCSS}}

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? se pone como Y

```
**Se debe ejecuta solo una vez cuando se va a iniciar el programa por primera vez**

```javascript
   npm install
```


** Para iniciar el programa de debe ejecugar **

```javascript
   ng serve -o
```

Este comando les abria el navegador el cual se vera de la siguiente manera.
![alt text](./Images/image-38.png)

![alt text](./Images/image-39.png)

Una vez logueado se va a ver la siguiente pagina

![alt text](./Images/image-40.png)

en ella se tiene el home de la tienda

Se añaden los productos y e ven de la siguiente manera encima del carrito

![alt text](./Images/image-41.png)

si se da clic al carrito se va a la zona de compra

![alt text](./Images/image-42.png)

En el menu de la izquierda aparecen las carpetas y archivos de la logica de la tienda.

![alt text](./Images/image-43.png)
s
