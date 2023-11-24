const Sequelize = require('sequelize');
const db = require('../db/connection');

const User = db.define('user', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: Sequelize.DATEONLY, // Armazena apenas a data, sem a hora
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
    // Outros campos conforme necessário
});

module.exports = User;
