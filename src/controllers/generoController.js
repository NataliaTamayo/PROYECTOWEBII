// controllers/generoController.js
const Genero = require('../models/genero');

// Controlador para obtener todos los géneros
exports.getAllGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los géneros' });
    }
};


// Obtener todos los géneros
exports.getAllGeneros = async (req, res) => {
    try {
        const generos = await Genero.find();
        res.json(generos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo género
exports.createGenero = async (req, res) => {
    const genero = new Genero({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description
    });

    try {
        const newGenero = await genero.save();
        res.status(201).json(newGenero);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un género existente
exports.updateGenero = async (req, res) => {
    try {
        const genero = await Genero.findById(req.params.id);
        if (genero == null) {
            return res.status(404).json({ message: 'Género no encontrado' });
        }

        if (req.body.name != null) {
            genero.name = req.body.name;
        }

        if (req.body.state != null) {
            genero.state = req.body.state;
        }

        if (req.body.description != null) {
            genero.description = req.body.description;
        }

        genero.fdate_update = Date.now();

        const generoUpdate = await genero.save();
        res.json(generoUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Borrar un género existente
exports.deleteGenero = async (req, res) => {
    try {
        const genero = await Genero.findById(req.params.id);
        if (genero == null) {
            return res.status(404).json({ message: 'Género no encontrado' });
        }

        await genero.remove();
        res.json({ message: 'Género eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};