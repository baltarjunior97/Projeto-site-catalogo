"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Counter = require('../models/Counter'); var _Counter2 = _interopRequireDefault(_Counter);

class CounterController {
  async create(req, res) {
    try {
      const novoCounter = await _Counter2.default.create(req.body);
      return res.json(novoCounter);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const counter = await _Counter2.default.findByPk(1);

      if (!counter) {
        return res.status(400).json({
          errors: ['contador nao existe'],
        });
      }
      return res.json(counter);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const counter = await _Counter2.default.findByPk(1);

      if (!counter) {
        return res.status(400).json({
          errors: ['contador nao existe'],
        });
      }

      const counterEditado = await counter.update(req.body);

      return res.json(counterEditado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new CounterController();
