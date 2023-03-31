import { Response, NextFunction, Request } from 'express';
import { GetUserGroupsRequest } from '../../ports/requests';

const getUserGroupsAdapter = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const getGroupAttributes: GetUserGroupsRequest = {
    userId: req.body.userId,
  }
  if (!getGroupAttributes.userId) {
    return res.status(400).json('Invalid request params!').end();
  }
  next();
}

export { getUserGroupsAdapter }
