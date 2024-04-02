const express = require('express');
const mongoose = require('mongoose');
const generoRoutes = require('./routes/generoRoutes');
const directorController = require('./controllers/directorController');
const productoraRoutes = require('./routes/productoraRoutes');


const app = express();


app.get('/Welcome', (req,res) => {
    return res.status(4004).json({
        msj:"Welcome to my API",
        status: 404

})
})
app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app