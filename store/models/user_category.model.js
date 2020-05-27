module.exports = (sequelize, Sequelize) => {
  const UserCategory = sequelize.define('user_category', {
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return UserCategory;
};
