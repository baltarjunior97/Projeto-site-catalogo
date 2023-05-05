"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async create(req, res) {
    const { user = '', password = '' } = req.body;

    if (!user || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }
    const usuario = await _User2.default.findOne({ where: { user } });

    if (!usuario) {
      return res.status(401).json({
        errors: ['Usuario nao existe'],
      });
    }

    if (!(await usuario.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha invalida'],
      });
    }

    const { id } = usuario;
    const token = _jsonwebtoken2.default.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { id, user } });
  }
}

exports. default = new TokenController();
