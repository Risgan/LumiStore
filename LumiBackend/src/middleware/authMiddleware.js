const jwt = require('jsonwebtoken');

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
    // Obtener el token de los headers
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    // Si no hay token, devolver estado 401 (no autorizado)
    if (!token) {
        return res.status(401).json({ mensaje: 'No autorizado: token faltante' });
    }

    // Verificar el token con la clave secreta
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // Si hay un error al verificar (token inválido o expirado), devolver estado 403 (prohibido)
        if (err) {
            return res.status(403).json({ mensaje: 'Prohibido: token no válido o expirado' });
        }

        // Si el token es válido, agregar la información del usuario al request y continuar
        req.user = user;
        next();
    });
};

module.exports = { authMiddleware };
