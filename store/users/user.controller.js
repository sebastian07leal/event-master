const db = require('../models');

const User = db.users;
const { Op } = db.Sequelize;

// Create and Save a new User
exports.create = (req, res) => {
  console.log('GENERANDO GET');

  // Validate request
  let types = User.rawAttributes.type.values;
  if (!req.body.email) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  if (types.includes(req.body.typeUser) == false || !req.body.typeUser) {
    console.log('Error');
    console.log(req.body.type);
    res.status(400).send({
      message: 'Type User can not be empty!',
    });
    return;
  }

  // Create a User
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    biography: req.body.biography,
    avatar: req.body.avatar ? req.body.avatar : null,
    type: req.body.typeUser,
    status: req.body.status ? req.body.status : 1,
  };

  console.log('CONECTADO EN BD');
  console.log(req.body);
  console.log(user);

  // Save User in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: 'Some error occurred while creating the user.',
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const { type } = req.query;
  const condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

// Find a single User with an email
exports.findOne = (req, res) => {
  const { id } = req.params;

  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving user with id=${id}`,
      });
    });
};

// Find a single User with an email
exports.findOneEmail = (req, res) => {
  const { email } = req.body;
  User.findAll({ where: { email: email } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const { id } = req.params;

  User.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update user with id=${id}. Maybe user was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating user with id=${id}`,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params;

  User.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete user with id=${id}. Maybe user was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete user with id=${id}`,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} users were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all users.',
      });
    });
};

// Find all status Users
exports.findAllStatus = (req, res) => {
  User.findAll({ where: { status: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.',
      });
    });
};
