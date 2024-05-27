// controllers/productoraController.js
const Productora = require('../models/Productora');

// Obtener todas las productoras
exports.getAllProductoras = async (req, res) => {
    try {
        const productoras = await Productora.find();
        res.json(productoras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Crear una nueva productora
exports.createProductora = async (req, res) => {
    const productora = new Productora({
        name: req.body.name,
        state: req.body.state,
    }); 

    try {
        const newProductora = await productora.save();
        res.status(201).json(newProductora);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una productora existente
exports.updateProductora = async (req, res) => {
    try {
        const productora = await Productora.findById(req.params.id);
        if (!productora) {
            return res.status(404).json({ message: 'Productora  no encontrada' });
        }

        if (req.body.name != null) {
            productora.name = req.body.name;
        }

        if (req.body.state != null) {
            productora.state = req.body.state;
        }

        productora.fdate_update = Date.now();

        const productoraUpdate = await productora.save();
        res.json(productoraUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una productora existente
exports.deleteProductora = async (req, res) => {
    const {id} = req.params;

    //si el id es valido 

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).jason({ message: 'ID Productora valida'});
    }

    try {
        const productora = await Productora.findById(id);
        if (!productora) {
            return res.status(404).json({ message: 'Productora no encontrada' });
        }

        await productora.deleteOne();
        res.json({ message: 'Productora eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


};