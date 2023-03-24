import { Response, NextFunction, Request } from 'express';
import { DeleteExerciseRequest } from '../../ports/requests';

const deleteExerciseAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const deleteExerciseAttributes: DeleteExerciseRequest = {
    exerciseId: req.body.exerciseId,
  }
  if (!deleteExerciseAttributes.exerciseId) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { deleteExerciseAdapter }
