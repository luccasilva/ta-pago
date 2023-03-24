import { Request, Response } from 'express';
import { DeleteExerciseRequest } from '../../ports/requests';
import { mockRequest, mockResponse } from '../../tests/helpers';

import Exercise from '../../../database/models/exercise';
import { deleteExercise } from './delete';

jest.mock('../../../database/models/exercise');

const mockGet = jest.fn((key: string) => {
  switch (key) {
    case 'userId':
      return '{{exercise-user-id}}';
    default:
      return null;
  }
});

const exerciseMock = {
  id: '{{exercise-id}}}',
  userId: '{{exercise-user-id}}',
  recordId: null,
  name: 'test',
  weight: "10",
  repetitions: "10",
  breakTime: "10",
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
  get: mockGet,
};

describe('deleteExercise', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest<DeleteExerciseRequest>(
      {
        exerciseId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
      },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await deleteExercise(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ "error": "Invalid auth params" });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if exercise does not exist', async () => {
    const req = mockRequest<DeleteExerciseRequest>(
      {
        exerciseId: '{{invalid-exercise-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (Exercise.findOne as jest.Mock).mockResolvedValue(null);

    await deleteExercise(req as Request, res as Response);

    expect(Exercise.findOne).toHaveBeenCalledWith({
      where: {
        exerciseId: req.body.exerciseId,
      },
    }),
      expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('Exercise does not exist!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if deleting another user exercise', async () => {
    const req = mockRequest<DeleteExerciseRequest>(
      {
        exerciseId: '{{another-user-exercise-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (Exercise.findOne as jest.Mock).mockResolvedValue(exerciseMock);

    await deleteExercise(req as Request, res as Response);

    expect(Exercise.findOne).toHaveBeenCalledWith({
      where: {
        exerciseId: req.body.exerciseId,
      },
    })

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('You cannot remove another user exercise!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a DeleteExerciseResponse if the deletion is successful', async () => {
    const req = mockRequest<DeleteExerciseRequest>(
      {
        exerciseId: '{{another-user-exercise-id}}',
      },
      { 'x-access-token': 'jwt-valid-token' },
      '{{exercise-user-id}}',
    );
    const res = mockResponse();

    (Exercise.findOne as jest.Mock).mockResolvedValue(exerciseMock);

    await deleteExercise(req as Request, res as Response);

    expect(Exercise.findOne).toHaveBeenCalledWith({
      where: {
        exerciseId: req.body.exerciseId,
      },
    })

    expect(res.json).toHaveBeenCalledWith(exerciseMock);
  });
});
