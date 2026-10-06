const express = require('express');

const router = express.Router();

const controller = require('../controllers/persona.controller');

// Obtener todos las personas
router.get('/', controller.getAll);

// Obtener una persona por ID
router.get('/:id', controller.getById);

// Crear una persona
router.post('/', controller.create);

// Actualizar una persona
router.put('/:id', controller.update);

// Eliminar una persona
router.delete('/:id', controller.delete);

module.exports = router;
