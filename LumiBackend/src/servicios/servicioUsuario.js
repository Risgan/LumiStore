const repositorioUsuario = require('../repositorios/repositorioUsuario');
const ModeloUsuario = require('../modelos/modeloUsuario');

// Crear un nuevo usuario
const crearUsuario = async ({ username, email, password }) => {
    // Crear una instancia del modelo con los datos proporcionados
    const usuario = new ModeloUsuario({ username, email, password });

    // Llamar al repositorio para guardar el usuario en Firebase
    return await repositorioUsuario.crearUsuario(usuario);
};

// Obtener todos los usuarios
const obtenerTodosLosUsuarios = async () => {
    return await repositorioUsuario.obtenerTodosLosUsuarios();
};

// Obtener un usuario por ID
const obtenerUsuarioPorId = async (id) => {
    return await repositorioUsuario.obtenerUsuarioPorId(id);
};

// Actualizar un usuario
const actualizarUsuario = async (id, datosActualizados) => {
    return await repositorioUsuario.actualizarUsuario(id, datosActualizados);
};

// Eliminar un usuario
const eliminarUsuario = async (id) => {
    return await repositorioUsuario.eliminarUsuario(id);
};

module.exports = { 
    crearUsuario, 
    obtenerTodosLosUsuarios, 
    obtenerUsuarioPorId, 
    actualizarUsuario, 
    eliminarUsuario 
};
