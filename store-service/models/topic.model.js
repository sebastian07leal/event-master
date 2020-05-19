module.exports = (sequelize, Sequelize) => {
  const Topic = sequelize.define('topic', {
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

  return Topic;
};
