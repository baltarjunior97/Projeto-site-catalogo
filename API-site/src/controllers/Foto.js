import multer from 'multer';

import multerConfig from '../config/multer';

import Photo from '../models/Photo';

const upload = multer(multerConfig).array('fotos');

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
          await Photo.create({ nome, carro_id });
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

export default new FotoController();
