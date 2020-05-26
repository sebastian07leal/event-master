const express = require('express');

const router = express.Router();

const responces = require('../../utils/responces/index');
const controllers = require('./controller');

async function createUser(req, res) {
  try {
    const { body } = req;
    const responceUser = await controllers.checkParameters(body);
    responces.succes(req, res, responceUser, 201);
  } catch (err) {
    console.error(err);
  }
}

router.post('/createUser/', createUser);

module.exports = router;
