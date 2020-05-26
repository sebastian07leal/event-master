const jwt = require('jsonwebtoken');
const config = require('../../config');

async function generateToken(data) {
  const token = await jwt.sign(data, config.authService.secret);
  return token;
}

module.exports = {
  generateToken,
};
