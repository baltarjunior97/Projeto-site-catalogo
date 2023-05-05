import Counter from '../models/Counter';

class CounterController {
  async create(req, res) {
    try {
      const novoCounter = await Counter.create(req.body);
      return res.json(novoCounter);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const counter = await Counter.findByPk(1);

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
      const counter = await Counter.findByPk(1);

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

export default new CounterController();
