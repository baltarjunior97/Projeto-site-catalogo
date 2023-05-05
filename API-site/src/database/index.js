import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Car from '../models/Car';
import User from '../models/User';
import Photo from '../models/Photo';
import Counter from '../models/Counter';

const models = [Car, User, Photo, Counter];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
