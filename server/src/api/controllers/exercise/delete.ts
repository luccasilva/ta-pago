import { Request, Response } from 'express';
import { DeleteExerciseResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Exercise from '../../../database/models/exercise';
require('dotenv').config();

const deleteExercise = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const onDeleteExercise = await Exercise.findOne({
    where: {
      exerciseId: req.body.exerciseId,
    },
  });

  if (!onDeleteExercise) {
    return res.status(401).json('Exercise does not exist!').end();
  }

  if (onDeleteExercise.get('userId') !== req.requestingUserId) {
    return res.status(401).json('You cannot remove another user exercise!').end();
  }

  await Exercise.destroy({
    where: {
      exerciseId: req.body.exerciseId,
    },
  });

  const response: DeleteExerciseResponse = onDeleteExercise;
  return res.json(response);
}

export { deleteExercise }
