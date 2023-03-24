import { Request, Response } from 'express';
import { GetExerciseRequest } from '../../ports/requests';
import { mockRequest, mockResponse } from '../../tests/helpers';

import User from '../../../database/models/user';
import Exercise from '../../../database/models/exercise';
import { getExercise } from './get';
import { GetExerciseResponse } from '../../ports/responses';

jest.mock('../../../database/models/exercise');
jest.mock('../../../database/models/user');


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

const exercisesMock = [{
  id: '{{exercise-id}}}',
  userId: '{{exercise-user-id}}',
  recordId: null,
  name: 'test',
  weight: "10",
  repetitions: "10",
  breakTime: "10",
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
}];

describe('getExercise', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest<GetExerciseRequest>(
      {
        userId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
      },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await getExercise(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ "error": "Invalid auth params" });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if user does not exist', async () => {
    const req = mockRequest<GetExerciseRequest>(
      {
        userId: '{{invalid-user-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (User.findOne as jest.Mock).mockResolvedValue(null);

    await getExercise(req as Request, res as Response);

    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        userId: req.body.userId,
      },
    })

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('User does not exist!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should return GetExerciseResponse if the get is successful', async () => {
    const req = mockRequest<GetExerciseRequest>(
      {
        userId: '{{valid-user-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-user-id}}',
    );
    const res = mockResponse();

    (User.findOne as jest.Mock).mockResolvedValue(userMock);

    (Exercise.findAll as jest.Mock).mockResolvedValue(exercisesMock);

    await getExercise(req as Request, res as Response);

    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        userId: req.body.userId,
      },
    })
    expect(Exercise.findAll).toHaveBeenCalledWith({
      where: {
        userId: req.body.userId,
      },
    })
    expect(res.json).toHaveBeenCalledWith(exercisesMock);
  });
});
