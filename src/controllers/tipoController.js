const Tipo = require('../models/tipo');

// Crear un nuevo tipo
exports.createTipo = async (req, res) => {
    try {
        const tipo = await Tipo.create(req.body);
        res.status(201).json(tipo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todos los tipos
exports.getAllTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un tipo existente
exports.updateTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(tipo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un tipo existente
exports.deleteTipo = async (req, res) => {
    try {
        await Tipo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tipo eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};