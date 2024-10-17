// src/services/userService.js
const userRepository = require('../repositories/userRepository');
const UserModel = require('../models/UserModel');

// Crear un nuevo usuario
const createUser = async ({ username, email, password }) => {
  // Crear una instancia del modelo con los datos proporcionados
  const user = new UserModel({ username, email, password });
  
  // Llamar al repositorio para guardar el usuario en Firebase
  return await userRepository.createUserInFirebase(user);
};

// Obtener todos los usuarios
const getAllUsers = async () => {
  return await userRepository.findAllUsers();
};

// Obtener un usuario por ID
const getUserById = async (id) => {
  return await userRepository.findUserById(id);
};

// Actualizar un usuario
const updateUser = async (id, updatedData) => {
  return await userRepository.updateUserInFirebase(id, updatedData);
};

// Eliminar un usuario
const deleteUser = async (id) => {
  return await userRepository.deleteUserInFirebase(id);
};

module.exports = { 
  createUser, 
  getAllUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
};
