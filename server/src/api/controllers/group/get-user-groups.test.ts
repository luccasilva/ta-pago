import { Request, Response } from 'express';
import { getUserGroups } from './get-user-groups';
import { mockRequest, mockResponse } from '../../tests/helpers';
import Group from '../../../database/models/group';
import Participation from '../../../database/models/participation';

jest.mock('../../../database/models/group');
jest.mock('../../../database/models/participation');

describe('getUserGroups', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest(
      {},
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await getUserGroups(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid auth params' });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return an empty array if there are no participations', async () => {
    const req = mockRequest(
      {},
      { 'x-access-token': 'jwt-valid-token' },
      { userId: 'user-id' }
    );
    const res = mockResponse();

    (Participation.findAll as jest.Mock).mockResolvedValue(null);

    await getUserGroups(req as Request, res as Response);

    expect(Participation.findAll).toHaveBeenCalledWith({
      where: {
        userId: req.body.userId,
      },
    });
    expect(res.json).toHaveBeenCalledWith([]);
  });


  it('should return user groups based on participations', async () => {
    const req = mockRequest(
      {},
      { 'x-access-token': 'jwt-valid-token' },
      { userId: 'user-id' }
    );
    const res = mockResponse();

    const participationsMock = [
      { get: jest.fn().mockReturnValue('group-id-1') },
      { get: jest.fn().mockReturnValue('group-id-2') },
    ];

    const userGroupsMock = [
      { groupId: 'group-id-1', name: 'Group 1' },
      { groupId: 'group-id-2', name: 'Group 2' },
    ];

    (Participation.findAll as jest.Mock).mockResolvedValue(participationsMock);
    (Group.findAll as jest.Mock).mockResolvedValue(userGroupsMock);

    await getUserGroups(req as Request, res as Response);

    expect(Participation.findAll).toHaveBeenCalledWith({
      where: {
        userId: req.body.userId,
      },
    });
    expect(Group.findAll).toHaveBeenCalledWith({
      where: {
        groupId: participationsMock.map((participation) => participation.get('groupId')),
      },
    });
    expect(res.json).toHaveBeenCalledWith(userGroupsMock);
  });
});