module.exports = {
  apiService: {
    port: process.env.PORT_API || 3000,
  },
  authService: {
    port: process.env.PORT_AUTH || 3001,
    secret: process.env.SECRET || 'secret',
  },
  storeService: {
    host: 'db4free.net',
    user: 'evenmaster',
    password: 'J4oioyCIn2',
    db: 'evenmaster',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
