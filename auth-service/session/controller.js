const bcrypt = require('bcrypt');
const axios = require('axios');
const jwt = require('../jwt/index');

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
    const dataTokeniced = await jwt.generateToken(res.data);

    return dataTokeniced;
  } catch (err) {
    console.log(err.message);
    return '!Implemented Error';
  }
}

/**
 * Primero de debe hacer una consulta get a store para saber
 * si el usuario enviado existe de no ser el caso
 * se enviara el error. En caso de que el usuario exista se compara el password
 * ingresado con el password almacenado
 */

async function login(user, pass) {
  try {
    //por el momento los datos estan quemados
    const existUser = true;
    const tokenData =
      '$2b$05$OIynn59oNf9yM.mE9EKcDu4Yz27Ft4rmbwntEFt2EKYKCUFV49lrC';

    if (existUser) {
      const token = await bcrypt.compare(pass, tokenData);

      if (token) {
        //Debe cifrar el nombre contraseña y estado del usuario
        return 'es correcto';
      }
    }
  } catch (err) {
    console.error(err);
  }

  return 'controller Auth';
}

module.exports = {
  checkParameters,
  encryptPassword,
  sendDataUser,
  login,
};
