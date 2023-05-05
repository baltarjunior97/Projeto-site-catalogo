import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { user = '', password = '' } = req.body;

    if (!user || !password) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      });
    }
    const usuario = await User.findOne({ where: { user } });

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
    const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { id, user } });
  }
}

export default new TokenController();
