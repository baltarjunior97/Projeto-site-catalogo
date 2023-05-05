import Sequelize, { Model } from 'sequelize';

export default class Counter extends Model {
  static init(sequelize) {
    super.init({
      counter: {
        type: Sequelize.INTEGER,
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
}
