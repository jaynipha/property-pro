const Joi = require('joi');

const logger = require('../logger');


function validationMiddleware(schema) {

  return (req, res, next) => {
    const { error } = Joi.object()
      .keys(schema)
      .validate({
        ...req.body,
        ...req.params,
        ...req.query,
      });
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(',');
      logger.error(`App exited with error: ${message}`);
      res.status(422).json({ status: 'error', error: message });
    }
  };
}

module.exports = {
  validationMiddleware
 }