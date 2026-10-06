const express = require('express');

const app = express();

const db = require('./config/db');

const usuarioRoutes = require('./routes/usuario.routes');

// Permitir recibir JSON
app.use(express.json());

// Rutas de usuarios
app.use('/usuarios', usuarioRoutes);

app.listen(3002, () => {
    console.log('Servidor corriendo en http://localhost:3002');
});

