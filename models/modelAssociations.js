import User from './User';
import Trocavaga from './Trocavaga';

// Definindo as associações
User.hasMany(Trocavaga, { foreignKey: 'userId' });
Trocavaga.belongsTo(User, { foreignKey: 'userId' });

export {
  User,
  Trocavaga
};

