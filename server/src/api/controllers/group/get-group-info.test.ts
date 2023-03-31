import { Request, Response } from 'express';
import { mockRequest, mockResponse } from '../../tests/helpers';

import User from '../../../database/models/user';
import Participation from '../../../database/models/participation';
import { getGroupInfo, getUsersGroupInfo } from './get-group-info';
import { GetGroupInfoRequest } from '../../ports/requests';

jest.mock('../../../database/models/user');
jest.mock('../../../database/models/participation');

const mockGet = jest.fn((key: string) => {
  switch (key) {
    case 'userId':
      return '{{valid-user-id}}';
    default:
      return null;
  }
});

const userMock = {
  dataValues: {
    userId: '{{valid-user-id}}',
    email: 'test@example.com',
    name: 'test',
    password: 'hashed_user_mock_password',
    createdAt: '2023-04-16T19:17:52.965Z',
    updatedAt: '2023-04-16T19:17:52.968Z'
  },
}

const participationsMock = [{
  participationId: "{{participation-id}}",
  userId: "{{valid-user-id}}",
  groupId: "{valid-group-id}}",
  weekGoal: 5,
  currentWeekScore: 3,
  totalScore: 20,
  createdAt: new Date("2023-05-15"),
  updatedAt: new Date("2023-05-17"),
  get: mockGet,
}];

describe('getGroupInfo', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest<GetGroupInfoRequest>(
      {
        groupId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
      },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await getGroupInfo(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ "error": "Invalid auth params" });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return an empty array if there is none participation', async () => {
    const req = mockRequest<GetGroupInfoRequest>(
      {
        groupId: '{{valid-group-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (Participation.findAll as jest.Mock).mockResolvedValue(null);

    await getGroupInfo(req as Request, res as Response);

    expect(Participation.findAll).toHaveBeenCalledWith({
      where: {
        groupId: req.body.groupId,
      },
    })

    expect(res.json).toHaveBeenCalledWith([]);
  });

  it('should return an empty array if there is an invalid user in participations', async () => {
    const req = mockRequest<GetGroupInfoRequest>(
      {
        groupId: '{{valid-group-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (Participation.findAll as jest.Mock).mockResolvedValue(participationsMock);
    (User.findAll as jest.Mock).mockResolvedValue(null);


    await getGroupInfo(req as Request, res as Response);

    expect(Participation.findAll).toHaveBeenCalledWith({
      where: {
        groupId: req.body.groupId,
      },
    })

    expect(User.findAll).toHaveBeenCalledWith({
      where: {
        userId: ["{{valid-user-id}}"],
      },
    })

    expect(res.json).toHaveBeenCalledWith([]);
  });

});
