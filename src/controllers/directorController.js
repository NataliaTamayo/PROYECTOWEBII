
// controllers/directorController.js
const Director = require('../models/director');


// Controlador para obtener todos los directores
exports.getAllDirectores = async (req, res) => {
    try {
        const directores = await Director.find();
        res.json(directores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo director
exports.createDirector = async (req, res) => {
    const director = new Director({
        name: req.body.name,
        state: req.body.state,
    }); 

    try {
        const newDirector = await director.save();
        res.status(201).json(newDirector);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



// Actualizar un director existente
exports.updateDirector = async (req, res) => {
    try {
        const director = await Director.findById(req.params.id);
        if (!director) {
            return res.status(404).json({ message: 'Director  no encontrado' });
        }

        if (req.body.name != null) {
            director.name = req.body.name;
        }

        if (req.body.state != null) {
            diractor.state = req.body.state;
        }

        director.fdate_update = Date.now();

        const directorUpdate = await director.save();
        res.json(directorUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Eliminar un director existente

exports.deleteDirector = async (req, res) => {
    const {id} = req.params;

    //si el id es valido 

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).jason({ message: 'ID Director valido'});
    }

    try {
        const director = await Director.findById(id);
        if (!director) {
            return res.status(404).json({ message: 'Director no encontrado' });
        }

        await director.deleteOne();
        res.json({ message: 'Director eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};