const mongoose = require('mongoose');
const multer = require('multer');
const Media = require('../models/media');


// Configurar multer para manejar la carga de imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Directorio donde se almacenarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Nombre de archivo original
    }
});



// Obtener todas las medias (películas o series)
exports.getAllMedia = async (req, res) => {
    try {
        const medias = await Media.find();
        res.json(medias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const upload = multer({ storage: storage });

// Crear nueva media (película o serie)
exports.createMedia = async (req, res) => {
    const media= new Media({
        serial: req.body.serial,
        title: req.body.title,
        synopsis: req.body.synopsis,
        url: req.body.url,
        image: req.file.filename,
        release_year: req.body.release_year,
        genre: req.body.genre,
        director: req.body.director,
        production_company: req.body.production_company,
        type: req.body.type

    }); 

    try {
        const newMedia = await media.save();
        res.status(201).json(newMedia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Actualizar media existente por ID
exports.updateMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media no encontrada' });
        }

        if (req.body.serial!= null) {
            media.serial = req.body.serial;
        }

        // Actualiza los demás campos aquí

        media.fdate_update = Date.now();

        const mediaUpdate = await media.save();
        res.json(mediaUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


/* Actualizar media existente por ID
exports.updateMedia = async (req, res) => {
    try {
        const media = await Media.findById(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media  no encontrada' });
        }

        if (req.body.serial!= null) {
            media.serial = req.body.serial;
        }

        if (req.body.title != null) {
            media.title = req.body.title;
        }

        if (req.body.synopsis!= null) {
            media.synopsis = req.body.synopsis;
        }

        if (req.body.url != null) {
            media.url = req.body.url;
        }

        if (req.body.image!= null) {
            media.image = req.file.filename;
        }

        if (req.body.release_year != null) {
            media.release_year = req.body.release_year;
        }

        if (req.body.genre!= null) {
            media.genre = req.body.genre;
        }

        if (req.body.director != null) {
            media.director = req.body.director;
        }
        

        if (req.body. production_company!= null) {
            media. production_company = req.body. production_company;
        }

        if (req.body.type != null) {
            media.type = req.body.type;
        }
        
        media.fdate_update = Date.now();

        const mediaUpdate = await media.save();
        res.json(mediaUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};*/

// Eliminar media existente por ID
exports.deleteMedia = async (req, res) => {
    const {id} = req.params;

    //si el id es valido 

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).jason({ message: 'ID Media valida'});
    }

    try {
        const media = await Media.findById(id);
        if (!media) {
            return res.status(404).json({ message: 'Media no encontrada' });
        }

        await media.deleteOne();
        res.json({ message: 'Media eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


};