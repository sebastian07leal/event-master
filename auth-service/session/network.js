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

async function login(req, res) {
  const { username } = req.body;
  const { password } = req.body;
  try {
    const responce = await controllers.login(username, password);
    console.log(responce);
    responces.succes(req, res, responce, 200);
  } catch (err) {
    responces.error(req, res, err, 401);
  }
}

router.post('/createUser/', createUser);
router.post('/login', login);

module.exports = router;
