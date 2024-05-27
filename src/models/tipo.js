const mongoose = require('mongoose');


const tipoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    create_date: { type: Date, default: Date.now },
    date_update: { type: Date, default: Date.now },
    description: String
});

const Tipo = mongoose.model('Tipo', tipoSchema);

module.exports = Tipo;