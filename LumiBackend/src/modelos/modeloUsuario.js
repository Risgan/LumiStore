class ModeloUsuario {
  constructor({ nombreUsuario, correo, contraseña, avatar, rol }) {
      this.nombreUsuario = nombreUsuario;
      this.correo = correo;
      this.contraseña = contraseña; 
      this.avatar = avatar || '';
      this.rol = rol || 'usuario'; 
  }
}

module.exports = ModeloUsuario;