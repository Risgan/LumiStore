const userService = require('../servicios/servicioUsuario');

// Controlador para obtener todos los usuarios con validación de lista vacía
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await userService.obtenerTodosLosUsuarios();
    if (usuarios.length === 0) {
      return res.status(200).json({ mensaje: 'No hay usuarios registrados' });
    }
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error: error.message });
  }
};

// Controlador para obtener un usuario por ID
const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ mensaje: 'El ID del usuario es obligatorio' });
  }

  try {
    const usuario = await userService.obtenerUsuarioPorId(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuario', error: error.message });
  }
};

// Controlador para crear un usuario con validación de formato de correo
const crearUsuario = async (req, res) => {
  const { nombreUsuario, correo, contraseña } = req.body;


  console.log(nombreUsuario, correo, contraseña, !nombreUsuario, !correo , !contraseña, !nombreUsuario || !correo || !contraseña);
  

  // Validación básica
  if (!nombreUsuario || !correo || !contraseña) {
    return res.status(400).json({ mensaje: 'El nombre de usuario, correo y contraseña son obligatorios' });
  }

  const correoValido = /\S+@\S+\.\S+/;
  if (!correoValido.test(correo)) {
    return res.status(400).json({ mensaje: 'Formato de correo inválido' });
  }

  try {
    const nuevoUsuario = await userService.crearUsuario({ nombreUsuario, correo, contraseña });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear usuario', error: error.message });
  }
};

// Controlador para actualizar un usuario con validación de cambios
const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;

  if (Object.keys(datosActualizados).length === 0) {
    return res.status(400).json({ mensaje: 'Debe proporcionar datos para actualizar' });
  }

  try {
    const usuarioActualizado = await userService.actualizarUsuario(id, datosActualizados);
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar usuario', error: error.message });
  }
};

// Controlador para eliminar un usuario
const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioEliminado = await userService.eliminarUsuario(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar usuario', error: error.message });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
};
