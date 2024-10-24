const productRepository = require('../repositorios/repositorioProducto');

class ProductService {
    // Crear un nuevo producto
    async createProduct(productData) {
        return await productRepository.crearProducto(productData);
    }

    // Obtener todos los productos
    async obtenerTodosLosProductos() {
        return await productRepository.obtenerTodosLosProductos();
    }

    // Obtener un producto por ID
    async obtenerProductoPorId(id) {
        return await productRepository.obtenerProductoPorId(id);
    }

    // Actualizar un producto por ID
    async actualizarProducto(id, updatedData) {
        return await productRepository.actualizarProducto(id, updatedData);
    }

    // Eliminar un producto por ID
    async eliminarProducto(id) {
        return await productRepository.eliminarProducto(id);
    }
}

module.exports = new ProductService();
