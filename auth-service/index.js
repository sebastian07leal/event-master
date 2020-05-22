const express = require('express');

const app = express();
const config = require('../config');
const user = require('./session/network');

app.use(express.json());

app.use('/', user);

app.listen(config.authService.port, () => {
  console.log(`API auth run in the port ${config.authService.port}`);
});
