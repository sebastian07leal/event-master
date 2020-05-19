module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define('city', {
    name: {
      type: Sequelize.STRING,
    },
    countryCode: {
      type: Sequelize.STRING(4),
    },
    lat: {
      type: Sequelize.FLOAT(10, 4),
      comment: 'LATITUD COUNTRY STANDARD',
    },
    lng: {
      type: Sequelize.FLOAT(10, 4),
      comment: 'LONGITUD COUNTRY STANDARD',
    },
  });

  return City;
};
