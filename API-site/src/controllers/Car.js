import Car from '../models/Car';
import Photo from '../models/Photo';

class CarController {
  async create(req, res) {
    try {
      const novoCar = await Car.create(req.body);
      return res.json(novoCar);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const car = await Car.findAll({
        attributes: ['id', 'modelo', 'ano', 'cor', 'km', 'obs', 'profile_picture'],
        order: [['id', 'DESC'], [Photo, 'id', 'ASC']],
        include: {
          model: Photo,
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
      const car = await Car.findByPk(id, {
        attributes: ['id', 'modelo', 'ano', 'cor', 'km', 'obs', 'profile_picture'],
        order: [['id', 'DESC'], [Photo, 'id', 'ASC']],
        include: {
          model: Photo,
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
      const car = await Car.findByPk(req.params.id);

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
      const car = await Car.findByPk(req.params.id);

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

export default new CarController();
