const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const personaRoutes = require('./routes/persona.routes');

app.use('/personas', personaRoutes);

app.listen(3002, () => {
    console.log('Servidor corriendo en http://localhost:3002');
});