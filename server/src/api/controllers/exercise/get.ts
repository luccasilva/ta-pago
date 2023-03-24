import { Request, Response } from 'express';
import { GetExerciseResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Exercise from '../../../database/models/exercise';
import User from '../../../database/models/user';
require('dotenv').config();

const getExercise = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const onGetUserExercises = await User.findOne({
    where: {
      userId: req.body.userId,
    },
  });

  if (!onGetUserExercises) {
    return res.status(401).json('User does not exist!').end();
  }

  const userExercises = await Exercise.findAll({
    where: {
      userId: req.body.userId,
    },
  });

  const response: GetExerciseResponse = userExercises;
  return res.json(response);
}

export { getExercise }
