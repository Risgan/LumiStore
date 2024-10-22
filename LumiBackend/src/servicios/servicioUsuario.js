const repositorioUsuario = require('../repositorios/repositorioUsuario');
const ModeloUsuario = require('../modelos/modeloUsuario');
const bcrypt = require('bcrypt');

// Crear un nuevo usuario
const crearUsuario = async ({ nombreUsuario, correo, contraseña  }) => {
    // Crear una instancia del modelo con los datos proporcionados
    console.log(nombreUsuario, correo, contraseña);
    const saltRounds = 10;
    const passwordEncriptada = await bcrypt.hash(contraseña , saltRounds);
    const usuario = new ModeloUsuario({ nombreUsuario, correo, contraseña: passwordEncriptada });

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
