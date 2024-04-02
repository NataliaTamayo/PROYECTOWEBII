// routes/productoraRoutes.js
const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productoraController');

// Rutas para el módulo de productora
router.post('/productoras', productoraController.createProductora);
router.get('/productoras', productoraController.getAllProductoras);
router.put('/productoras/:id', productoraController.updateProductora);
router.delete('/productoras/:id', productoraController.deleteProductora);

module.exports = router;