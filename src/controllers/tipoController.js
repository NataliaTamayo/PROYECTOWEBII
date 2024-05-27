const Tipo = require('../models/tipo');

// Obtener todos los tipos
exports.getAllTipos = async (req, res) => {
    try {
        const tipos = await Tipo.find();
        res.json(tipos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo tipo
exports.createTipo = async (req, res) => {
    const tipo = new Tipo({
        name: req.body.name,
        description: req.body.description,
    }); 

    try {
        const newTipo = await tipo.save();
        res.status(201).json(newTipo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


// Actualizar un tipo existente
exports.updateTipo = async (req, res) => {
    try {
        const tipo = await Tipo.findById(req.params.id);
        if (!tipo) {
            return res.status(404).json({ message: 'tipo  no encontrado' });
        }

        if (req.body.name != null) {
            tipo.name = req.body.name;
        }

        if (req.body.description != null) {
            tipo.description = req.body.description;
        }

        tipo.fdate_update = Date.now();

        const tipoUpdate = await tipo.save();
        res.json(tipoUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un tipo existente
exports.deleteTipo = async (req, res) => {
    const {id} = req.params;

    //si el id es valido 

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).jason({ message: 'ID Tipo valido'});
    }

    try {
        const tipo = await Tipo.findById(id);
        if (!tipo) {
            return res.status(404).json({ message: 'Tipo no encontrado' });
        }

        await tipo.deleteOne();
        res.json({ message: 'tipo eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


};