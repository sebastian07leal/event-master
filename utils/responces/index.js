exports.succes = (req, res, message, status) => {
  const statusCode = status || 200;
  const statusMessage = message || '';

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    message: statusMessage,
  });
};

exports.error = (req, res, message, status) => {
  const statusCode = status;
  const statusMessage = message;

  res.status(statusCode).send({
    error: true,
    status: statusCode,
    message: statusMessage,
  });
};
