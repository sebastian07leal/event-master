module.exports = (sequelize, Sequelize) => {
  const UserTopic = sequelize.define('user_topic', {
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return UserTopic;
};
