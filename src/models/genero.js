
const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    create_date: { type: Date, default: Date.now },
    date_update: { type: Date, default: Date.now },
    description: String
});

const Genero = mongoose.model('Genero', generoSchema);

module.exports = Genero;