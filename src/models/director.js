// models/director.js
const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    create_date: { type: Date, default: Date.now },
    date_update: { type: Date, default: Date.now }
});

const Director = mongoose.model('Director', directorSchema);

module.exports = Director;