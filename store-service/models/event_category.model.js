module.exports = (sequelize, Sequelize) => {
  const EventCategory = sequelize.define('event_category', {
    status: {
      type: Sequelize.BOOLEAN,
    },
  });

  return EventCategory;
};
