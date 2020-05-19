module.exports = (sequelize, Sequelize) => {
  const EventTopic = sequelize.define('event_topic', {
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return EventTopic;
};
