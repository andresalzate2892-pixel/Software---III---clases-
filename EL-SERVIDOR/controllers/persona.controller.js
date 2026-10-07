const usuarioService = require('../services/service.persona');

exports.getAll = async (req, res) => {
    try {
        const personas = await personaService.getAll();

        res.json(personas);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener personas',
            error: error.message
        });
    }
};


exports.getById = async (req, res) => {
    try {
        const persona = await personaService.getById(req.params.id);

        if (!persona) {
            return res.status(404).json({
                mensaje: 'Persona no encontrada'
            });
        }

        res.json(persona);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al obtener persona',
            error: error.message
        });
    }
};


exports.create = async (req, res) => {
    try {
        const persona = await personaService.create(req.body);

        res.status(201).json(persona);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al crear persona',
            error: error.message
        });
    }
};


exports.update = async (req, res) => {
    try {
        const persona = await personaService.update(
            req.params.id,
            req.body
        );

        if (!persona) {
            return res.status(404).json({
                mensaje: 'Persona no encontrada'
            });
        }

        res.json(persona);

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al actualizar persona',
            error: error.message
        });
    }
};


exports.delete = async (req, res) => {
    try {
        const eliminado = await personaService.delete(req.params.id);

        if (!eliminado) {
            return res.status(404).json({
                mensaje: 'Persona no encontrada'
            });
        }

        res.json({
            mensaje: 'Persona eliminada correctamente'
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al eliminar persona',
            error: error.message
        });
    }
};