const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

// Rutas para el módulo de Media
router.post('/media', mediaController.createMedia);
router.get('/media', mediaController.getAllMedia);
router.put('/media/:id', mediaController.updateMedia);
router.delete('/media/:id', mediaController.deleteMedia);

module.exports = router;