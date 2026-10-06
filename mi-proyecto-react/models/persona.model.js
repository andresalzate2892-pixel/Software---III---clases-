const db = require('../config/db');

// Obtener todas las  personas
exports.getAll = (callback) => {
    db.query(
        'SELECT * FROM usuarios',
        callback
    );
};

// Obtener  ID
exports.getById = (id, callback) => {
    db.query(
        'SELECT * FROM usuarios WHERE id = ?',
        [id],
        callback
    );
};

// Crear una nueva persona
exports.create = (usuario, callback) => {
    db.query(
        'INSERT INTO usuarios (nombre, email) VALUES (?, ?)',
        [usuario.nombre, usuario.email],
        callback
    );
};

// Actualizar una persona
exports.update = (id, usuario, callback) => {
    db.query(
        'UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?',
        [usuario.nombre, usuario.email, id],
        callback
    );
};

// Eliminar una persona
exports.delete = (id, callback) => {
    db.query(
        'DELETE FROM usuarios WHERE id = ?',
        [id],
        callback
    );
};
