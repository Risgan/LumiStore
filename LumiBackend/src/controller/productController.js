// src/controller/productController.js
const productService = require('../services/productService');

// Controlador para obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error getting products', error: error.message });
    }
};

// Controlador para obtener un producto por ID
const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productService.getProductById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error getting product', error: error.message });
    }
};

// Controlador para crear un producto
const createProduct = async (req, res) => {
    const { title, price, description, images } = req.body;

    // Validación básica
    if (!title || !price || !description) {
        return res.status(400).json({ message: 'Title, price, and description are required' });
    }

    try {
        const newProduct = await productService.createProduct({ title, price, description, images });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};

// Controlador para actualizar un producto
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const updatedProduct = await productService.updateProduct(id, updatedData);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

// Controlador para eliminar un producto
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        await productService.deleteProduct(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
