import { Response, NextFunction, Request, RequestHandler } from 'express';
import { AuthRequest } from '../../ports/requests';
const jwt = require('jsonwebtoken');

function isAuthRequest(req: Request): req is AuthRequest {
  return 'headers' in req && 'x-access-token' in req.headers;
}

const verifyJWT: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const token = req.headers['x-access-token'];

  jwt.verify(token, process.env.SECRET, (error: Error, decoded: any) => {
    if (error) {
      return res.status(401).json(error).end();
    }
    req.requestingUserId = decoded.userId;
    next();
  })
}

export { verifyJWT, isAuthRequest }
