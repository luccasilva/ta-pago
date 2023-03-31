import { Request, Response } from 'express';
import { CreateGroupRequest } from '../../ports/requests';
import { mockRequest, mockResponse } from '../../tests/helpers';
import { createGroup } from './create';
import Group from '../../../database/models/group';

jest.mock('../../../database/models/group');

const mockGet = jest.fn((key: string) => {
  switch (key) {
    case 'groupId':
      return '{{groupId}}';
    default:
      return null;
  }
});

const groupMock = {
  id: '{{groupId}}',
  name: 'test',
  description: "test",
  tag: "{{tag}}",
  get: mockGet,
};

describe('createGroup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest<CreateGroupRequest>(
      {
        name: 'test',
        description: "test"
      },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await createGroup(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ "error": "Invalid auth params" });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a CreateGroupResponse if the creation is successful', async () => {
    const req = mockRequest<CreateGroupRequest>({
      name: 'test',
      description: 'test'
    },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (Group.create as jest.Mock).mockResolvedValue({
      get: mockGet,
      update: jest.fn().mockResolvedValue({ ...groupMock, tag: 'mockedHash' }),
    });

    const mockedGetGroupHash = jest.fn().mockReturnValue('mockedHash');
    jest.mock('./create', () => ({
      ...jest.requireActual('./create'),
      getGroupHash: mockedGetGroupHash,
    }));

    await createGroup(req as Request, res as Response);

    expect(Group.create).toHaveBeenCalledWith({
      name: req.body.name,
      description: req.body.description,
      tag: '',
    });

    expect(res.json).toHaveBeenCalledWith({ ...groupMock, tag: 'mockedHash' });
  });

});
