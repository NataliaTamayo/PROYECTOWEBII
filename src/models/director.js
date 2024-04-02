// models/director.js
const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    nombres: { type: String, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now }
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;