const productService = require('../servicios/servicioProducto');

// Controlador para obtener todos los productos
const obtenerTodosLosProductos = async (req, res) => {
    try {
        const productos = await productService.obtenerTodosLosProductos();
        if (productos.length === 0) {
            return res.status(200).json({ mensaje: 'No hay productos registrados' });
        }
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error: error.message });
    }
};

// Controlador para obtener un producto por ID
const obtenerProductoPorId = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensaje: 'El ID del producto es obligatorio' });
    }

    try {
        const producto = await productService.obtenerProductoPorId(id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener producto', error: error.message });
    }
};

// Controlador para crear un producto
const crearProducto = async (req, res) => {
    const { titulo, precio, descripcion, imagenes } = req.body;

    // Validación básica
    if (!titulo || !precio || !descripcion) {
        return res.status(400).json({ mensaje: 'El título, precio y descripción son obligatorios' });
    }

    try {
        const nuevoProducto = await productService.createProduct({ titulo, precio, descripcion, imagenes });
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear producto', error: error.message });
    }
};

// Controlador para actualizar un producto
const actualizarProducto = async (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;

    if (!id) {
        return res.status(400).json({ mensaje: 'El ID del producto es obligatorio' });
    }

    if (Object.keys(datosActualizados).length === 0) {
        return res.status(400).json({ mensaje: 'Debe proporcionar datos para actualizar' });
    }

    try {
        const productoActualizado = await productService.actualizarProducto(id, datosActualizados);
        if (!productoActualizado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json(productoActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar producto', error: error.message });
    }
};

// Controlador para eliminar un producto
const eliminarProducto = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ mensaje: 'El ID del producto es obligatorio' });
    }

    try {
        await productService.eliminarProducto(id);
        res.status(200).json({ mensaje: 'Producto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar producto', error: error.message });
    }
};

module.exports = {
    obtenerTodosLosProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};
