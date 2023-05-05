import jwt from 'jsonwebtoken';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['login required'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id } = dados;

    req.userId = id;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['token invalido'],
    });
  }
};
