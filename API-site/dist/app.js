"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _counter = require('./routes/counter'); var _counter2 = _interopRequireDefault(_counter);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _car = require('./routes/car'); var _car2 = _interopRequireDefault(_car);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _foto = require('./routes/foto'); var _foto2 = _interopRequireDefault(_foto);
require('./database');

_dotenv2.default.config();

const whiteList = [
  'http://localhost:3000',
  'https://localhost:3000',
  'http://baltarintermedios.com.br',
  'https://baltarintermedios.com.br',
  'http://app.baltarintermedios.com.br',
  'https://app.baltarintermedios.com.br',
  'http://192.168.1.143:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('not allowed by Cors'));
    }
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users/', _user2.default);
    this.app.use('/cars/', _car2.default);
    this.app.use('/tokens/', _token2.default);
    this.app.use('/fotos/', _foto2.default);
    this.app.use('/counter/', _counter2.default);
  }
}

exports. default = new App().app;
