const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Persona = sequelize.define('Persona', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: DataTypes.STRING(100)
    },

    email: {
        type: DataTypes.STRING(100)
    }

}, {
    tableName: 'persona',
    timestamps: false
});

module.exports = Persona;