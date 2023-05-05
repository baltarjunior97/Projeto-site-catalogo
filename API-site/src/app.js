import express from 'express';
import dotenv from 'dotenv';
import { resolve } from 'path';
import helmet from 'helmet';
import cors from 'cors';
import homeRoutes from './routes/home';
import counterRoutes from './routes/counter';
import userRoutes from './routes/user';
import carRoutes from './routes/car';
import tokenRoutes from './routes/token';
import fotoRoutes from './routes/foto';
import './database';

dotenv.config();

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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/cars/', carRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/fotos/', fotoRoutes);
    this.app.use('/counter/', counterRoutes);
  }
}

export default new App().app;
