import Sequelize, { Model } from 'sequelize';

export default class Car extends Model {
  static init(sequelize) {
    super.init({
      ano: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 50],
            msg: 'Ano invalido',
          },
        },
      },
      modelo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Modelo precisa ter entre 2 e 255 letras',
          },
        },
      },
      km: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'cor precisa ter entre 3 e 255 letras',
          },
        },
      },
      obs: {
        type: Sequelize.STRING,
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
}
