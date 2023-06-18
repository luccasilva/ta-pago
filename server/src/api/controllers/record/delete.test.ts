import { Request, Response } from 'express';
import { mockRequest, mockResponse } from '../../tests/helpers';
import Record from '../../../database/models/record';
import Exercise from '../../../database/models/exercise';
import { deleteRecord } from './delete';
import { DeleteRecordResponse } from '../../ports/responses';

jest.mock('../../../database/models/record');
jest.mock('../../../database/models/exercise');

const recordMock = {
    recordId: '{{valid-record-id}}',
    userId: '{{valid-user-id}}',
    name: 'Record Name',
    description: 'Record Description',
    createdAt: '2023-05-31T12:00:00.000Z',
    updatedAt: '2023-05-31T12:00:00.000Z',
    get: jest.fn((key: string) => {
      switch (key) {
        case 'userId':
          return '{{valid-user-id}}';
        default:
          return null;
      }
    }),
  };

const exercisesMock = [
  {
    exerciseId: '{{valid-exercise-id-1}}',
    recordId: '{{valid-record-id}}',
    name: 'Exercise 1',
    createdAt: '2023-05-31T12:00:00.000Z',
    updatedAt: '2023-05-31T12:00:00.000Z',
    get: jest.fn((key: string) => {
      switch (key) {
        case 'recordId':
          return '{{valid-record-id}}';
        default:
          return null;
      }
    }),
    update: jest.fn().mockResolvedValue(null),
  },
  {
    exerciseId: '{{valid-exercise-id-2}}',
    recordId: '{{valid-record-id}}',
    name: 'Exercise 2',
    createdAt: '2023-05-31T12:00:00.000Z',
    updatedAt: '2023-05-31T12:00:00.000Z',
    get: jest.fn((key: string) => {
      switch (key) {
        case 'recordId':
          return '{{valid-record-id}}';
        default:
          return null;
      }
    }),
    update: jest.fn().mockResolvedValue(null),
  },
];

describe('deleteRecord', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest(
      { recordId: '{{valid-record-id}}' },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await deleteRecord(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid auth params' });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if the record does not exist', async () => {
    const req = mockRequest(
      { recordId: '{{valid-record-id}}' },
      { 'x-access-token': 'jwt-valid-token' },
      'requesting-user-id'
    );
    const res = mockResponse();

    (Record.findOne as jest.Mock).mockResolvedValue(null);

    await deleteRecord(req as Request, res as Response);

    expect(Record.findOne).toHaveBeenCalledWith({
      where: {
        recordId: req.body.recordId,
      },
    });

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('Record does not exist!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if the requesting user is not the owner of the record', async () => {
    const req = mockRequest(
      { recordId: '{{valid-record-id}}' },
      { 'x-access-token': 'jwt-valid-token' },
      'requesting-user-id'
    );
    const res = mockResponse();

    (Record.findOne as jest.Mock).mockResolvedValue({
      ...recordMock,
      get: jest.fn((key: string) => {
        switch (key) {
          case 'userId':
            return 'other-user-id';
          default:
            return null;
        }
      }),
    });

    await deleteRecord(req as Request, res as Response);

    expect(Record.findOne).toHaveBeenCalledWith({
      where: {
        recordId: req.body.recordId,
      },
    });

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('You cannot remove another user record!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should update exercises recordId to null and delete the record', async () => {
    const req = mockRequest(
      { recordId: '{{valid-record-id}}' },
      { 'x-access-token': 'jwt-valid-token' },
      'requesting-user-id'
    );
    const res = mockResponse();

    (Record.findOne as jest.Mock).mockResolvedValue({
      ...recordMock,
      get: jest.fn((key: string) => {
        switch (key) {
          case 'userId':
            return 'requesting-user-id';
          default:
            return null;
        }
      }),
    });

    (Exercise.findAll as jest.Mock).mockResolvedValue(exercisesMock);

    await deleteRecord(req as Request, res as Response);

    expect(Record.findOne).toHaveBeenCalledWith({
      where: {
        recordId: req.body.recordId,
      },
    });

    expect(Exercise.findAll).toHaveBeenCalledWith({
      where: {
        recordId: req.body.recordId,
      },
    });

    expect(exercisesMock[0].update).toHaveBeenCalledWith({ recordId: null });
    expect(exercisesMock[1].update).toHaveBeenCalledWith({ recordId: null });

    expect(Record.destroy).toHaveBeenCalledWith({
      where: {
        recordId: req.body.recordId,
      },
    });

    const expectedResponse: DeleteRecordResponse = recordMock;
    const receivedResponse = (res.json as jest.Mock).mock.calls[0][0];
  
    console.log('Expected:', JSON.stringify(expectedResponse));
    console.log('Received:', JSON.stringify(receivedResponse));
  
    expect(JSON.stringify(receivedResponse)).toEqual(JSON.stringify(expectedResponse));
  });
});