// routes/generoRoutes.js
const express = require('express');
const router = express.Router();
const generoController = require('../controllers/generoController');





// Rutas para el módulo de género
router.get('/generos', generoController.getAllGeneros);
router.post('/generos', generoController.createGenero);
router.put('/generos/:id', generoController.updateGenero);
router.delete('/generos/:id', generoController.deleteGenero);



module.exports = router;
