module.exports = (sequelize, Sequelize) => {
  const Mode = sequelize.define('mode', {
    title: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.DECIMAL,
    },
    benefits: {
      type: Sequelize.TEXT,
    },
    type: {
      type: Sequelize.STRING,
      comment: 'general,owner',
    },
  });

  return Mode;
};
