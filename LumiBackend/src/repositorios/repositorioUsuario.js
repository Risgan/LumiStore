const db = require('../config/firebaseConfig');

class RepositorioUsuario {
    // Crear un usuario
    async crearUsuario(usuario) {
        const plainUserObject = JSON.parse(JSON.stringify(usuario));

        const usuarioRef = db.collection('usuarios').doc(); // Genera un ID único para el usuario
        await usuarioRef.set(plainUserObject);
        return { id: usuarioRef.id, ...plainUserObject };
    }

    // Obtener todos los usuarios
    async obtenerTodosLosUsuarios() {
        const usuariosSnapshot = await db.collection('usuarios').get();
        const usuarios = [];
        usuariosSnapshot.forEach(doc => {
            usuarios.push({ id: doc.id, ...doc.data() });
        });
        return usuarios;
    }

    // Obtener un usuario por ID
    async obtenerUsuarioPorId(id) {
        const usuarioDoc = await db.collection('usuarios').doc(id).get();
        if (!usuarioDoc.exists) {
            throw new Error('Usuario no encontrado');
        }
        return { id: usuarioDoc.id, ...usuarioDoc.data() };
    }

    // Actualizar un usuario por ID
    async actualizarUsuario(id, datosActualizados) {
        const usuarioRef = db.collection('usuarios').doc(id);
        const usuarioDoc = await usuarioRef.get();
        if (!usuarioDoc.exists) {
            throw new Error('Usuario no encontrado');
        }
        await usuarioRef.update(datosActualizados);
        return { id, ...datosActualizados };
    }

    // Eliminar un usuario por ID
    async eliminarUsuario(id) {
        const usuarioRef = db.collection('usuarios').doc(id);
        const usuarioDoc = await usuarioRef.get();
        if (!usuarioDoc.exists) {
            throw new Error('Usuario no encontrado');
        }
        await usuarioRef.delete();
        return { mensaje: 'Usuario eliminado exitosamente' };
    }
}

module.exports = new RepositorioUsuario();
