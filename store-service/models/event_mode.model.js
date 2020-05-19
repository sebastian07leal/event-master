module.exports = (sequelize, Sequelize) => {
  const EventMode = sequelize.define('event_mode', {
    quantity: {
      type: Sequelize.INTEGER,
    },
    quantityUsed: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.ENUM({ values: ['Pending', 'Parcial', 'Complete'] }),
      comment: 'pending,parcial,complete',
    },
  });

  return EventMode;
};
