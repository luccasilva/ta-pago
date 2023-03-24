import { Request, Response, NextFunction } from 'express';
import { CreateUserRequest } from '../../ports/requests';

const createUserAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const createUserAttributes: CreateUserRequest = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  if (!createUserAttributes.name || !createUserAttributes.email || !createUserAttributes.password) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { createUserAdapter }
