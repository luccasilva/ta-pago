import { Request, Response } from 'express';
import { CreateExerciseRequest } from '../../ports/requests';
import { mockRequest, mockResponse } from '../../tests/helpers';

import { createExercise } from './create';
import Exercise from '../../../database/models/exercise';

jest.mock('../../../database/models/exercise');

const exerciseMock = {
  id: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
  userId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
  recordId: null,
  name: 'test',
  weight: "10",
  repetitions: "10",
  breakTime: "10",
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
};

describe('createExercise', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 400 status if the req does not match Auth attributes', async () => {
    const req = mockRequest<CreateExerciseRequest>(
      {
        name: 'test',
        weight: "10",
        repetitions: "10",
        breakTime: "10"
      },
      { invalidAuthParam: 'xxx' }
    );
    const res = mockResponse();

    await createExercise(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ "error": "Invalid auth params" });
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a CreateExerciseResponse if the creation is successful', async () => {
    const req = mockRequest<CreateExerciseRequest>({
      name: 'test',
      weight: "10",
      repetitions: "10",
      breakTime: "10"
    },
      { 'x-access-token': 'jwt-valid-token' },
      '{{request-userId-mock}}',
    );
    const res = mockResponse();

    (Exercise.create as jest.Mock).mockResolvedValue(exerciseMock);

    await createExercise(req as Request, res as Response);

    expect(Exercise.create).toHaveBeenCalledWith({
      userId: req.requestingUserId,
      recordId: null,
      name: req.body.name,
      weight: req.body.weight,
      repetitions: req.body.repetitions,
      breakTime: req.body.breakTime,
    });

    expect(res.json).toHaveBeenCalledWith(exerciseMock);
  });

});
