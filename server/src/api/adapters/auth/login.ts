import { Request, Response, NextFunction } from 'express';
import { LoginRequest } from '../../ports/requests';

const loginAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const loginAttributes: LoginRequest = {
    email: req.body.email,
    password: req.body.password,
  }
  if (!loginAttributes.email || !loginAttributes.password) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { loginAdapter }
