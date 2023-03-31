import { Request, Response } from "express";

interface AuthedRequest extends Request {
  requestingUserId?: any;
}

const mockRequest = <T>(body: T, headers?: any, requestingUserId?: any): Partial<AuthedRequest> => ({
  body,
  headers,
  requestingUserId,
});

const mockResponse = (): Partial<Response> => {
  const res: Partial<Response> = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);
  return res;
};

export { mockRequest, mockResponse }