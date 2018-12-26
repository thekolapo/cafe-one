const express = require('express');
const dotenv = require('dotenv');
const compression = require('compression');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');
const validator = require('./middlewares/validator');
const UserController = require('./controllers/user');
const LoggerMiddleware = require('./middlewares/logger');

dotenv.config();

class App {
  constructor() {
    this.connectDB();
    this.startApp();
  }

  connectDB() {
    mongoose.set('useCreateIndex', true);
    mongoose.connect(
      config.MONGODB_URL,
      { useNewUrlParser: true },
    );
    this.db = mongoose.connection;
  }

  startApp() {
    this.app = express();

    //disable x-powered-by header
    this.app.disable('x-powered-by');

    // enable input
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // enable gzip compression
    this.app.use(compression());

    // serve static files from frontend folder
    this.app.use(express.static(path.join(__dirname, 'frontend')));

    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'frontend/index.html'));
    });

    // log requests
    this.app.use(LoggerMiddleware);

    this.app.post('/api/users', validator, UserController.create);

    this.app.use((req, res, next) => {
      res.send('Page not found');
    });
  }
}

module.exports = App;
