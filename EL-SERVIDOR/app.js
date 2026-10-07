require('dotenv').config();

const express = require('express');
const sequelize = require('./config/db');

const app = express();

app.use(express.json());

const usuarioRoutes = require('./routes/usuario.routes');

app.use('/usuarios', usuarioRoutes);

sequelize.authenticate()
    .then(() => {

        console.log('Conectado a SQL Server');

        app.listen(3000, () => {
            console.log('Servidor corriendo en http://localhost:3000');
        });

    })
    .catch((error) => {

        console.error('Error de conexión:', error);

    });