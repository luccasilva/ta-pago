import { Request, Response } from 'express';
import { CreateGroupResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Group from '../../../database/models/group';
import * as crypto from 'crypto';

require('dotenv').config();

function getGroupHash(id: string, key: string): string {
  const hash = crypto.createHmac('SHA256', key)
    .update(id)
    .digest('base64')
    .slice(0, 6)
    .replace('+', 'A')
    .replace('/', '0');
  return hash;
}

const createGroup = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const newGroup = await Group.create({
    name: req.body.name,
    description: req.body.description,
    tag: '',
  });

  const response: CreateGroupResponse = await newGroup.update({
    tag: getGroupHash(newGroup.get('groupId'), process.env.SECRET || ''),
  })

  return res.json(response);
}

export { createGroup, getGroupHash }
