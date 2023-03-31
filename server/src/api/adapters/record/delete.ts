import { Response, NextFunction, Request } from 'express';
import { DeleteRecordRequest } from '../../ports/requests';

const deleteRecordAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const deleteRecordAttributes: DeleteRecordRequest = {
    recordId: req.body.recordId,
  }
  if (!deleteRecordAttributes.recordId) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { deleteRecordAdapter }
