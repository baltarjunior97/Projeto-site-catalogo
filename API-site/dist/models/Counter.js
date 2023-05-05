"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Counter extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      counter: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Counter precisa ser um numero inteiro',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }
} exports.default = Counter;
