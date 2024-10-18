const db = require('../config/firebaseConfig');

class RepositorioProducto {
    // Crear un producto
    async crearProducto(producto) {
        const productoRef = db.collection('productos').doc(); // Genera un ID único para el producto
        await productoRef.set(producto);
        return { id: productoRef.id, ...producto };
    }

    // Obtener todos los productos
    async obtenerTodosLosProductos() {
        const productosSnapshot = await db.collection('productos').get();
        const productos = [];
        productosSnapshot.forEach(doc => {
            productos.push({ id: doc.id, ...doc.data() });
        });
        return productos;
    }

    // Obtener un producto por ID
    async obtenerProductoPorId(id) {
        const productoDoc = await db.collection('productos').doc(id).get();
        if (!productoDoc.exists) {
            throw new Error('Producto no encontrado');
        }
        return { id: productoDoc.id, ...productoDoc.data() };
    }

    // Actualizar un producto por ID
    async actualizarProducto(id, datosActualizados) {
        const productoRef = db.collection('productos').doc(id);
        await productoRef.update(datosActualizados);
        return { id, ...datosActualizados };
    }

    // Eliminar un producto por ID
    async eliminarProducto(id) {
        const productoRef = db.collection('productos').doc(id);
        const productoDoc = await productoRef.get();
        if (!productoDoc.exists) {
            throw new Error('Producto no encontrado');
        }
        await productoRef.delete();
        return { mensaje: 'Producto eliminado exitosamente' };
    }
}

module.exports = new RepositorioProducto();
