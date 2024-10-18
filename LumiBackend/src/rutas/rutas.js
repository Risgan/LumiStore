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
 *         description: Token recuperado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: Bearer Token
 *       401:
 *         description: Credenciales invalidas.
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
 *         description: Se recuperaron exitosamente todos los usuarios.
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
 *         description: User ID
 *     responses:
 *       200:
 *         description: Recuperó con éxito el usuario.
 *       404:
 *         description: Usuario no encontrado.
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
 *               username:
 *                 type: string
 *               correo:
 *                 type: string
 *               contraseña:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado con éxito.
 *       400:
 *         description: Entrada no válida.
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
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
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
 *         description: Usuario actualizado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
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
 *         description: ID de usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
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
 *         description: Se recuperaron exitosamente todos los productos.
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
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Se recuperó exitosamente el producto.
 *       404:
 *         description: Producto no encontrado.
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
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *       400:
 *         description: Entrada no válida.
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
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *       404:
 *         description: Producto no encontrado.
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
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *       404:
 *         description: Producto no encontrado.
 */
rutas.delete('/productos/:id', authMiddleware, eliminarProducto); // Eliminar producto por ID

module.exports = rutas;
