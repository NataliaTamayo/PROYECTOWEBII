const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    serial: { type: String, unique: true, required: true },
    titulo: { type: String, required: true },
    sinopsis: String,
    urlPelicula: { type: String, unique: true, required: true },
    imagenPortada: String,
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
    añoEstreno: Number,
    generoPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
    directorPrincipal: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
    productora: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora', required: true },
    tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true }
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;