const Sequelize = require('sequelize');
const db = require('../db/connection');

const Trocavaga = db.define('trocavaga', {
  
  telefone: {
    type: Sequelize.INTEGER,
  },
  regiao_origem: {
    type: Sequelize.STRING,
  },
  escola_origem: {
    type: Sequelize.STRING,
  },
  grau_instrucao: {
    type: Sequelize.STRING,
  },
  serie_ano: {
    type: Sequelize.STRING,
  },
  turno_origem: {
    type: Sequelize.STRING,
  },
  regiao_destino: {
    type: Sequelize.STRING,
  },
  escola_destino: {
    type: Sequelize.STRING,
  },
  turno_destino: {
    type: Sequelize.STRING,
  },
  new_trocavaga: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Trocavaga