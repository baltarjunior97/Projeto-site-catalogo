"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Photo extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'campo nao pode estar vazio',
          },
        },
      },
      url: {
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${process.env.APP_URL}/images/${this.getDataValue('nome')}`;
        },
      },
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Car, { foreignKey: 'carro_id' });
  }
} exports.default = Photo;
