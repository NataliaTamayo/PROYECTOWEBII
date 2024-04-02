const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

// Rutas para el módulo de Tipo
router.post('/tipos', tipoController.createTipo);
router.get('/tipos', tipoController.getAllTipos);
router.put('/tipos/:id', tipoController.updateTipo);
router.delete('/tipos/:id', tipoController.deleteTipo);

module.exports = router;