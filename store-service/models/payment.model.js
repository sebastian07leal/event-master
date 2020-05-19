module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define('payment', {
    description: {
      type: Sequelize.STRING,
    },
    ammount: {
      type: Sequelize.DECIMAL,
    },
    mode: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM('approved', 'cancel'),
      comment: 'approved, cancel',
    },
  });

  return Payment;
};
