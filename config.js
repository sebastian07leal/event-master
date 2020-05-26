module.exports = {
  apiService: {
    port: process.env.PORT_API || 3000,
  },
  authService: {
    port: process.env.PORT_AUTH || 3001,
    secret: process.env.SECRET || 'secret',
  },
  storeService: {},
};
