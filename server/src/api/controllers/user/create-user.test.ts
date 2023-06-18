import { Request, Response } from 'express';
import User from '../../../database/models/user';
import { createUser } from './create';
import { mockRequest, mockResponse } from '../../tests/helpers';
import { CreateUserRequest } from '../../ports/requests';
import { CreateUserResponse } from '../../ports/responses';
require('dotenv').config();

jest.mock('../../../database/models/user');

const mockUser = {
  userId: '{{valid-user-id}}',
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'hashed_password',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('createUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 401 status if the email is already used', async () => {
    const req = mockRequest(
      {
        name: 'teste',
        email: 'teste@gmail.com',
        password: '123',
      },
   ) as Request;
    const res = mockResponse() as Response;

    (User.findOne as jest.Mock).mockResolvedValue(mockUser);

    await createUser(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        email: req.body.email,
      },
    });

    console.log('Expected:', JSON.stringify(res.json));
    console.log('Expected:', JSON.stringify(res.status));

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('Email already used!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should create a new user and return the user data', async () => {
    const req = {
      body: {
        name: 'John Doe',
        email: 'johnDoe@gmail.com',
        password: '123',
      },
    } as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    (User.findOne as jest.Mock).mockResolvedValue(null);
    (User.create as jest.Mock).mockResolvedValue(mockUser);

    await createUser(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        email: req.body.email,
      },
    });

    expect(User.create).toHaveBeenCalledWith({
      name: req.body.name,
      email: req.body.email,
      password: expect.any(String),
    });

    expect(res.json).toHaveBeenCalledWith(mockUser);
  });
});