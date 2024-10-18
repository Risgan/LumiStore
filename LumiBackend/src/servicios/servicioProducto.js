const productRepository = require('../repositorios/repositorioProducto');

class ProductService {
    // Crear un nuevo producto
    async createProduct(productData) {
        return await productRepository.createProduct(productData);
    }

    // Obtener todos los productos
    async getAllProducts() {
        return await productRepository.getAllProducts();
    }

    // Obtener un producto por ID
    async getProductById(id) {
        return await productRepository.getProductById(id);
    }

    // Actualizar un producto por ID
    async updateProduct(id, updatedData) {
        return await productRepository.updateProduct(id, updatedData);
    }

    // Eliminar un producto por ID
    async deleteProduct(id) {
        return await productRepository.deleteProduct(id);
    }
}

module.exports = new ProductService();
