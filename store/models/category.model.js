module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define('category', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    owner: {
      type: Sequelize.INTEGER,
    },
  });
  return Category;
};
