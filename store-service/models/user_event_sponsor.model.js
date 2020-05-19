module.exports = (sequelize, Sequelize) => {
  const UserEventSponsor = sequelize.define('user_event_sponsor', {
    description: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
      comment: 'sent, received',
    },
    dateApproved: {
      type: Sequelize.DATE,
      comment: 'Date approved or not of the offer',
    },
  });

  return UserEventSponsor;
};
