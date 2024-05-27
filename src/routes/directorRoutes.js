// routes/directorRoutes.js
const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

// Rutas para el módulo de director
router.post('/', directorController.createDirector);
router.get('/', directorController.getAllDirectores);
router.put('/:id', directorController.updateDirector);
router.delete('/:id', directorController.deleteDirector);

module.exports = router;