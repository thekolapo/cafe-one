const joi = require('joi');
const httpStatus = require('http-status-codes');

const UserSignUpSchema = joi.object({
  email_address: joi
    .string()
    .email()
    .required()
    .trim()
    .lowercase(),
  full_name: joi
    .string()
    .required()
    .trim()
    .lowercase(),
  phone_number: joi
    .string()
    .required()
    .trim(),
  recieve_emails: joi.boolean(),
});

const parseError = error => {
  const parsedError = error.details.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.context.key]: curr.message,
    }),
    {}
  );
  return parsedError;
};

module.exports = (req, res, next) => {
  const { error, value } = joi.validate(req.body, UserSignUpSchema, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (!error) {
    req.body = value;
    return next();
  }

  // log console.error

  res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
    message: 'One or more validation errors occured',
    error: parseError(error),
    status: 'error',
  });
};
