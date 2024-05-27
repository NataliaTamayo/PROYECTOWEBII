const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

// Rutas para el módulo de Tipo
router.post('/', tipoController.createTipo);
router.get('/', tipoController.getAllTipos);
router.put('/:id', tipoController.updateTipo);
router.delete('/:id', tipoController.deleteTipo);

module.exports = router;