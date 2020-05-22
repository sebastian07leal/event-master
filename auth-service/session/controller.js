const bcrypt = require('bcrypt');
const axios = require('axios');

async function checkParameters(body) {
  const data = {
    name: body.name,
    email: body.email,
    password: body.password,
    biography: body.biography,
    typeUser: body.typeUser,
  };

  if (
    !data.name ||
    !data.email ||
    !data.password ||
    !data.biography ||
    !data.typeUser
  ) {
    console.log('Es necesario que los parametros sean definidos');
    return new Error('the parameter name is necessary');
  }

  try {
    const userSave = await this.encryptPassword(data);
    const res = await this.sendDataUser(userSave);
    return res;
  } catch (err) {
    console.log(err);
    console.log('!Implement err in controller function user save');
  }

  return 'Implement data';
}

async function encryptPassword(object) {
  try {
    const encrypt = await bcrypt.hash(object.password, 5);
    const dataUpdate = object;
    dataUpdate.password = encrypt;
    return dataUpdate;
  } catch (err) {
    console.err(err.message);
    return err.message;
  }
}

async function sendDataUser(data) {
  try {
    const res = await axios.post('http://localhost:3000/saveUser/', data);
    return res.data;
  } catch (err) {
    console.log(err.message);
    return '!Implemented Error';
  }
}

module.exports = {
  checkParameters,
  encryptPassword,
  sendDataUser,
};
