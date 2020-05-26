/** Esta función debe conectarse a la base de datos y validar si existe el correo,
 * en caso de existir debe devolver error al crear el usuario
 */
async function validateEmail(email) {
  console.log(`El correo es ${email}`);

  const exist = false;
  if (exist) {
    throw new Error('user already exists');
  }

  return 'User does not exist200';
}

/** Esta función se conecta con el storage yenvia la data para guardar */
async function saveUser(dataUser) {
  try {
    console.log(dataUser);
    return dataUser;
  } catch (err) {
    console.error(err.message);
    return err;
  }
}

module.exports = {
  validateEmail,
  saveUser,
};
