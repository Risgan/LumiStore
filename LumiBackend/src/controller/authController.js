// src/controller/authController.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../config/firebaseConfig');

require('dotenv').config();

const auth = async (req, res) => {
    const { email, password } = req.body;
    debugger


    const usersRef = db.collection('users');


    const query = usersRef.where('email', '==', email);

    const snapshot = await query.get();

    if (snapshot.empty) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    snapshot.forEach(doc => {
        userData = doc.data();
        console.log(userData);        
    });

    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    const user = {email, role: userData.role, username: userData.username};

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'});

    return res.json({accessToken});
};

module.exports = {auth};