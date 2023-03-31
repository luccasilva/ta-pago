import { Response, NextFunction, Request } from 'express';
import { GetRecordRequest } from '../../ports/requests';

const getRecordAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const getRecordAttributes: GetRecordRequest = {
    userId: req.body.userId,
  }
  if (!getRecordAttributes.userId) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { getRecordAdapter }
