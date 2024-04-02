// controllers/directorController.js
const Director = require('../models/director');

// Controlador para crear un nuevo director
exports.createDirector = async (req, res) => {
    try {
        const director = await Director.create(req.body);
        res.status(201).json(director);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para obtener todos los directores
exports.getAllDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.json(directores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para actualizar un director existente
exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(director);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para eliminar un director existente
exports.deleteDirector = async (req, res) => {
    try {
        await Director.findByIdAndDelete(req.params.id);
        res.json({ message: 'Director removed correct' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};