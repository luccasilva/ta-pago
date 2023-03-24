import { Request, Response } from 'express';
import User from '../../../database/models/user';
import { CreateUserRequest } from '../../ports/requests';
import { CreateUserResponse } from '../../ports/responses';
require('dotenv').config();

const createUser = async (req: Request, res: Response): Promise<Response | void> => {
  const userAttributes: CreateUserRequest = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }

  const checkUser = await User.findOne({
    where: {
      email: userAttributes.email
    },
  });

  if (checkUser) {
    return res.status(401).json('Email already used!').end();
  }

  const crypto = require('crypto');
  const hash = crypto.createHmac('SHA256', process.env.PASSWORD_KEY)
    .update(userAttributes.password)
    .digest('base64');

  const newUser = await User.create({
    name: userAttributes.name,
    email: userAttributes.email,
    password: hash,
  });

  const response: CreateUserResponse = newUser;
  return res.json(response);
}

export { createUser }
