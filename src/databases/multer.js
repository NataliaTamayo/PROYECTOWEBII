const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

module.exports = upload;
/*const express = require('express');
const router = express.Router();
const upload = require('../databases/multer'); // Importa el middleware de subida de archivos

// Ruta para subir archivos
router.post('/upload', upload.single('file'), (req, res) => {
  return res.json({ message: 'Subida OK' });
});

module.exports = router;*/



/*const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Directorio donde se guardarán los archivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

module.exports = upload;*/