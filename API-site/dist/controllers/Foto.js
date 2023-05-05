"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multer4.default).array('fotos');

class FotoController {
  async create(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const arquivos = req.files;
        const { carro_id } = req.body;
        arquivos.forEach(async (arquivo) => {
          const nome = arquivo.filename;
          await _Photo2.default.create({ nome, carro_id });
        });
        return res.json(arquivos);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ['Carro não existe'],
        });
      }
    });
  }
}

exports. default = new FotoController();
