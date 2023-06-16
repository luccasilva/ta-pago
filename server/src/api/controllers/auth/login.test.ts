import { Request, Response } from 'express';
import User from '../../../database/models/user';
import { LoginRequest } from '../../ports/requests';
import { login } from './login';
import { mockRequest, mockResponse } from '../../tests/helpers';

import jwt from 'jsonwebtoken';
const crypto = require('crypto');

jest.mock('../../../database/models/user');

const mockGet = jest.fn((key: string) => {
  switch (key) {
    case 'userId':
      return '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd';
    case 'email':
      return 'test@example.com';
    case 'name':
      return 'test';
    case 'password':
      return 'hashed_user_mock_password';
    default:
      return null;
  }
});

const userMock = {
  dataValues: {
    userId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
    email: 'test@example.com',
    name: 'test',
    password: 'hashed_user_mock_password',
    createdAt: '2023-04-16T19:17:52.965Z',
    updatedAt: '2023-04-16T19:17:52.968Z'
  },
  get: mockGet,
}

describe('login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return a 401 status if the user does not exist', async () => {
    const req = mockRequest<LoginRequest>({ email: 'test@example.com', password: 'test' });
    const res = mockResponse();

    (User.findOne as jest.Mock).mockResolvedValue(null);

    await login(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('User does not exist!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a 401 status if the password is invalid', async () => {
    const mockUpdate = jest.fn().mockReturnThis();
    const mockDigest = jest.fn().mockReturnValue('wrong_hashed_user_mock_password');

    jest.spyOn(crypto, 'createHmac').mockReturnValue({
      update: mockUpdate,
      digest: mockDigest,
    } as any);

    const req = mockRequest<LoginRequest>({ email: 'test@example.com', password: 'wrongPassword' });
    const res = mockResponse();

    (User.findOne as jest.Mock).mockResolvedValue(userMock);

    await login(req as Request, res as Response);

    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        email: req.body.email,
      },
    });

    expect(crypto.createHmac).toHaveBeenCalledWith('SHA256', process.env.PASSWORD_KEY);
    expect(mockUpdate).toHaveBeenCalledWith(req.body.password);
    expect(mockDigest).toHaveBeenCalledWith('base64');

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith('Invalid password!');
    expect(res.end).toHaveBeenCalled();
  });

  it('should return a LoginResponse if the login is successful', async () => {
    const mockUpdate = jest.fn().mockReturnThis();
    const mockDigest = jest.fn().mockReturnValue('hashed_user_mock_password');

    jest.spyOn(crypto, 'createHmac').mockReturnValue({
      update: mockUpdate,
      digest: mockDigest,
    } as any);

    jest.spyOn(jwt, 'sign');

    const req = mockRequest<LoginRequest>({ email: 'test@example.com', password: 'correctPassword' });
    const res = mockResponse();

    (User.findOne as jest.Mock).mockResolvedValue(userMock);

    await login(req as Request, res as Response);

    expect(User.findOne).toHaveBeenCalledWith({
      where: {
        email: req.body.email,
      },
    });

    expect(crypto.createHmac).toHaveBeenCalledWith('SHA256', process.env.PASSWORD_KEY);
    expect(mockUpdate).toHaveBeenCalledWith(req.body.password);
    expect(mockDigest).toHaveBeenCalledWith('base64');

    expect(jwt.sign).toHaveBeenCalledWith({ userId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd' }, process.env.SECRET);
    expect(res.json).toHaveBeenCalledWith({
      userId: '5bb2d763-49d1-4cc4-afb6-915f9fdfc8bd',
      name: 'test',
      email: 'test@example.com',
      accessToken: expect.any(String),
    });
  });
});
