import { Request, Response } from 'express';
import User from '../../../database/models/user';
import { LoginRequest } from '../../ports/requests';
import jwt from 'jsonwebtoken';
import { LoginResponse } from '../../ports/responses';
require('dotenv').config();
const crypto = require('crypto');

const login = async (req: Request, res: Response): Promise<Response | void> => {
  const loginAttributes: LoginRequest = {
    email: req.body.email,
    password: req.body.password,
  }

  const current = await User.findOne({
    where: {
      email: loginAttributes.email
    },
  });

  if (!current) {
    return res.status(401).json('User does not exist!').end();
  }

  const hashPassword = crypto.createHmac('SHA256', process.env.PASSWORD_KEY)
    .update(loginAttributes.password)
    .digest('base64');

  if (hashPassword !== current.get('password')) {
    return res.status(401).json('Invalid password!').end();
  }

  const token = jwt.sign({
    userId: current.get('userId')
  }, process.env.SECRET || '');

  const response: LoginResponse = {
    userId: current.get('userId'),
    name: current.get('name'),
    email: current.get('email'),
    accessToken: token,
  }
  return res.json(response);
}

export { login }
