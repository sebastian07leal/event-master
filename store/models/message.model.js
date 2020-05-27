module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define('message', {
    description: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      comment: 'enviado, ',
    },
  });

  return Message;
};
