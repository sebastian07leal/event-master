module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    biography: {
      type: Sequelize.TEXT,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.ENUM({
        values: ['organizer', 'sponsor', 'administrator'],
      }),
      comment: 'organizer,sponsor,administrator',
    },
    status: {
      type: Sequelize.INTEGER,
      comment: 'active, inactive',
    },
  });

  return User;
};
