import { Request, Response } from 'express';
import { CreateExerciseResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Exercise from '../../../database/models/exercise';
require('dotenv').config();

const createExercise = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const newExercise = await Exercise.create({
    userId: req.requestingUserId,
    recordId: null,
    name: req.body.name,
    weight: req.body.weight,
    repetitions: req.body.repetitions,
    breakTime: req.body.breakTime,
  });

  const response: CreateExerciseResponse = newExercise;
  return res.json(response);
}

export { createExercise }
