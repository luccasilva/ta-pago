import { Request, Response } from 'express';
import { mockRequest, mockResponse } from '../../tests/helpers';
import Record from '../../../database/models/record';
import { createRecord } from './create';
import { CreateRecordResponse } from '../../ports/responses';

jest.mock('../../../database/models/record');

const recordMock = {
  recordId: '{{valid-record-id}}',
  userId: '{{valid-user-id}}',
  name: 'Record Name',
  description: 'Record Description',
  createdAt: '2023-05-31T12:00:00.000Z',
  updatedAt: '2023-05-31T12:00:00.000Z',
};

describe('createRecord', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest(
      { name: 'Record Name', description: 'Record Description' },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await createRecord(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid auth params' });
    expect(res.end).toHaveBeenCalled();
  });

  it('should create a new record and return it', async () => {
    const req = mockRequest(
      { name: 'Record Name', description: 'Record Description' },
      { 'x-access-token': 'jwt-valid-token' },
      'requesting-user-id'
    );
    const res = mockResponse();

    (Record.create as jest.Mock).mockResolvedValue(recordMock);

    await createRecord(req as Request, res as Response);

    expect(Record.create).toHaveBeenCalledWith({
      userId: req.requestingUserId,
      name: req.body.name,
      description: req.body.description,
    });

    const expectedResponse: CreateRecordResponse = recordMock;
    expect(res.json).toHaveBeenCalledWith(expectedResponse);
  });
});