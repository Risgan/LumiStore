// src/controller/userController.js
const userService = require('../services/userService');

// Controlador para obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers(); // Llama al servicio para obtener los usuarios
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting users', error: error.message });
  }
};

// Controlador para obtener un usuario por ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.getUserById(id); // Llama al servicio para obtener el usuario por ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error getting user', error: error.message });
  }
};

// Controlador para crear un usuario
const createUser = async (req, res) => {
  const { username, email, password} = req.body;

  // Validación básica
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  try {
    const newUser = await userService.createUser({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Controlador para actualizar un usuario
const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedUser = await userService.updateUser(id, updatedData); // Llama al servicio para actualizar el usuario
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

// Controlador para eliminar un usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await userService.deleteUser(id); // Llama al servicio para eliminar el usuario
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
