const express = require('express');
const mongoose = require('mongoose');
const generoRoutes = require('./routes/generoRoutes');
const directorRoutes = require('./routes/directorRoutes');

const app = express();
const port = process.env.PORT || 3001;

console.log("Intentando establecer conexión con MongoDB Atlas...");

try  {
await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}
catch(error) {
    console.error("Error al connected to MongoDB Atlas:", error)
     throw new Error('Error de conection')
}

app.use(express.json());

// Rutas para el módulo de género
app.use('/api', generoRoutes);

// Rutas para el módulo de Director
app.use('/api', directorRoutes);

module.exports = app;