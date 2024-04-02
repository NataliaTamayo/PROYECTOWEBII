// controllers/productoraController.js
const Productora = require('../models/Productora');

// Controlador para crear una nueva productora
exports.createProductora = async (req, res) => {
    try {
        const productora = await Productora.create(req.body);
        res.status(201).json(productora);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para obtener todas las productoras
exports.getAllProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para actualizar una productora existente
exports.updateProductora = async (req, res) => {
    try {
        const productora = await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(productora);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para eliminar una productora existente
exports.deleteProductora = async (req, res) => {
    try {
        await Productora.findByIdAndDelete(req.params.id);
        res.json({ message: 'Productora eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};