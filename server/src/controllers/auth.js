const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = {

  async register(req, res) {
    const { email, password } = req.body;

    const crypto = require('crypto');
    const secret = process.env.PASSWORD_KEY;
    const hash = crypto.createHmac('SHA256', secret)
      .update(password)
      .digest('base64');

    const user = await User.create({
      email: email,
      password: hash
    });
    return res.json(user);
  },

  async login(req, res) {
    const { email, password } = req.body;

    var crypto = require('crypto')
    const secret = process.env.PASSWORD_KEY;
    const hash = crypto.createHmac('SHA256', secret)
      .update(password)
      .digest('base64');

    const current = await User.findOne({
      where: {
        email: email
      },
    });

    if (hash === current.password) {
      const token = jwt.sign({
        userId: current.userId, options: {
          expiresIn: 86400
        }
      }, process.env.SECRET);
      return res.json({ accessToken: token });
    } else {
      res.status(401).end();
    }
  },

  async verifyJWT(req, res, next) {
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.SECRET, (error, decoded) => {
      if (error) return res.status(401).end();
      req.userId = decoded.userId;
      next();
    })
  }
}