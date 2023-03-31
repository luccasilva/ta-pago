import { Response, NextFunction, Request } from 'express';
import { CreateGroupRequest } from '../../ports/requests';

const createGroupAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const createGroupAttributes: CreateGroupRequest = {
    name: req.body.name,
    description: req.body.description,
  }
  if (!createGroupAttributes.name ||
    !createGroupAttributes.description) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { createGroupAdapter }
