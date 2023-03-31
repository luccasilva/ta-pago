import { Response, NextFunction, Request } from 'express';
import { CreateRecordRequest } from '../../ports/requests';

const createRecordAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const createRecordAttributes: CreateRecordRequest = {
    name: req.body.name,
    description: req.body.description,
  }
  if (!createRecordAttributes.name ||
    !createRecordAttributes.description) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { createRecordAdapter }
