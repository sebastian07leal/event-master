const express = require('express');

const router = express.Router();

const responces = require('../../utils/responces/index');
const controller = require('./controller');

async function newUser(req, res) {
  try {
    const { body } = req;
    await controller.validateEmail(body.email);
    const responceSave = await controller.saveUser(body);

    responces.succes(req, res, responceSave, 201);
  } catch (err) {
    console.error(err.message);
    responces.error(req, res, err.message, 400);
  }
}

router.post('/saveUser/', newUser);

module.exports = router;
