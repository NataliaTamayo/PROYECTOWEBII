// routes/generoRoutes.js
const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');





// Rutas para el módulo de género
router.get('/', generoController.getAllGeneros);
router.post('/', generoController.createGenero);
router.put('/:id', generoController.updateGenero);
router.delete('/:id', generoController.deleteGenero);



module.exports = router;
