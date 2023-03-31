import { Request, Response } from 'express';
import { JoinGroupResponse } from '../../ports/responses';
import { isAuthRequest } from '../../adapters';
import Group from '../../../database/models/group';
import Participation from '../../../database/models/participation';

require('dotenv').config();

const joinGroup = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  const group = await Group.findOne({
    where: {
      tag: req.body.tag,
    },
  });

  if (!group) {
    return res.status(401).json('Group does not exist!').end();
  }

  const participation = await Participation.create({
    userId: req.requestingUserId,
    groupId: group.get('groupId'),
    weekGoal: 0,
    currentWeekScore: 0,
    totalScore: 0,
  });

  const response: JoinGroupResponse = group;

  return res.json(response);
}

export { joinGroup }
