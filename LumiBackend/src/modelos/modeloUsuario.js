class ModeloUsuario {
  constructor({ nombreUsuario, correo, contraseña, avatar, rol }) {
      // Validación de datos
      if (!nombreUsuario || !correo || !contraseña) {
          throw new Error('nombreUsuario, correo y contraseña son obligatorios.');
      }

      this.nombreUsuario = nombreUsuario;
      this.correo = correo;
      this.contraseña = contraseña; 
      this.avatar = avatar || '';
      this.rol = rol || 'usuario'; 
  }
}

module.exports = ModeloUsuario;