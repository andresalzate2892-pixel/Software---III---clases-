const usuarioModel = require('../models/usuario.model');

exports.getAll = (callback) => {
    usuarioModel.getAll(callback);
};

exports.getById = (id, callback) => {
    usuarioModel.getById(id, callback);
};

exports.create = (usuario, callback) => {
    usuarioModel.create(usuario, callback);
};

exports.update = (id, usuario, callback) => {
    usuarioModel.update(id, usuario, callback);
};

exports.delete = (id, callback) => {
    usuarioModel.delete(id, callback);
};
