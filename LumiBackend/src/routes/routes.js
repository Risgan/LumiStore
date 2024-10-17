const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware'); // Middleware de autenticación
const { auth } = require('../controller/authController'); // Controlador de autenticación
const { 
  getUsers, 
  getUserById, 
  createUser, 
  updateUser, 
  deleteUser 
} = require('../controller/userController'); // Controlador de usuarios

// Importar el controlador de productos
const { 
  getAllProducts, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controller/productController'); // Controlador de productos

const router = express.Router();

/**
 * @swagger
 * /api/auth:
 *   post:
 *     tags: [auth]
 *     summary: Authenticate a user and retrieve a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@style.com
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         description: Token retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: your.jwt.token.here
 *       401:
 *         description: Invalid credentials.
 */
router.post('/auth', auth); // Ruta para autenticación

// Rutas para el CRUD de usuarios
/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve all users
 *     responses:
 *       200:
 *         description: Successfully retrieved all users.
 */
router.get('/users', authMiddleware, getUsers); // Obtener todos los usuarios

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: Successfully retrieved the user.
 *       404:
 *         description: User not found.
 */
router.get('/users/:id', authMiddleware, getUserById); // Obtener usuario por ID

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/users', authMiddleware, createUser); // Crear un nuevo usuario

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update a user by ID
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
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               avatar:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 */
router.put('/users/:id', authMiddleware, updateUser); // Actualizar usuario por ID

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 */
router.delete('/users/:id', authMiddleware, deleteUser); // Eliminar usuario por ID

// Rutas para el CRUD de productos
/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Products]
 *     summary: Retrieve all products
 *     responses:
 *       200:
 *         description: Successfully retrieved all products.
 */
router.get('/products', authMiddleware, getAllProducts); // Obtener todos los productos

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags: [Products]
 *     summary: Retrieve a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Successfully retrieved the product.
 *       404:
 *         description: Product not found.
 */
router.get('/products/:id', authMiddleware, getProductById); // Obtener producto por ID

/**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Products]
 *     summary: Create a new product
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
 *         description: Product created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/products', authMiddleware, createProduct); // Crear un nuevo producto

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     tags: [Products]
 *     summary: Update a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
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
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 */
router.put('/products/:id', authMiddleware, updateProduct); // Actualizar producto por ID

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     tags: [Products]
 *     summary: Delete a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 */
router.delete('/products/:id', authMiddleware, deleteProduct); // Eliminar producto por ID

module.exports = router;
