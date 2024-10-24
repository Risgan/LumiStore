const productRepository = require('../repositorios/repositorioProducto');

class ProductService {
    // Crear un nuevo producto
    async createProduct(productData) {
        return await productRepository.createProduct(productData);
    }

    // Obtener todos los productos
    async getAllProducts() {
        return await productRepository.obtenerTodosLosProductos();
    }

    // Obtener un producto por ID
    async getProductById(id) {
        return await productRepository.obtenerProductoPorId(id);
    }

    // Actualizar un producto por ID
    async updateProduct(id, updatedData) {
        return await productRepository.actualizarProducto(id, updatedData);
    }

    // Eliminar un producto por ID
    async deleteProduct(id) {
        return await productRepository.eliminarProducto(id);
    }
}

module.exports = new ProductService();
