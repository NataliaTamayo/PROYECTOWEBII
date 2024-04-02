// routes/directorRoutes.js
const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

// Rutas para el módulo de director
router.post('/directores', directorController.createDirector);
router.get('/directores', directorController.getAllDirectores);
router.put('/directores/:id', directorController.updateDirector);
router.delete('/directores/:id', directorController.deleteDirector);

module.exports = router;