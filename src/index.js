const express = require ('express');
const app = express();
const mongoose = require("mongoose");
const  dotenv = require("dotenv").config();
const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');
const productoraRoutes = require('./routes/productoraRoutes');


const port = process.env.PORT || 3001;
app.set('port', port);


//middleware
app.use(express.json());

// Rutas para el módulo de género
app.use('/api', generoRoutes);

// Rutas para el módulo de Director
app.use('/api', directorRoutes);

// Rutas para el módulo Productora
app.use('/api', productoraRoutes);

app.listen(3001, () => console.log('server lisening on port', port));
