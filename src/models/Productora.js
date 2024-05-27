// models/productora.js
const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
    name: { type: String, required: true },
    state: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    create_date: { type: Date, default: Date.now },
    date_update: { type: Date, default: Date.now },
    slogan: String,
    description: String
});

const Productora = mongoose.model('Productora', productoraSchema);

module.exports = Productora;