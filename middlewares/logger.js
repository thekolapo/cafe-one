const logger = require('../services/logger');

module.exports = (req, res, next) => {
  logger.info({ req });
  next();
};
