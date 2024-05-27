const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    serial: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  url: { type: String, unique: true, required: true },
  image: { type: String, required: true },
  create_date: { type: Date, default: Date.now },
  date_update: { type: Date, default: Date.now },
  release_year: { type: Number, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true }, // Campo para el director principal
  production_company: { type: String, required: true }, // Campo para la productora
  type: { type: String, required: true }, // Campo para el tipo
});


const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;