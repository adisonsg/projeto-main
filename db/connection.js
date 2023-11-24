const Sequelize = require('sequelize');
require('dotenv').config();

// Configuração para o MySQL
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  dialectOptions: {
    // Adicione quaisquer opções específicas do MySQL, se necessário
  },
});

module.exports = sequelize;

