const db = require('../config/firebaseConfig');

class ProductRepository {
    // Crear un producto
    async createProduct(product) {
        const productRef = db.collection('products').doc(); // Genera un ID único para el producto
        await productRef.set(product);
        return { id: productRef.id, ...product };
    }

    // Obtener todos los productos
    async getAllProducts() {
        const productsSnapshot = await db.collection('products').get();
        const products = [];
        productsSnapshot.forEach(doc => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    }

    // Obtener un producto por ID
    async getProductById(id) {
        const productDoc = await db.collection('products').doc(id).get();
        if (!productDoc.exists) {
            throw new Error('Product not found');
        }
        return { id: productDoc.id, ...productDoc.data() };
    }

    // Actualizar un producto por ID
    async updateProduct(id, updatedData) {
        const productRef = db.collection('products').doc(id);
        await productRef.update(updatedData);
        return { id, ...updatedData };
    }

    // Eliminar un producto por ID
    async deleteProduct(id) {
        await db.collection('products').doc(id).delete();
        return { message: 'Product deleted successfully' };
    }
}

module.exports = new ProductRepository();
