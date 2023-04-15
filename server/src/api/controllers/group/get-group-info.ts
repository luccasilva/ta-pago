import { Request, Response } from 'express';
import { isAuthRequest } from '../../adapters';
import Participation from '../../../database/models/participation';
import User from '../../../database/models/user';
import GetGroupInfoResponse from '../../ports/responses/group/get-group-info-response';
import { ParticipationInterface, UserInterface } from '../../../interfaces';

require('dotenv').config();

const getUsersGroupInfo = async (participations: any[]): Promise<any[]> => {
  const usersGroupInfoPromises = participations.map(async (participation) => {
    const user = await User.findOne({
      where: {
        userId: participation.get('userId'),
      },
    });

    if (!user) {
      return;
    }

    const userInfo: Omit<UserInterface, 'password' | 'email' | 'createdAt' | 'updatedAt'> = {
      userId: user.get('userId'),
      name: user.get('name'),
    };

    const participationInfo: Omit<ParticipationInterface, 'userId' | 'createdAt' | 'updatedAt'> = {
      participationId: participation.get('participationId'),
      groupId: participation.get('groupId'),
      weekGoal: participation.get('weekGoal'),
      currentWeekScore: participation.get('currentWeekScore'),
      totalScore: participation.get('totalScore'),
    };
    return {
      user: userInfo,
      info: participationInfo,
    };
  });

  return await Promise.all(usersGroupInfoPromises);
};


const getGroupInfo = async (req: Request, res: Response): Promise<Response | void> => {
  if (!isAuthRequest(req)) {
    return res.status(400).json({ error: 'Invalid auth params' }).end();
  }

  console.log(req.body.groupId)

  const participations = await Participation.findAll({
    where: {
      groupId: req.body.groupId,
    },
  });

  if (!participations) {
    return res.json([]);
  }

  const usersInGroup = await User.findAll({
    where: {
      userId: participations.map((participation) => participation.get('userId')),
    },
  });

  if (!usersInGroup) {
    return res.json([]);
  }

  const response: GetGroupInfoResponse[] = await getUsersGroupInfo(participations);

  return res.json(response);
}

export { getGroupInfo, getUsersGroupInfo }
