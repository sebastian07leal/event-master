module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define('event', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    location: {
      type: Sequelize.STRING,
    },
    dateStart: {
      type: Sequelize.DATE,
    },
    dateEnd: {
      type: Sequelize.DATE,
    },
    email: {
      type: Sequelize.STRING(100),
    },
    url: {
      type: Sequelize.STRING(150),
    },
    image: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM({
        values: ['draft', 'created', 'published', 'finished'],
      }),
      comment: 'draft,created,published,finished',
    },
  });

  return Event;
};
