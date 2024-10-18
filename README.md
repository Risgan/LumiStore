# LumiStore

## DataBase Firebase
   Se usa FireBase con FireStore

   Para iniciar se debe ingresar a la siguiente pagina
   
   1. url: https://firebase.google.com/
   
   2. damos click en **ir a consola** o **Go to console**

   ![alt text](image-1.png)

   3. Damos click en **Comenzar con un proyecto de Firebase**

   ![alt text](image-2.png)

   4. Añadimos un nombre a la base de datos **LumiDataBase**

   ![alt text](image-3.png)

   5. Damos en **continuar**

   ![alt text](image-4.png)

   6. Seleccionamos una cuenta **Default Account for Firebase** y damos click en **Crear Proyeto**

   ![alt text](image-5.png)

   7. Una vez en el Dashboard vamos a añadir **Firestore**, en el menu de la derecha vamos a **Compilación** y buscamos **Firestore Database**

   ![alt text](image-6.png)

   ![alt text](image-7.png)

   8. Se debe ver una ventana donde podemos ver el boton **Crear base de datos** en la mitad de la pantalla, damos **click** en este boton 

   ![alt text](image-8.png)

   9. Damos click en **Siguiente**, seleccionamos **Comenzar en modo de prueba** y damos click en **Crear**

   ![alt text](image-9.png)

   ![alt text](image-10.png)

   10. Veremos ya la pantalla con la base de datos creada

   ![alt text](image-11.png)

   11. Damos click en **Iniciar colección**, añadiremos **Usuarios**, damos click en el boton **Id automatico** y añadimos los siguientes datos, esto para tener el usuario administrador del sistema que es indispensable tenerlo para poder acceder a las funciones, damos click en **Guardar**.

   ![alt text](image-12.png)

   ![alt text](image-13.png)

   ![alt text](image-14.png)

   ```C#
   nombreUsuario = 'admin'
   correo = 'admin@lumi.com'
   contraseña = '$2b$10$wDB7UurWphiPQ58hc.3SG.klXZaZlPvPSh.Thlk2zwTZuR8mUt9Ie' // contraseña='password'
   avatar = ''
   rol = 'admin'
   ```
   ![alt text](image-15.png)

   12. vamos a la pestaña **Reglas**, y vamos a cambiar la fecha **timestamp.date** y damos click en **Publicar**, esto para que permita realizar peticiones hasta la fecha puesta

   ![alt text](image-16.png)

   ![alt text](image-17.png)

   ![alt text](image-18.png)

## Backend
   Se realiza en Node.JS version 20.`

![alt text](image.png)


Estos paquetes son los que se utilizaron para la configuracion del proyecto

```C#

/*------- No se deben ejecutar solo para terminos de documentación --------- */

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

```C#
/* ------ Este si se debe ejecutar para que instale todos los paquetes necesarios ------ */

// Instalar paquete node_modules cuando se va a usar por primera vez
npm install

```

## Fontend
  Se realizara en Angular 18.
