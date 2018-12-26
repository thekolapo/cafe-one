const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'cafeone',
  serializers: bunyan.stdSerializers,
});

module.exports = logger;
