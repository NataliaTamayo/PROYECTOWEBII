const Media = require('../models/media');

// Crear nueva media (película o serie)
exports.createMedia = async (req, res) => {
    try {
        const media = await Media.create(req.body);
        res.status(201).json(media);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las medias (películas o series)
exports.getAllMedia = async (req, res) => {
    try {
        const medias = await Media.find();
        res.json(medias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar media existente
exports.updateMedia = async (req, res) => {
    try {
        const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(media);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar media existente
exports.deleteMedia = async (req, res) => {
    try {
        await Media.findByIdAndDelete(req.params.id);
        res.json({ message: 'Media eliminada correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};