class ModeloProducto {
    constructor(titulo, precio, descripcion, imagenes = []) {
        // Validación de datos
        if (!titulo || !precio || !descripcion) {
            throw new Error('El título, precio y descripción son obligatorios.');
        }

        this.titulo = titulo;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imagenes = imagenes;
    }
}

module.exports = ModeloProducto;
