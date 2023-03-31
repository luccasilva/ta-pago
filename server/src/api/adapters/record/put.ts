import { Response, NextFunction, Request } from 'express';
import { PutRecordRequest } from '../../ports/requests';

const putRecordAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const putRecordAttributes: PutRecordRequest = {
    recordId: req.body.recordId,
    exercises: req.body.exercises,
  }
  if (!putRecordAttributes.exercises ||
    !putRecordAttributes.recordId) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { putRecordAdapter }
