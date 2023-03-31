import { Request, Response } from 'express';
import { DeleteRecordResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Record from '../../../database/models/record';
import Exercise from '../../../database/models/exercise';
require('dotenv').config();

async function updateExercisesRecordIdToNull(recordId: string) {
  try {
    const exercisesToUpdate = await Exercise.findAll({
      where: {
        recordId: recordId,
      },
    });
    const updatePromises = exercisesToUpdate.map(async (exercise) => {
      return await exercise.update({ recordId: null });
    });
    await Promise.all(updatePromises);

  } catch (error) {
    console.error('Error updating exercises: ', error);
  }
}

const deleteRecord = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const onDeleteRecord = await Record.findOne({
    where: {
      recordId: req.body.recordId,
    },
  });

  if (!onDeleteRecord) {
    return res.status(401).json('Record does not exist!').end();
  }

  if (onDeleteRecord.get('userId') !== req.requestingUserId) {
    return res.status(401).json('You cannot remove another user record!').end();
  }

  await updateExercisesRecordIdToNull(req.body.recordId);

  await Record.destroy({
    where: {
      recordId: req.body.recordId,
    },
  });

  const response: DeleteRecordResponse = onDeleteRecord;
  return res.json(response);
}

export { deleteRecord }
