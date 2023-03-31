import { Request, Response } from 'express';
import { CreateRecordResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Record from '../../../database/models/record';
require('dotenv').config();

const createRecord = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const newRecord = await Record.create({
    userId: req.requestingUserId,
    name: req.body.name,
    description: req.body.description,
  });

  const response: CreateRecordResponse = newRecord;
  return res.json(response);
}

export { createRecord }
