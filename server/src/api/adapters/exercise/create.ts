import { Response, NextFunction, Request } from 'express';
import { CreateExerciseRequest } from '../../ports/requests';

const createExerciseAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const createExerciseAttributes: CreateExerciseRequest = {
    name: req.body.name,
    weight: req.body.weight,
    repetitions: req.body.repetitions,
    breakTime: req.body.breakTime,
  }
  if (!createExerciseAttributes.name ||
    !createExerciseAttributes.weight ||
    !createExerciseAttributes.repetitions ||
    !createExerciseAttributes.breakTime) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { createExerciseAdapter }
