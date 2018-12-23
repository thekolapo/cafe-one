const httpStatus = require('http-status-codes');
const User = require('../models/user');

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({
      message: 'Successfully registered user',
      data: user,
      status: 'success',
    });
  } catch (err) {
    //log here

    if (err && err.code === 11000)
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Oops! That email address has already been registered.',
        status: 'error',
      });

    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: err.message,
      status: 'error',
    });
  }
};
