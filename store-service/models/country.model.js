module.exports = (sequelize, Sequelize) => {
  const Country = sequelize.define('country', {
    name: {
      type: Sequelize.STRING,
    },
    code: {
      type: Sequelize.STRING(4),
      comment: 'CODE COUNTRY STANDARD',
      allowNull: false,
      primaryKey: true,
    },
  });

  return Country;
};
