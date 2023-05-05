"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Car extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      ano: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 50],
            msg: 'Ano invalido',
          },
        },
      },
      modelo: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Modelo precisa ter entre 2 e 255 letras',
          },
        },
      },
      km: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      cor: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'cor precisa ter entre 3 e 255 letras',
          },
        },
      },
      obs: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Observação precisa ter entre 3 e 255 letras',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'carro_id' });
    this.belongsTo(models.Photo, { foreignKey: 'profile_picture' });
  }
} exports.default = Car;
