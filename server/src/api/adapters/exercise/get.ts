import { Response, NextFunction, Request } from 'express';
import { GetExerciseRequest } from '../../ports/requests';

const getExerciseAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const getExerciseAttributes: GetExerciseRequest = {
    userId: req.body.userId,
  }
  if (!getExerciseAttributes.userId) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { getExerciseAdapter }
