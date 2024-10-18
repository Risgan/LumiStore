const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/firebaseConfig');

require('dotenv').config();

const autenticar = async (req, res) => {
    const { correo, contraseña } = req.body;

    if (!correo || !contraseña) {
        return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
    }

    const usuariosRef = db.collection('usuarios');
    const consulta = usuariosRef.where('correo', '==', correo);
    const snapshot = await consulta.get();

    if (snapshot.empty) {
        return res.status(401).json({ mensaje: 'El correo no está registrado' });
    }

    snapshot.forEach(doc => {
        console.log(doc.data())
        datosUsuario = doc.data();
        console.log(datosUsuario);        
    });

    const esContraseñaValida = await bcrypt.compare(contraseña, datosUsuario.contraseña);

    if (!esContraseñaValida) {
        return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const usuario = { correo, rol: datosUsuario.rol, nombreUsuario: datosUsuario.nombreUsuario };
    const tokenAcceso = jwt.sign(usuario, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' });  // Cambié el tiempo de expiración a 2 horas

    return res.json({
        mensaje: 'Autenticación exitosa',
        tokenAcceso
    });
};

module.exports = { autenticar };
