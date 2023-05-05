"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Car = require('../models/Car'); var _Car2 = _interopRequireDefault(_Car);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class CarController {
  async create(req, res) {
    try {
      const novoCar = await _Car2.default.create(req.body);
      return res.json(novoCar);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const car = await _Car2.default.findAll({
        attributes: ['id', 'modelo', 'ano', 'cor', 'km', 'obs', 'profile_picture'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'nome'],
        },
      });
      return res.json(car);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['faltando ID'],
        });
      }
      const car = await _Car2.default.findByPk(id, {
        attributes: ['id', 'modelo', 'ano', 'cor', 'km', 'obs', 'profile_picture'],
        order: [['id', 'DESC'], [_Photo2.default, 'id', 'DESC']],
        include: {
          model: _Photo2.default,
          attributes: ['url', 'nome'],
        },
      });

      if (!car) {
        return res.status(400).json({
          errors: ['carro nao existe'],
        });
      }
      return res.json(car);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['id nao enviado'],
        });
      }
      const car = await _Car2.default.findByPk(req.params.id);

      if (!car) {
        return res.status(400).json({
          errors: ['carro nao existe'],
        });
      }

      await car.destroy();

      return res.json(car);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['id nao enviado'],
        });
      }
      const car = await _Car2.default.findByPk(req.params.id);

      if (!car) {
        return res.status(400).json({
          errors: ['carro nao existe'],
        });
      }

      const carEditado = await car.update(req.body);

      return res.json(carEditado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new CarController();
