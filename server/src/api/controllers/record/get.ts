import { Request, Response } from 'express';
import { GetRecordResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Record from '../../../database/models/record';
import User from '../../../database/models/user';
import Exercise from '../../../database/models/exercise';
import { RecordInterface } from '../../../interfaces';
require('dotenv').config();

async function fillRecordExercises(userRecords: Record[]): Promise<RecordInterface[]> {
  const recordsWithExercises: Promise<RecordInterface>[] = userRecords.map(async (record) => {
    const recordExercises = await Exercise.findAll({
      where: {
        recordId: record.get('recordId'),
      },
    });
    const recordData = {
      recordId: record.get('recordId'),
      userId: record.get('userId'),
      name: record.get('name'),
      description: record.get('description'),
      exercises: recordExercises
    };

    return recordData;
  });
  return Promise.all(recordsWithExercises);
}


const getRecord = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const onGetUserRecords = await User.findOne({
    where: {
      userId: req.body.userId,
    },
  });

  if (!onGetUserRecords) {
    return res.status(401).json('User does not exist!').end();
  }

  const userRecords = await Record.findAll({
    where: {
      userId: req.body.userId,
    },
  });

  const response: GetRecordResponse = await fillRecordExercises(userRecords);
  return res.json(response);
}

export { getRecord, fillRecordExercises }
