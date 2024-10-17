const productRepository = require('../repositories/productRepository');

class ProductService {
    async createProduct(productData) {
        return await productRepository.createProduct(productData);
    }

    async getAllProducts() {
        return await productRepository.getAllProducts();
    }

    async getProductById(id) {
        return await productRepository.getProductById(id);
    }

    async updateProduct(id, updatedData) {
        return await productRepository.updateProduct(id, updatedData);
    }

    async deleteProduct(id) {
        return await productRepository.deleteProduct(id);
    }
}

module.exports = new ProductService();
