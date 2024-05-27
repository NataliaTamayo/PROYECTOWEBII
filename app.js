const express = require('express');
const mongoose = require('./src/databases/config');
const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const mediaRoutes = require('./routes/media');

const app = express();


app.get('/Welcome', (req,res) => {
    return res.status(404).json({
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