// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];;
    console.log(token, 'token ------------------');
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    else{
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            console.log(user, 'user ------------------');
            console.log(err, 'err ------------------');
            
            
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.user = user;
            next();
        });
    }
};

module.exports = {authMiddleware};