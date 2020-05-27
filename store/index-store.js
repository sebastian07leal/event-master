const express = require('express');
const db = require('./models');
const cors = require('cors');
const users = require('./users/network');

const app = express();

let corsOptions = {
  origin: 'http://localhost:8080',
};
app.use(cors(corsOptions));

const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: 'sponsor',
  });

  Role.create({
    id: 2,
    name: 'organizer',
  });

  Role.create({
    id: 3,
    name: 'admin',
  });
}
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//db.sequelize.sync();
//Drop tables

/*
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync database.');
  initial();
});
*/

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Mysql Server.' });
});

app.use('/api/v1/users', users);
// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Mysql is running on port ${PORT}.`);
});
