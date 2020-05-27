module.exports = (sequelize, Sequelize) => {
  const Auth = sequelize.define('auth', {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING(64),
    },
  });

  return Auth;
};
