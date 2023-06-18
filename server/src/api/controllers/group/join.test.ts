import { Request, Response } from 'express';
import { mockRequest, mockResponse } from '../../tests/helpers';
import Group from '../../../database/models/group';
import Participation from '../../../database/models/participation';
import { joinGroup } from './join';
import { JoinGroupResponse } from '../../ports/responses';
import { JoinGroupRequest } from '../../ports/requests';

jest.mock('../../../database/models/group');
jest.mock('../../../database/models/participation');

const groupMock = {
  get: jest.fn((key: string) => {
    switch (key) {
      case 'groupId':
        return '{{valid-group-id}}';
      case 'name':
        return 'Group Name';
      case 'description':
        return 'Group Description';
      case 'tag':
        return 'group-tag';
      default:
        return null;
    }
  }),
};

describe('joinGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest<JoinGroupRequest>(
      { tag: 'group-tag' },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await joinGroup(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid auth params' });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if the group does not exist', async () => {
    const req = mockRequest<JoinGroupRequest>(
      { tag: 'group-tag' },
      { 'x-access-token': 'jwt-valid-token' },
      'requesting-user-id'
    );
    const res = mockResponse();

    (Group.findOne as jest.Mock).mockResolvedValue(null);

    await joinGroup(req as Request, res as Response);

    expect(Group.findOne).toHaveBeenCalledWith({
      where: {
        tag: req.body.tag,
      },
    });

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('Group does not exist!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should create a new participation and return the group', async () => {
    const req = mockRequest<JoinGroupRequest>(
      { tag: 'group-tag' },
      { 'x-access-token': 'jwt-valid-token' },
      'requesting-user-id'
    );
    const res = mockResponse();

    (Group.findOne as jest.Mock).mockResolvedValue(groupMock);
    (Participation.create as jest.Mock).mockResolvedValue({
      get: jest.fn((key: string) => {
        switch (key) {
          case 'groupId':
            return '{{valid-group-id}}';
          default:
            return null;
        }
      }),
    });

    await joinGroup(req as Request, res as Response);

    expect(Group.findOne).toHaveBeenCalledWith({
      where: {
        tag: req.body.tag,
      },
    });

    expect(Participation.create).toHaveBeenCalledWith({
      userId: req.requestingUserId,
      groupId: '{{valid-group-id}}',
      weekGoal: 0,
      currentWeekScore: 0,
      totalScore: 0,
    });

    expect(res.json).toHaveBeenCalledWith(groupMock);
  });
});