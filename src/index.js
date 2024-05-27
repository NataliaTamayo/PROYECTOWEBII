const express = require ('express');
const upload = require('./databases/multer');
const path = require('path');
const multer = require('multer');
const mongoose = require("mongoose");
const  dotenv = require("dotenv").config();
const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const tipoRoutes = require('./routes/tipoRoutes');
const mediaRoutes = require('./routes/mediaRoutes');

const app = express();
const port = process.env.PORT || 3001;
app.set('port', port);


//middleware  para manejar solicitudes JSON y codificar URL
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname,'upload')));

// Ruta para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
    return res.json({ message: 'Subida OK' });
  });
  
  /*Ruta para servir el formulario HTML
app.get('/', (req, res) => {
    return res.sendFile(__dirname + '/index.html');
  });*/

// Rutas para el módulo de Género
app.use('/api/genero', generoRoutes);

// Rutas para el módulo de Director
app.use('/api/director', directorRoutes);

// Rutas para el módulo Productora
app.use('/api/productora', productoraRoutes);

//Rutas para el módulo Tipo
app.use('/api/tipo', tipoRoutes);

//Rutas para el módulo Media
app.use('/api/media', mediaRoutes);


mongoose
.connect(process.env.MONGODB_URI)
.then(() =>console.log("Conected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(3001, () => console.log('server lisening on port', port));
