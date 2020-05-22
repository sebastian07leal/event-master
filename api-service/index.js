const express = require('express');

const app = express();
const config = require('../config');
const user = require('./users/network');

app.use(express.json());

app.use('/', user);

app.listen(config.apiService.port, () => {
  console.log(`API api run in the port ${config.apiService.port}`);
});
