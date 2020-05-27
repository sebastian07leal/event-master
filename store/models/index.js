const Sequelize = require('sequelize');
const dbConfig = require('../../config');

const sequelize = new Sequelize(
  dbConfig.storeService.db,
  dbConfig.storeService.user,
  dbConfig.storeService.password,
  {
    host: dbConfig.storeService.host,
    dialect: dbConfig.storeService.dialect,
    operatorsAliases: false,

    pool: {
      max: dbConfig.storeService.pool.max,
      min: dbConfig.storeService.pool.min,
      acquire: dbConfig.storeService.pool.acquire,
      idle: dbConfig.storeService.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categories = require('./category.model.js')(sequelize, Sequelize);
db.topics = require('./topic.model.js')(sequelize, Sequelize);
db.users = require('./user.model.js')(sequelize, Sequelize);
db.auths = require('./auth.model.js')(sequelize, Sequelize);
db.user_topics = require('./user_topic.model.js')(sequelize, Sequelize);
db.user_categories = require('./user_category.model.js')(sequelize, Sequelize);
db.user_event_sponsors = require('./user_event_sponsor.model.js')(
  sequelize,
  Sequelize
);
db.events = require('./event.model.js')(sequelize, Sequelize);
db.event_topics = require('./event_topic.model.js')(sequelize, Sequelize);
db.event_categories = require('./event_category.model.js')(
  sequelize,
  Sequelize
);
db.event_modes = require('./event_mode.model.js')(sequelize, Sequelize);
db.modes = require('./mode.model.js')(sequelize, Sequelize);
db.payments = require('./payment.model.js')(sequelize, Sequelize);
db.messages = require('./message.model.js')(sequelize, Sequelize);
db.countries = require('./country.model.js')(sequelize, Sequelize);
db.cities = require('./city.model.js')(sequelize, Sequelize);
db.role = require('./role.model.js')(sequelize, Sequelize);

db.role.belongsToMany(db.users, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
});
db.users.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
});

db.ROLES = ['sponsor', 'admin', 'organizer'];

db.users.hasOne(db.auths, { as: 'users' });
db.categories.hasMany(db.topics, { as: 'topics' });
db.topics.belongsTo(db.categories, {
  foreignKey: 'categoryId',
  as: 'TopicCategoryFk',
});

db.users.hasMany(db.user_topics, { as: 'user_topics' });
db.user_topics.belongsTo(db.topics, {
  foreignKey: 'topicId',
  as: 'UserTopicFk',
});

db.users.hasMany(db.user_categories, { as: 'user_categories' });
db.user_categories.belongsTo(db.categories, {
  foreignKey: 'categoryId',
  as: 'UserCategoryFk',
});

//RELATIONSHIP USER EVENTS
db.users.hasMany(db.events, { as: 'user_events' });

db.events.hasMany(db.event_topics, { as: 'event_topics' });
db.event_topics.belongsTo(db.topics, {
  foreignKey: 'topicId',
  as: 'EventTopicFk',
});

db.events.hasMany(db.event_categories, { as: 'event_categories' });
db.event_categories.belongsTo(db.categories, {
  foreignKey: 'categoryId',
  as: 'EventCategoryFk',
});

db.events.hasMany(db.event_modes, { as: 'event_modes' });
db.event_modes.belongsTo(db.events, {
  foreignKey: 'eventId',
  as: 'EventModeEventFk',
});

//MODES
db.users.hasMany(db.modes, { as: 'modes' });
db.modes.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'UserModesFk',
});

db.modes.hasMany(db.event_modes, { as: 'event_modes' });
db.event_modes.belongsTo(db.modes, {
  foreignKey: 'modeId',
  as: 'EventModeModesFk',
});

//PAYMENTS
db.users.hasMany(db.payments, { as: 'payments' });
db.payments.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'UserPaymentFk',
});

db.events.hasMany(db.payments, { as: 'payments' });
db.payments.belongsTo(db.events, {
  foreignKey: 'eventId',
  as: 'EventPaymentFk',
});

//MESSAGES
db.users.hasMany(db.messages, { as: 'messages_users' });
db.messages.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'UserMassageFk',
});

db.events.hasMany(db.messages, { as: 'messages_events' });
db.messages.belongsTo(db.events, {
  foreignKey: 'eventId',
  as: 'EventMessageFk',
});

//SPONSORS
db.users.hasMany(db.user_event_sponsors, { as: 'user_event_sponsors' });
db.user_event_sponsors.belongsTo(db.users, {
  foreignKey: 'userId',
  as: 'UserEventSponsorFk',
});

db.events.hasMany(db.user_event_sponsors, { as: 'event_user_sponsors' });
db.user_event_sponsors.belongsTo(db.events, {
  foreignKey: 'eventId',
  as: 'EventUserSponsorFk',
});

db.payments.hasOne(db.user_event_sponsors, { as: 'payment' });
/*db.user_event_sponsors.belongsTo(db.payments, {
  foreignKey: "paymentId",
  as: "EventPaymentSponsorFk",
});*/

db.countries.hasMany(db.cities, { as: 'cities' });
db.cities.belongsTo(db.countries, {
  foreignKey: {
    name: 'countryCode',
    allowNull: false,
  },
});
module.exports = db;
