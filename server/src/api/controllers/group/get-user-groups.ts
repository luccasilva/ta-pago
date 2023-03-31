import { Request, Response } from 'express';
import { GetUserGroupsResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Group from '../../../database/models/group';
import Participation from '../../../database/models/participation';

require('dotenv').config();

const getUserGroups = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const participations = await Participation.findAll({
    where: {
      userId: req.body.userId,
    },
  });

  if (!participations) {
    return res.json([]);
  }

  const userGroups = await Group.findAll({
    where: {
      groupId: participations.map((participation) => participation.get('groupId')),
    },
  });

  const response: GetUserGroupsResponse = userGroups;

  return res.json(response);
}

export { getUserGroups }
