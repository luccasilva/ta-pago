import { Request, Response } from 'express';
import { PutRecordResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Record from '../../../database/models/record';
import Exercise from '../../../database/models/exercise';
import { fillRecordExercises } from './get';
require('dotenv').config();

async function updateRecordExercises(userId: string, recordId: string, exercises: string[]) {
  try {
    const onUpdateExercises = await Exercise.findAll({
      where: {
        userId: userId,
        exerciseId: exercises.map((exercise) => exercise),
      },
    });

    const updatedExerisePromises = onUpdateExercises.map(async (exercise) => {
      return await exercise.update({ recordId: recordId });
    });

    await Promise.all(updatedExerisePromises);

  } catch (error) {
    console.error('Error updating exercises: ', error);
  }
}

const addRecordExercises = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const onUpdateRecord = await Record.findOne({
    where: {
      recordId: req.body.recordId,
    },
  });

  if (!onUpdateRecord) {
    return res.status(401).json('Record does not exist!').end();
  }

  if (onUpdateRecord.get('userId') !== req.requestingUserId) {
    return res.status(401).json('You cannot update another user record!').end();
  }

  updateRecordExercises(req.requestingUserId, req.body.recordId, req.body.exercises);

  const record = await Record.findAll({
    where: {
      recordId: req.body.recordId,
    },
  });

  const response: PutRecordResponse = await fillRecordExercises(record);
  return res.json(response);
}

export { addRecordExercises }
