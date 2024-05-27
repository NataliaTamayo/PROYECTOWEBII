// routes/productoraRoutes.js
const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productoraController');

// Rutas para el módulo de productora
router.post('/', productoraController.createProductora);
router.get('/', productoraController.getAllProductoras);
router.put('/:id', productoraController.updateProductora);
router.delete('/:id', productoraController.deleteProductora);

module.exports = router;