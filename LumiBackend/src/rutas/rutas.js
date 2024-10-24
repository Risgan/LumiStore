const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware'); // Middleware de autenticación
const { autenticar } = require('../controlador/autenticarControlador'); // Controlador de autenticación
const { 
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
} = require('../controlador/usuarioControlador'); // Controlador de usuarios

// Importar el controlador de productos
const { 
  obtenerTodosLosProductos,
  obtenerProductoPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
} = require('../controlador/productoControlador'); // Controlador de productos

const rutas = express.Router();

/**
 * @swagger
 * /api/auth:
 *   post:
 *     tags: [auth]
 *     summary: Autenticar a un usuario y recuperar un token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               correo:
 *                 type: string
 *                 example: admin@lumi.com
 *               contraseña:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         descripcion: Token recuperado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: Bearer Token
 *       401:
 *         descripcion: Credenciales invalidas.
 */
rutas.post('/auth', autenticar); // Ruta para autenticación

// Rutas para el CRUD de usuarios
/**
 * @swagger
 * /api/usuarios:
 *   get:
 *     tags: [usuario]
 *     summary: Recuperar todos los usuarios
 *     responses:
 *       200:
 *         descripcion: Se recuperaron exitosamente todos los usuarios.
 */
rutas.get('/usuarios', authMiddleware, obtenerUsuarios); // Obtener todos los usuarios

/**
 * @swagger
 * /api/usuarios/{id}:
 *   get:
 *     tags: [usuario]
 *     summary: Recuperar un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         descripcion: User ID
 *     responses:
 *       200:
 *         descripcion: Recuperó con éxito el usuario.
 *       404:
 *         descripcion: Usuario no encontrado.
 */
rutas.get('/usuarios/:id', authMiddleware, obtenerUsuarioPorId); // Obtener usuario por ID

/**
 * @swagger
 * /api/usuarios:
 *   post:
 *     tags: [usuario]
 *     summary: Crear un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreUsuario:
 *                 type: string
 *               correo:
 *                 type: string
 *               contraseña:
 *                 type: string
 *     responses:
 *       201:
 *         descripcion: Usuario creado con éxito.
 *       400:
 *         descripcion: Entrada no válida.
 */
rutas.post('/usuarios', authMiddleware, crearUsuario); // Crear un nuevo usuario

/**
 * @swagger
 * /api/usuarios/{id}:
 *   put:
 *     tags: [usuario]
 *     summary: Actualizar un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         descripcion: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombreUsuario:
 *                 type: string
 *               correo:
 *                 type: string
 *               contraseña:
 *                 type: string
 *               avatar:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         descripcion: Usuario actualizado exitosamente.
 *       404:
 *         descripcion: Usuario no encontrado.
 */
rutas.put('/usuarios/:id', authMiddleware, actualizarUsuario); // Actualizar usuario por ID

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     tags: [usuario]
 *     summary: Eliminar un usuario por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         descripcion: ID de usuario
 *     responses:
 *       200:
 *         descripcion: Usuario eliminado exitosamente.
 *       404:
 *         descripcion: Usuario no encontrado.
 */
rutas.delete('/usuarios/:id', authMiddleware, eliminarUsuario); // Eliminar usuario por ID

// Rutas para el CRUD de productos
/**
 * @swagger
 * /api/productos:
 *   get:
 *     tags: [Productos]
 *     summary: Recuperar todos los productos
 *     responses:
 *       200:
 *         descripcion: Se recuperaron exitosamente todos los productos.
 */
rutas.get('/productos', authMiddleware, obtenerTodosLosProductos); // Obtener todos los productos

/**
 * @swagger
 * /api/productos/{id}:
 *   get:
 *     tags: [Productos]
 *     summary: Recuperar un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         descripcion: ID del producto
 *     responses:
 *       200:
 *         descripcion: Se recuperó exitosamente el producto.
 *       404:
 *         descripcion: Producto no encontrado.
 */
rutas.get('/productos/:id', authMiddleware, obtenerProductoPorId); // Obtener producto por ID

/**
 * @swagger
 * /api/productos:
 *   post:
 *     tags: [Productos]
 *     summary: Crear un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               precio:
 *                 type: number
 *               descripcion:
 *                 type: string
 *               imagenes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         descripcion: Producto creado exitosamente.
 *       400:
 *         descripcion: Entrada no válida.
 */
rutas.post('/productos', authMiddleware, crearProducto); // Crear un nuevo producto

/**
 * @swagger
 * /api/productos/{id}:
 *   put:
 *     tags: [Productos]
 *     summary: Actualizar un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         descripcion: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               precio:
 *                 type: number
 *               descripcion:
 *                 type: string
 *               imagenes:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         descripcion: Producto actualizado exitosamente.
 *       404:
 *         descripcion: Producto no encontrado.
 */
rutas.put('/productos/:id', authMiddleware, actualizarProducto); // Actualizar producto por ID

/**
 * @swagger
 * /api/productos/{id}:
 *   delete:
 *     tags: [Productos]
 *     summary: Eliminar un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         descripcion: ID del producto
 *     responses:
 *       200:
 *         descripcion: Producto eliminado exitosamente.
 *       404:
 *         descripcion: Producto no encontrado.
 */
rutas.delete('/productos/:id', authMiddleware, eliminarProducto); // Eliminar producto por ID

module.exports = rutas;
