const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');
const multer = require('multer');

// Configurar multer para manejar la carga de imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directorio donde se almacenarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Nombre de archivo original
    }
});

const upload = multer({ storage: storage });


// Rutas para el módulo de Media

router.post('/', upload.single('file'), mediaController.createMedia);
router.get('/', mediaController.getAllMedia);
router.put('/:id', mediaController.updateMedia);
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;